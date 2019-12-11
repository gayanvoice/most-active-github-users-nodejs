
import React from 'react';
import { Link } from 'react-router-dom';
import  {TitleCase} from '../utils/utils'

export  function ListComponent({ countries}) {
    return (
        <div className="App">
        <div className="bg-white rounded shadow-lg m-2 p-4">
        <div className="App">
        <h2 className="mb-3">Choose a country</h2>
          
        <div className="list-group">
            {countries.map((item, key) => {
                return  <Link key={key} className="list-group-item list-group-item-action" to={"/country/"+ item.city[0].toLowerCase() + "/0/25"}>{TitleCase(item.city[0])}</Link>
                })}
        </div>
    </div>
    </div>
    </div>
    )
  }


          