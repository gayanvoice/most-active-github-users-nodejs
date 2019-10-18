import React from 'react';
import data from '../data/india';

function compare( a, b ) {
    if ( a.contribution < b.contribution ){
        return 1;
    }
    if ( a.contribution > b.contribution ){
        return -1;
    }
    return 0;
}

function check_username(value) {
    if(value === null) {
        return 'Null'
    } else {
        return value
    }
}
const India = () => {
    return (
        <div className="App">
            <div className="d-flex align-items-center p-3 my-4 rounded shadow-sm">
                <a className="nav-link" href="https://github.com/gayanvoice/GitHubStats"><img className="mr-3" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub Logo"  height="48"/></a>
                    <div className="lh-100">
                        <h6 className="mb-0 lh-100">GitHub Stats - Popular users of GitHub from various countries</h6>
                        <small>Get requests from GitHub API v4 using GraphQL by NodeJS. For the frontend, used ReactJS and Bootstrap and deployed in Google Cloud.</small>
                    </div>
            </div>
            <div className="my-3 p-3 bg-white rounded shadow-sm w-100">
                <h5 className="pb-2 mb-0">India</h5>
                <div className={"media text-muted pt-3"}>
                    <span className="mr-2 rounded bg-primary" height="64" width="64"/>
                    <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Username</strong>
                            Contributions
                        </div>
                    </div>
                </div>
                {data.sort(compare).map((item, key) => {
                    return   <div className={"media text-muted pt-3"}>
                        <h3 className="pr-4 font-weight-bold">{key + 1}</h3>
                        <img className="bd-placeholder-img mr-2 rounded" src={item.avatar_url} alt={item.login} width="64" height="64"/>
                        <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <a href={'https://github.com/' + item.login} target="_blank" className="text-black-50">
                                    <strong className="text-gray-dark">{check_username(item.name)}</strong>
                                </a>
                                {item.contribution}
                            </div>
                            <span className="d-block"><a href={'https://github.com/' + item.login} target="_blank" className="text-black-50">@{item.login}</a></span>
                        </div>
                </div>

                })}


                <small className="d-block text-right mt-3">
                    <a href="#">All suggestions</a>
                </small>
            </div>
        </div>
    );
};

export default India;
