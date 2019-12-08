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

---
#### Add new country
##### Server
##### Create new country array object [server.js#L62](https://github.com/gayanvoice/githubstats-github-graphql/blob/d00a177b006cb4d08052f58a9f8415fe504b55f3/server.js#L62).
The array structure is ` {city: ["Country_Name", "CountryName", "City", "City"]}` You can add five most populated cities. These cities should be supported by GitHub (Sometimes the native languages may not work).

---
##### Client
##### Add the country name to [Home.js#L122](https://github.com/gayanvoice/githubstats-github-graphql/blob/d00a177b006cb4d08052f58a9f8415fe504b55f3/client/src/components/Home.js#L122).

#### After you have done the changes you can create a [Create request](https://github.com/gayanvoice/githubstats/pulls) and name it `Add Country Name` for an example `Add Austria`. After the review, if there are no errors your contribution will be displayed in [GitHubStats](http://www.githubstats.com/) with a link to your GitHub profile.

---
### File system
#### Server
The root directory of the repository contains several folders and files. The server is a Node.js app.
To start the server `node server.js`.
<pre>
githubstats/
├── client/
│   ├── public/
│   └── ...
├── GraphQuery.js
├── server.js
└── util.js
</pre>
##### `GraphQuery.js`
GraphQuery is a class which is used to fetch data from the GitHub GraphQL API.
It fetches 1000 users with most followers based on the locations.
##### `server.js`
This script is running the server. It calls the API, and requests user data from GitHub based
on the locations of the Javascript arrays.
##### `util.js`
This contains some basic functions such as `check_file(path)`, `parse(String)`, and `locations(array)`.

---
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
│   │   │   ├── About.js
│   │   │   ├── Country.js
│   │   │   └── Home.js
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
##### `components/Home.js`
This React Component fetches the list of countries and render it in a table.
##### `App.js`
The main React App component which is used to display the content of the React Component and the UI.
##### `setupProxy.js`
The app connects to the server through the API.

 

