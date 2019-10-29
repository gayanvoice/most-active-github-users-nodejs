# GitHub Stats (Contribute)
### How to become a contributor and submit your own code?
You can contribute to this open-source project by suggestions to the issues of the server and client app.
The project needs to improve it's performance, stability, and user interface of both server scripts and client app.
Adding more countries to the project helps other to discover it's contribution to the GitHub.

##### Fork
Getting started the contribution you need to `Fork` the project by your own to make sure you can `Merge` it with a `Pull request`
later to complete the contribution.

##### Clone
You can `clone` your `fork` by using `git clone repository` from the command prompt tool or
using an IDE like Web Storm, Visual Code and etc. After you `clone` the repository you can see the files
in the directory.

#### Add new country
##### Server
1. Create new country variable [server.js#L6](https://github.com/gayanvoice/githubstats/blob/ab7bafdc24cef53abd2ec01a7b73a6536172cc65/server.js#L6).
The array structure is `var country = ["CountryName", "CityName", "CityName"];` You can add five most populated cities. These cities should be supported by GitHub (Sometimes the native languages may not work).
2. Add city to the timer function [server.js#L292](https://github.com/gayanvoice/githubstats/blob/ab7bafdc24cef53abd2ec01a7b73a6536172cc65/server.js#L292).
The query structure is ` let query = new GraphQuery('country', country);` The `var country` variable is used. The country name should be lowercase. The timer should have 10 minute intervals.
3. Create the json file of the country in  [data](https://github.com/gayanvoice/githubstats/tree/master/data). Copy an existing json file and rename it to the country name.
##### Testing the server
1. Change the GitHub API key in [GraphQuery.js#L16](https://github.com/gayanvoice/githubstats/blob/ab7bafdc24cef53abd2ec01a7b73a6536172cc65/GraphQuery.js#L16). Replace it by your own API key from
[tokens](https://github.com/settings/tokens) with permissions to _read:discussion, read:enterprise, read:org, read:packages_ in GitHub.
2. Run the server by `node server.js`

**The country name is in the above three steps should be same. And it should be in lowercase, remove spaces, or characters like United States in `unitedstats` or Russia `russia`**
**The names of the cities should be in one word such as Buenos Aires in `BuenosAires` or Český Krumlov in `ČeskýKrumlov`**

##### Client
Add the country name to [App.js#L109](https://github.com/gayanvoice/githubstats/blob/a7e8283fdf933717fbef6dfadea754cf47176a98/client/src/App.js#L109). The structure is `<span className="nav-link"><Link to="/country/countryname/0/25">Country Name</Link></span>`

##### Testing the client
Go to the client directory `cd client` and run the React server by `npm run start`


### File system
#### Server
The root directory of the repository contains several folders and files. The server is a Node.js app.
To start the server `node server.js`.
<pre>
githubstats/
├── client/
│   ├── public/
│   └── ...
├── data/
│   ├── albania.json
│   └── ...
├── GraphQuery.js
├── server.js
└── util.js
</pre>
##### `data`
The folder contains the `.json` files, stores the  `JSON array` of the user data which is fetched
from the Graph API. 
##### `GraphQuery.js`
GraphQuery is a class which is used to fetch data from the GitHub GraphQL API.
It fetches 1000 users with most followers based on the locations.
##### `server.js`
This script is running the server. It calls the API, and requests user data from GitHub based
on the locations of the Javascript arrays.
##### `util.js`
This contains some basic functions such as `check_file(path)`, `parse(String)`, and `locations(array)`.


#### Client
The root directory of the client repository contains several folders and files.
The client app is written using React.js. To start the client app, go to client directory `cd client` and `npm run start`.
<pre>
githubstats/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── github-log64.ico
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── Country.js
│   │   ├── App.js
│   │   ├── setupProxy.js
│   │   └── ...
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
└── ...
</pre>
##### `public`
The folder contains the `.ico` files, and index.html file.
##### `src`
The folder contains the `components` folder which contains `Country.js` file.
##### `components/Country.js`
This React Component fetches the list of users and render the list as a range.
It has several methods like `compare(a, b)`, `check_username(value)`, `limit(value)`, and `renderMyData(param)`.
##### `App.js`
The main React App component which is used to display the content of the React Component and the UI.
##### `setupProxy.js`
The app connects to the server through the API.

 

