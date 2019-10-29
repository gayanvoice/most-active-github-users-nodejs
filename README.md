# GitHubStats
[![Build Status](https://travis-ci.org/gayanvoice/GitHubStats.svg?branch=master)](https://travis-ci.org/gayanvoice/GitHubStats)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/gayanvoice/GitHubStats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/GitHubStats/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/gayanvoice/GitHubStats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/GitHubStats/alerts/)
![GitHub](https://img.shields.io/github/license/gayanvoice/GitHubStats)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gayanvoice/GitHubStats)

Go to HTTP [http://www.githubstats.com/](http://www.githubstats.com/)
Go to HTTP Secured [https://githubstats-com.herokuapp.com/](https://githubstats-com.herokuapp.com/)

The app is updated at every 24 hours. This React.js app fetches active users from GitHub GraphQL API using Express.js in Node.js. The app uses the number of public contributions
you have done in the year.

## Images
### China
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/GitHubStats/images/githubstatscom-screenshot-1.PNG "githubstats.com screenshots")
### India
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/githubstats/images/githubstats-screenshot-2.PNG "githubstats.com screenshots")

## How it works?
Users need to create a GitHub token to fetch the results from GitHub Graph API. The list of countries and the cities are listed in `server.js` as arrays and `GraphQuery.js` fetches the data from GitHub Graph API. After the fetch was completed, it creates a JSON file in `/client/src/data/` where the React app gets the list of users and the contribution.

## Contribute
You can contribute to this open-source project by suggestions to the issues of the server and client app. The project needs to improve it's performance, stability, and user interface of both server scripts and client app. Adding more countries to the project helps other to discover it's contribution to the GitHub. [How to the Contribute](https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md)

## Feature
1. Inside DevInside Dev (Oct 21st, 2019) https://inside.com/campaigns/inside-dev-2019-10-21-18599
