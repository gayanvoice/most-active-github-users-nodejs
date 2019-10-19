var fs = require('fs');
const axios = require('axios');
const util = require('./util');


module.exports = class GraphQuery {

    constructor(country, cities){
        this.jsonAr=[];
        this.b={};
        this.re = 0;
        this.next = true;
        this.cursor = null;
        this.cities = cities;
        this.path = './client/src/data/'+country+'.json';
        this.key = '';
        this.per = 10;
        this.num = 5;

        this.query = `
        query {
          search(type: USER, query:"%s sort:followers-desc", first:%s, after:%s) {
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
        }`;

    }

    request(){
        console.log(util.locations(this.cities));
        if (!(this.re < this.num)){
            this.next = false;
        } else {
            this.re = this.re + 1;
        }
        console.log(this.re);
        if(this.next) {
            axios
                .create({
                    baseURL: 'https://api.github.com/graphql',
                    headers: {
                        Authorization: `bearer `  + this.key + ``
                    },
                })
                .post('', {
                    query: util.parse(this.query, util.locations(this.cities), this.per, this.cursor)
                })
                .then(({data}) => {
                    console.log(data);
                    var jsonStr = data.data.search.edges;
                    var jsonAr = this.jsonAr;
                    this.cursor = "\"" + data.data.search.pageInfo.endCursor + "\"";
                    this.next = data.data.search.pageInfo.hasNextPage;

                    Object.keys(jsonStr).forEach(function (index, key) {
                        if (jsonStr[key].node.__typename === "User") {
                            // "__typename": "User",
                            console.log(key, jsonStr[key].node.__typename, jsonStr[key].node.login, jsonStr[key].node.name, jsonStr[key].node.followers.totalCount);
                            var b = {
                                'id': key,
                                'avatar_url': jsonStr[key].node.avatarUrl,
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
                    this.request();
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            const jsonContent = JSON.stringify(this.jsonAr);
            fs.writeFileSync(this.path, jsonContent, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            console.log("The file is saved!");
        }
        util.check_file(this.path);

    }
};
