const axios = require('axios');
const express = require("express");
const bodyParser = require('body-parser');

const data = require('./client/src/alphabet');

const fs = require('fs');

const key = '';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/query', (req, res) => {
    res.send({ express: data });
});



const GraphQlStr = `
query {
  search(type: USER, query:"location:china sort:followers-desc", first: 50, after:%s) {
    edges {
      node {
        __typename
        ... on User {
          login,
          avatarUrl,
          name,
          company,
          organizations(first: 1) {
            nodes {
              login
            }
          }
          followers {
            totalCount
          }
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    }
     pageInfo {
        endCursor
        hasNextPage
      }
  }
}
`;


var jsonAr=[], b={}, re = 0, next = true;

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

function  check_file() {
    const path = './client/src/alphabet.json';
    try {
        if (fs.existsSync(path)) {
           console.log('exists');
        } else {
            console.log('does not exist');
        }
    } catch(err) {
        console.error(err)
    }
}


function get(cursor, re) {

    if (!(re < 2)){
        next = false;
    } else {
        re = re + 1;
    }

    console.log(re);

    if(next) {
        axios
        .create({
            baseURL: 'https://api.github.com/graphql',
            headers: {
                Authorization: `bearer ` + key + ``
            },
        })
        .post('', {
            query: parse(GraphQlStr, cursor)
        })
        .then(({data}) => {
            var jsonStr = data.data.search.edges;
            cursor = "\"" + data.data.search.pageInfo.endCursor + "\"";
            next = data.data.search.pageInfo.hasNextPage;

            Object.keys(jsonStr).forEach(function (index, key) {
                if (jsonStr[key].node.__typename === "User") {
                    // "__typename": "User",
                    console.log(key, jsonStr[key].node.__typename, jsonStr[key].node.login, jsonStr[key].node.name, jsonStr[key].node.followers.totalCount);
                    b = {
                        'id': key,
                        'login': jsonStr[key].node.login,
                        'name': jsonStr[key].node.name,
                        'followers': jsonStr[key].node.followers.totalCount,
                        'contribution': jsonStr[key].node.contributionsCollection.contributionCalendar.totalContributions
                    };
                    jsonAr.push(b);
                } else {
                    console.log(jsonStr[key].node.__typename);
                }

            });
            get(cursor, re);
        })
        .catch(function (error) {
            console.log(error);
        });
    } else {
        const jsonContent = JSON.stringify(jsonAr);
        fs.writeFileSync("./client/src/alphabet.json", jsonContent, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        });
        console.log("The file saved!");
    }
    check_file();
}

get(null, re);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

var the_interval_check = 20 * 1000;
setInterval(function() {
    console.log("Check " + (the_interval_check/1000) + " seconds");
}, the_interval_check);

var the_interval_git = 60 * 1000;
setInterval(function() {
    jsonAr=[];
    b={};
    re = 0;
    next = true;
    console.log("Refresh lists");
    get(null, re);
}, the_interval_git);



const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
