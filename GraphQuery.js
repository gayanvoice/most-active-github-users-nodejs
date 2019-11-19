const axios = require('axios');
const util = require('./util');
var mongo = require('mongodb').MongoClient;
const assert = require('assert');

module.exports = class GraphQuery {

    constructor(cities, key, records, url){
        process.stdout.write(cities[0].toLowerCase() + ' ');
        this.jsonAr=[];
        this.refresh = 0;
        this.next = true;
        this.cursor = null;
        this.cities = cities;
        this.country = cities[0].toLowerCase();
        this.key = key;
        this.url = url;
        this.per = records[0];
        this.num = records[1];

        this.query = `
        query {
          search(type: USER, query:"%s sort:followers-desc", first:%s, after:%s) {
            edges {
              node {
                __typename
                ... on User {
                  login,
                  avatarUrl(size: 72),
                  name,
                  company,
                  location,
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
                    restrictedContributionsCount
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
        if (!(this.refresh < this.num)){
            this.next = false;
        } else {
            this.refresh = this.refresh + 1;
        }
        //console.log(this.re);
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
                    //console.log(data);
                    var jsonStr = data.data.search.edges;
                    var jsonAr = this.jsonAr;
                    this.cursor = "\"" + data.data.search.pageInfo.endCursor + "\"";
                    this.next = data.data.search.pageInfo.hasNextPage;

                    process.stdout.write( this.refresh + ' ');
                    Object.keys(jsonStr).forEach(function (index, key) {
                        if (jsonStr[key].node.__typename === "User") {
                            // "__typename": "User",
                            //process.stdout.write(index + ' ');
                            //console.log(key, jsonStr[key].node.__typename, jsonStr[key].node.login, jsonStr[key].node.name, jsonStr[key].node.followers.totalCount);
                            var record = {
                                'id': key,
                                'avatar_url': jsonStr[key].node.avatarUrl,
                                'login': jsonStr[key].node.login,
                                'name': jsonStr[key].node.name,
                                'location': jsonStr[key].node.location,
                                'followers': jsonStr[key].node.followers.totalCount,
                                'public_contributions': jsonStr[key].node.contributionsCollection.contributionCalendar.totalContributions,
                                'private_contributions': jsonStr[key].node.contributionsCollection.restrictedContributionsCount
                            };
                            jsonAr.push(record);
                        } else {
                            console.log(jsonStr[key].node.__typename);
                        }
                    });
                    this.request();
                })
                .catch(function (e) {
                    console.log(util.getDateTime() + e);
                });
        } else {
            var data  = {
                country: this.country,
                dataset: this.jsonAr,
                modified: util.getDateTime()
        };
           mongo.connect(this.url, {useUnifiedTopology: true}, function(err, client) {
                assert.equal(null, err);
                const collection = client.db("database").collection("countries");
                collection.updateOne(
                    {_country: data.country},
                    {$set:data},
                    {upsert: true})
                    .then(function() {
                    // process result
                    client.close();
                });
            });

            console.log(util.getDateTime() + " The file is saved!" + util.locations(this.cities));
        }
        util.check_file(this.path);
    }
};
