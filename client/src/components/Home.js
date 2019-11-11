import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
      <div className="App">
        <div className="bg-white rounded shadow-lg m-2 p-4">
            <h2 className="mb-3">Choose a country</h2>
            <div className="table-responsive">
            <table className="table table-borderless w-100">
                <tbody>
                <tr>
                    <th>A</th>
                    <td><Link className="font-weight-bold" to="/country/albania/0/25">Albania</Link></td>
                    <td><Link className="font-weight-bold" to="/country/argentina/0/25">Argentina</Link></td>
                    <td><Link className="font-weight-bold" to="/country/australia/0/25">Australia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/austria/0/25">Austria</Link></td>
                </tr>
                <tr>
                    <th>B</th>
                    <td><Link className="font-weight-bold" to="/country/bangladesh/0/25">Bangladesh</Link></td>
                    <td><Link className="font-weight-bold" to="/country/belgium/0/25">Belgium</Link></td>
                    <td><Link className="font-weight-bold" to="/country/brazil/0/25">Brazil</Link></td>
                </tr>
                <tr>
                    <th>C</th>
                    <td><Link className="font-weight-bold" to="/country/canada/0/25">Canada</Link></td>
                    <td><Link className="font-weight-bold" to="/country/china/0/25">China</Link></td>
                    <td><Link className="font-weight-bold" to="/country/croatia/0/25">Croatia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/czech_republic/0/25">Czech Republic</Link></td>
                </tr>
                <tr>
                    <th>D</th>
                    <td><Link className="font-weight-bold" to="/country/denmark/0/25">Denmark</Link></td>
                </tr>
                <tr>
                    <th>E</th>
                    <td><Link className="font-weight-bold" to="/country/estonia/0/25">Estonia</Link></td>
                </tr>
                <tr>
                    <th>F</th>
                    <td><Link className="font-weight-bold" to="/country/finland/0/25">Finland</Link></td>
                    <td><Link className="font-weight-bold" to="/country/france/0/25">France</Link></td>
                </tr>
                <tr>
                    <th>G</th>
                    <td><Link className="font-weight-bold" to="/country/germany/0/25">Germany</Link></td>
                    <td><Link className="font-weight-bold" to="/country/greece/0/25">Greece</Link></td>
                </tr>
                <tr>
                    <th>H</th>
                    <td><Link className="font-weight-bold" to="/country/hong_kong/0/25">Hong Kong</Link></td>
                </tr>
                <tr>
                    <th>I</th>
                    <td><Link className="font-weight-bold" to="/country/india/0/25">India</Link></td>
                    <td><Link className="font-weight-bold" to="/country/indonesia/0/25">Indonesia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/ireland/0/25">Ireland</Link></td>
                    <td><Link className="font-weight-bold" to="/country/israel/0/25">Israel</Link></td>
                </tr>
                <tr>
                    <th>{null}</th>
                    <td><Link className="font-weight-bold" to="/country/italy/0/25">Italy</Link></td>
                </tr>
                <tr>
                    <th>J</th>
                    <td><Link className="font-weight-bold" to="/country/japan/0/25">Japan</Link></td>
                </tr>
                <tr>
                    <th>L</th>
                    <td><Link className="font-weight-bold" to="/country/latvia/0/25">Latvia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/luxembourg/0/25">Luxembourg</Link></td>
                </tr>
                <tr>
                    <th>M</th>
                    <td><Link className="font-weight-bold" to="/country/macedonia/0/25">Macedonia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/malaysia/0/25">Malaysia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/mexico/0/25">Mexico</Link></td>
                </tr>
                <tr>
                    <th>N</th>
                    <td><Link className="font-weight-bold" to="/country/nepal/0/25">Nepal</Link></td>
                    <td><Link className="font-weight-bold" to="/country/netherlands/0/25">Netherlands</Link></td>
                    <td><Link className="font-weight-bold" to="/country/new_zealand/0/25">New Zealand</Link></td>
                    <td><Link className="font-weight-bold" to="/country/norway/0/25">Norway</Link></td>
                </tr>
                <tr>
                    <th>P</th>
                    <td><Link className="font-weight-bold" to="/country/pakistan/0/25">Pakistan</Link></td>
                    <td><Link className="font-weight-bold" to="/country/philippines/0/25">Philippines</Link></td>
                    <td><Link className="font-weight-bold" to="/country/poland/0/25">Poland</Link></td>
                    <td><Link className="font-weight-bold" to="/country/portugal/0/25">Portugal</Link></td>
                </tr>
                <tr>
                    <th>R</th>
                    <td><Link className="font-weight-bold" to="/country/romania/0/25">Romania</Link></td>
                    <td><Link className="font-weight-bold" to="/country/russia/0/25">Russia</Link></td>
                </tr>
                <tr>
                    <th>S</th>
                    <td><Link className="font-weight-bold" to="/country/serbia/0/25">Serbia</Link></td>
                    <td><Link className="font-weight-bold" to="/country/singapore/0/25">Singapore</Link></td>
                    <td><Link className="font-weight-bold" to="/country/south_korea/0/25">South Korea</Link></td>
                    <td><Link className="font-weight-bold" to="/country/spain/0/25">Spain</Link></td>
                </tr>
                <tr>
                    <th>{null}</th>
                    <td><Link className="font-weight-bold" to="/country/sri_lanka/0/25">Sri Lanka</Link></td>
                    <td><Link className="font-weight-bold" to="/country/sweden/0/25">Sweden</Link></td>
                </tr>
                <tr>
                    <th>T</th>
                    <td><Link className="font-weight-bold" to="/country/taiwan/0/25">Taiwan</Link></td>
                    <td><Link className="font-weight-bold" to="/country/thailand/0/25">Thailand</Link></td>
                </tr>
                <tr>
                    <th>U</th>
                    <td><Link className="font-weight-bold" to="/country/ukraine/0/25">Ukraine</Link></td>
                    <td><Link className="font-weight-bold" to="/country/united_arab_emirates/0/25">United Arab Emirates</Link></td>
                    <td><Link className="font-weight-bold" to="/country/united_kingdom/0/25">United Kingdom</Link></td>
                    <td><Link className="font-weight-bold" to="/country/united_states/0/25">United States</Link></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

      </div>
  );
}

export default Home;
