# GitHubStats
[![Build Status](https://travis-ci.org/gayanvoice/GitHubStats.svg?branch=master)](https://travis-ci.org/gayanvoice/GitHubStats)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/gayanvoice/GitHubStats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/GitHubStats/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/gayanvoice/GitHubStats.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/gayanvoice/GitHubStats/alerts/)
![GitHub](https://img.shields.io/github/license/gayanvoice/GitHubStats)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gayanvoice/GitHubStats)

[Go to the website](http://104.198.135.184:3000/)

The project queries the list of active users in GitHub by country using GitHub Graph API on Node.js and the UI is created by using React.js. The app updates in every 24 hours and displays 256 top contributers.

## Images
### Home
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/GitHubStats/images/github-stats-1.PNG "GitHub Stats")
### United States
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/GitHubStats/images/github-stats-2.PNG "GitHub Stats")
### China
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/GitHubStats/images/github-stats-4.PNG "GitHub Stats")


## How it works?
Users need to create a GitHub token to fetch the results from GitHub Graph API. The list of countries and the cities are listed in `server.js` as arrays and `GraphQuery.js` fetches the data from GitHub Graph API. After the fetch was completed, it creates a JSON file in `/client/src/data/` where the React app gets the list of users and the contribution.

## Contribute
Contributions are accepted and create a PR for contributions.
