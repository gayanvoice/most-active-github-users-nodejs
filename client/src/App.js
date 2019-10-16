import React from 'react';
import './App.css';
import data from './alphabet';

function App() {
  return (
      <div className="App">
        <h1>GH Pages</h1>

        {data.map((item, key) => {
          return <div key={key}>{key} - <a href={'https://github.com/'+ item.login} target="_blank" rel="noopener noreferrer">{item.login}</a> {item.name}
            @ {item.followers} {console.log(item.contribution)}
          </div>

        })}
      </div>

  );

}

export default App;
