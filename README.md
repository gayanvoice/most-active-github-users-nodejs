# GitHubStats
[![Build Status](https://travis-ci.org/gayanvoice/githubstats-github-graphql.svg?branch=master)](https://travis-ci.org/gayanvoice/githubstats-github-graphql)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/gayanvoice/githubstats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/githubstats/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/gayanvoice/githubstats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/githubstats/alerts/)
![GitHub](https://img.shields.io/github/license/gayanvoice/GitHubStats)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gayanvoice/GitHubStats)

Go to HTTP [http://www.githubstats.com/](http://www.githubstats.com/)
Go to HTTP Secured [https://githubstats-com.herokuapp.com/](https://githubstats-com.herokuapp.com/)

### The app is experimental and needs review on the code. Please contribute or raise an issue to look in to it.

### Frameworks
![GraphQL, Express.js, Node.js](https://raw.githubusercontent.com/gayanvoice/githubstats-github-graphql/images/github-stats-3.PNG "Frameworks GraphQL, Express.js, Node.js")

The app is updated at every 24 hours. This React.js app fetches active users from GitHub GraphQL API using Express.js in Node.js. The app uses the number of public amd private contributions
you have done in the year.

## Images
### Choose a country
![Home page](https://raw.githubusercontent.com/gayanvoice/githubstats-github-graphql/images/github-stats-1.PNG "githubstats.com screenshots")
### Active users from Ireland
![Ireland](https://raw.githubusercontent.com/gayanvoice/githubstats-github-graphql/images/github-stats-2.PNG "githubstats.com screenshots")

## How it works?
Users need to create a GitHub token to fetch the results from GitHub Graph API. The list of countries and the cities are listed in `server.js` as arrays and `GraphQuery.js` fetches the data from GitHub Graph API. After the fetch was completed, it creates a JSON file in `/client/src/data/` where the React app gets the list of users and the contribution.

## Contribute
You can contribute to this open-source project by suggestions to the issues of the server and client app. The project needs to improve it's performance, stability, and user interface of both server scripts and client app. Adding more countries to the project helps other to discover it's contribution to the GitHub. [How to the Contribute](https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md)

## Feature
1. Inside DevInside Dev (Oct 21st, 2019) https://inside.com/campaigns/inside-dev-2019-10-21-18599
