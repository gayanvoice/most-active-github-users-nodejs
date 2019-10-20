# GitHubStats

[Go to the website](http://104.198.135.184:3000/)

Inline-style: 
![GitHub Stats](https://raw.githubusercontent.com/gayanvoice/GitHubStats/images/github-stats-1.PNG "GitHub Stats")


The project queries the list of active users in GitHub by country using GitHub Graph API on Node.js and the UI is created by using React.js.

## How it works?
Users need to create a GitHub token to fetch the results from GitHub Graph API. The list of countries and the cities are listed in `server.js` as arrays and `GraphQuery.js` fetches the data from GitHub Graph API. After the fetch was completed, it creates a JSON file in `/client/src/data/` where the React app gets the list of users and the contribution.
