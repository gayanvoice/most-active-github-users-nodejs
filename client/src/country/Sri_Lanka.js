import React from 'react';
import data from '../data/sri_lanka';

const Sri_Lanka = () => {
    return (
        <div className="App">
            <h1>Sri Lanka</h1>
            {data.map((item, key) => {
                return <div key={key}>{key} - <a href={'https://github.com/'+ item.login} target="_blank" rel="noopener noreferrer">{item.login}</a> {item.name}
                    @ {item.followers} {console.log(item.contribution)}
                </div>

            })}
        </div>
    );
};

export default Sri_Lanka;
