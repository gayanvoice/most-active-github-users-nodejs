const axios = require('axios');
const express = require("express");
const fs = require('fs');

const app = express();

const GraphQlStr = `
query {
  search(type: USER, query:"location:angola sort:followers-desc", first: 100, after:%s) {
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


var jsonAr=[], b={};

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

function  check_file() {
    const path = './alphabet.json';
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
function get(cursor) {
    axios
    .create({
        baseURL: 'https://api.github.com/graphql',
        headers: {
            Authorization: `bearer d790179c1e02ebbaa4843f755518f20ad58e4ca2`
        },
    })
    .post('', {
        query: parse(GraphQlStr, cursor)
    })
    .then(({data}) => {
        var jsonStr = data.data.search.edges;
        var c = "\"" + data.data.search.pageInfo.endCursor + "\"";
        var next = data.data.search.pageInfo.hasNextPage;
        if(next){
            Object.keys(jsonStr).forEach(function (index, key) {
                if(jsonStr[key].node.__typename === "User"){
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
            get(c);
        } else {
            //console.log(jsonAr);
            const jsonContent = JSON.stringify(jsonAr);
            fs.writeFileSync("client/src/alphabet.json", jsonContent, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            //process.exit(0)
        }
        check_file();
        console.log(c, next);
    })
}

get(null);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

var the_interval = 20 * 1000;
setInterval(function() {
    console.log("Check " + (the_interval/1000) + " seconds");
}, the_interval);


const API_PORT = process.env.PORT || 4000;
app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
