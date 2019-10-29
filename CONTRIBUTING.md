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
The root directory of the repository contains several folders and files.
<pre>
githubstats/
├── .github/
├── .idea/
├── client/
│   ├── public/
│   └── ...
├── data/
│   ├── albania.json
│   └── ...
├── .gtignore
├── .travis.yml
├── CONTRIBUTING.md
├── GraphQuery.js
├── LICENCE
├── README.md
├── package-lock.json
├── package.json
├── server.js
└── util.js
</pre>
##### `data`
The folder contains the `.json` files, stores the  `JSON array` of the user data which is fetched
from the Graph API. 
 

