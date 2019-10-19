import React  from 'react';
import data from '../data/algeria';

const country_name = "Algeria";

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

function limit(value) {
    return  value.slice(0, 256)
}


const Algeria = () => {
    return (
        <div className="App">
            <div className="my-3 p-3 bg-white rounded shadow-sm w-100">
                <h5 className="pb-2 mb-0 font-weight-bold">Active users from {country_name}</h5>
                <div className={"media text-muted pt-3"}>
                    <span className="mr-2 rounded bg-primary" height="64" width="64"/>
                    <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Username (Followers)</strong>
                            Contributions
                        </div>
                    </div>
                </div>
                {limit(data.sort(compare)).map((item, key) => {
                    return   <div className={"media text-muted pt-3"}>
                        <h3 className="pr-4 font-weight-bold">{key + 1}</h3>
                        <img className="bd-placeholder-img mr-2 rounded" src={item.avatar_url} alt={item.login} width="64" height="64"/>
                        <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer"  className="text-black-50">
                                    <strong className="text-gray-dark">{check_username(item.name)}</strong>
                                </a>
                                {item.contribution}
                            </div>
                            <span className="d-block"><a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer" className="text-black-50">@{item.login} ({item.followers})</a></span>
                        </div>
                </div>

                })}


                <small className="d-block text-center mt-3">
                    Go to <a  href="https://github.com/gayanvoice/GitHubStats">GitHub Repository</a>
                </small>
            </div>
        </div>
    );
};

export default Algeria;
