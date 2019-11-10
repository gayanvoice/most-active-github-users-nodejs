import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


function Home() {
  return (
      <div>
        <div className="bg-white rounded shadow-lg m-2 p-4">
            <div className="table-responsive">
            <table className="table table-borderless w-100">
                <tbody>
                <tr>
                    <th>A</th>
                    <td><Link to="/country/albania/top">Albania</Link></td>
                    <td><Link to="/country/argentina/top">Argentina</Link></td>
                    <td><Link to="/country/australia/top">Australia</Link></td>
                    <td><Link to="/country/austria/top">Austria</Link></td>
                </tr>
                <tr>
                    <th>B</th>
                    <td><Link to="/country/bangladesh/top">Bangladesh</Link></td>
                    <td><Link to="/country/belgium/top">Belgium</Link></td>
                    <td><Link to="/country/brazil/top">Brazil</Link></td>
                </tr>
                <tr>
                    <th>C</th>
                    <td><Link to="/country/canada/top">Canada</Link></td>
                    <td><Link to="/country/china/top">China</Link></td>
                    <td><Link to="/country/croatia/top">Croatia</Link></td>
                    <td><Link to="/country/czech_Republic/top">Czech Republic</Link></td>
                </tr>
                <tr>
                    <th>D</th>
                    <td><Link to="/country/denmark/top">Denmark</Link></td>
                </tr>
                <tr>
                    <th>E</th>
                    <td><Link to="/country/estonia/top">Estonia</Link></td>
                </tr>
                <tr>
                    <th>F</th>
                    <td><Link to="/country/finland/top">Finland</Link></td>
                    <td><Link to="/country/france/top">France</Link></td>
                </tr>
                <tr>
                    <th>G</th>
                    <td><Link to="/country/germany/top">Germany</Link></td>
                    <td><Link to="/country/greece/top">Greece</Link></td>
                </tr>
                <tr>
                    <th>H</th>
                    <td><Link to="/country/hongkong/top">Hong Kong</Link></td>
                </tr>
                <tr>
                    <th>I</th>
                    <td><Link to="/country/india/top">India</Link></td>
                    <td><Link to="/country/indonesia/top">Indonesia</Link></td>
                    <td><Link to="/country/ireland/top">Ireland</Link></td>
                    <td><Link to="/country/israel/top">Israel</Link></td>
                </tr>
                <tr>
                    <th></th>
                    <td><Link to="/country/italy/top">Italy</Link></td>
                </tr>
                <tr>
                    <th>J</th>
                    <td><Link to="/country/japan/top">Japan</Link></td>
                </tr>
                <tr>
                    <th>L</th>
                    <td><Link to="/country/latvia/top">Latvia</Link></td>
                    <td><Link to="/country/luxembourg/top">Luxembourg</Link></td>
                </tr>
                <tr>
                    <th>M</th>
                    <td><Link to="/country/macedonia/top">Macedonia</Link></td>
                    <td><Link to="/country/malaysia/top">Malaysia</Link></td>
                    <td><Link to="/country/mexico/top">Mexico</Link></td>
                </tr>
                <tr>
                    <th>N</th>
                    <td><Link to="/country/nepal/top">Nepal</Link></td>
                    <td><Link to="/country/netherlands/top">Netherlands</Link></td>
                    <td><Link to="/country/new_zealand/top">New Zealand</Link></td>
                    <td><Link to="/country/norway/top">Norway</Link></td>
                </tr>
                <tr>
                    <th>P</th>
                    <td><Link to="/country/pakistan/top">Pakistan</Link></td>
                    <td><Link to="/country/philippines/top">Philippines</Link></td>
                    <td><Link to="/country/poland/top">Poland</Link></td>
                    <td><Link to="/country/portugal/top">Portugal</Link></td>
                </tr>
                <tr>
                    <th>R</th>
                    <td><Link to="/country/romania/top">Romania</Link></td>
                    <td><Link to="/country/russia/top">Russia</Link></td>
                </tr>
                <tr>
                    <th>S</th>
                    <td><Link to="/country/serbia/top">Serbia</Link></td>
                    <td><Link to="/country/singapore/top">Singapore</Link></td>
                    <td><Link to="/country/south_korea/top">South Korea</Link></td>
                    <td><Link to="/country/spain/top">Spain</Link></td>
                </tr>
                <tr>
                    <th></th>
                    <td><Link to="/country/sri_Lanka/top">Sri Lanka</Link></td>
                    <td><Link to="/country/sweden/top">Sweden</Link></td>
                </tr>
                <tr>
                    <th>T</th>
                    <td><Link to="/country/taiwan/top">Taiwan</Link></td>
                    <td><Link to="/country/thailand/top">Thailand</Link></td>
                </tr>
                <tr>
                    <th>U</th>
                    <td><Link to="/country/ukraine/top">Ukraine</Link></td>
                    <td><Link to="/country/united_arab_emirates/top">United Arab Emirates</Link></td>
                    <td><Link to="/country/united_kingdom/top">United Kingdom</Link></td>
                    <td><Link to="/country/united_states/top">United States</Link></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

      </div>
  );
}

export default Home;
