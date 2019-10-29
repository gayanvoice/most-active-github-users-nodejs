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
The client app is written using React.js. To start the client app Go to client directory `cd client` and `npm run start`.
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

 

