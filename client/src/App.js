import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Albania from './country/Albania';
import Argentina from './country/Argentina';
import Australia from './country/Australia';
import Austria from './country/Austria';
import Bangladesh from './country/Bangladesh';
import Belgium from './country/Belgium';
import Brazil from './country/Brazil';
import Canada from './country/Canada';
import China from './country/China';
import Croatia from './country/Croatia';
import Denmark from './country/Denmark';
import Estonia from './country/Estonia';
import Finland from './country/Finland';
import France from './country/France';
import Germany from './country/Germany';
import Greece from './country/Greece';
import India from './country/India';
import Indonesia from './country/Indonesia';
import Israel from './country/Israel';
import Italy from './country/Italy';
import Japan from './country/Japan';
import Latvia from './country/Latvia';
import Luxembourg from './country/Luxemburg';
import Malaysia from './country/Malaysia';
import Mexico from './country/Mexico';
import Netherlands from './country/Netherlands';
import NewZealand from './country/NewZealand';
import Norway from './country/Norway';
import Pakistan from './country/Pakistan';
import Philippines from './country/Philippines';
import Portugal from './country/Portugal';
import Romania from './country/Romania';
import Russia from './country/Russia';
import Singapore from './country/Singapore';
import Spain from './country/Spain';
import SriLanka from './country/SriLanka';
import Sweden from './country/Sweden';
import Thailand from './country/Thailand';
import Ukraine from './country/Ukraine';
import UnitedKingdom from './country/UnitedKingdom';

import Home from './components/home';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon
} from 'react-share';


function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/gayanvoice/GitHubStats">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
                    <nav className="nav nav-underline">
                        <span className="nav-link"><Link to="/country/albania">Albania</Link></span>
                        <span className="nav-link"><Link to="/country/argentina">Argentina</Link></span>
                        <span className="nav-link"><Link to="/country/australia">Australia</Link></span>
                        <span className="nav-link"><Link to="/country/austria">Austria</Link></span>
                        <span className="nav-link"><Link to="/country/bangladesh">Bangladesh</Link></span>
                        <span className="nav-link"><Link to="/country/belgium">Belgium</Link></span>
                        <span className="nav-link"><Link to="/country/brazil">Brazil</Link></span>
                        <span className="nav-link"><Link to="/country/canada">Canada</Link></span>
                        <span className="nav-link"><Link to="/country/china">China</Link></span>
                        <span className="nav-link"><Link to="/country/croatia">Croatia</Link></span>
                        <span className="nav-link"><Link to="/country/denmark">Denmark</Link></span>
                        <span className="nav-link"><Link to="/country/estonia">Estonia</Link></span>
                        <span className="nav-link"><Link to="/country/finland">Finland</Link></span>
                        <span className="nav-link"><Link to="/country/france">France</Link></span>
                        <span className="nav-link"><Link to="/country/germany">Germany</Link></span>
                        <span className="nav-link"><Link to="/country/greece">Greece</Link></span>
                        <span className="nav-link"><Link to="/country/india">India</Link></span>
                        <span className="nav-link"><Link to="/country/indonesia">Indonesia</Link></span>
                        <span className="nav-link"><Link to="/country/israel">Israel</Link></span>
                        <span className="nav-link"><Link to="/country/italy">Italy</Link></span>
                        <span className="nav-link"><Link to="/country/japan">Japan</Link></span>
                        <span className="nav-link"><Link to="/country/latvia">Latvia</Link></span>
                        <span className="nav-link"><Link to="/country/luxembourg">Luxembourg</Link></span>
                        <span className="nav-link"><Link to="/country/malaysia">Malaysia</Link></span>
                        <span className="nav-link"><Link to="/country/mexico">Mexico</Link></span>
                        <span className="nav-link"><Link to="/country/netherlands">Netherlands</Link></span>
                        <span className="nav-link"><Link to="/country/newzealand">New Zealand</Link></span>
                        <span className="nav-link"><Link to="/country/norway">Norway</Link></span>
                        <span className="nav-link"><Link to="/country/pakistan">Pakistan</Link></span>
                        <span className="nav-link"><Link to="/country/philippines">Philippines</Link></span>
                        <span className="nav-link"><Link to="/country/portugal">Portugal</Link></span>
                        <span className="nav-link"><Link to="/country/romania">Romania</Link></span>
                        <span className="nav-link"><Link to="/country/russia">Russia</Link></span>
                        <span className="nav-link"><Link to="/country/singapore">Singapore</Link></span>
                        <span className="nav-link"><Link to="/country/spain">Spain</Link></span>
                        <span className="nav-link"><Link to="/country/srilanka">Sri Lanka</Link></span>
                        <span className="nav-link"><Link to="/country/sweden">Sweden</Link></span>
                        <span className="nav-link"><Link to="/country/thailand">Thailand</Link></span>
                        <span className="nav-link"><Link to="/country/ukraine">Ukraine</Link></span>
                        <span className="nav-link"><Link to="/country/unitedkingdom">United Kingdom</Link></span>
                    </nav>
                </div>
                <div className="d-flex align-items-center p-3 mb-4 rounded shadow-sm mt-3">
                    <a className="nav-link" href="https://github.com/gayanvoice/GitHubStats"><img className="mr-3" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub Logo"  height="48"/></a>
                    <div className="lh-100">
                        <h6 className="mb-0 lh-100">GitHub Stats - Popular users of GitHub from various countries</h6>
                        <small>Get requests from GitHub API v4 using GraphQL by NodeJS</small>
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active mr-2">
                                        <FacebookShareButton url={window.location.href}>
                                            <FacebookIcon size={32} round={true}/>
                                        </FacebookShareButton>
                                    </li>
                                    <li className="nav-item mr-2">
                                        <TwitterShareButton url={window.location.href}>
                                            <TwitterIcon size={32} round={true}/>
                                        </TwitterShareButton>
                                    </li>
                                    <li className="nav-item mr-2">
                                        <LinkedinShareButton url={window.location.href}>
                                            <LinkedinIcon size={32} round={true}/>
                                        </LinkedinShareButton>
                                    </li>
                                    <li className="nav-item">
                                        <RedditShareButton url={window.location.href}>
                                            <RedditIcon size={32} round={true}/>
                                        </RedditShareButton>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </div>
                <main role="main" className="container">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/country/albania" component={Albania}/>
                        <Route path="/country/argentina" component={Argentina}/>
                        <Route path="/country/australia" component={Australia}/>
                        <Route path="/country/austria" component={Austria}/>
                        <Route path="/country/bangladesh" component={Bangladesh}/>
                        <Route path="/country/belgium" component={Belgium}/>
                        <Route path="/country/brazil" component={Brazil}/>
                        <Route path="/country/canada" component={Canada}/>
                        <Route path="/country/china" component={China}/>
                        <Route path="/country/croatia" component={Croatia}/>
                        <Route path="/country/denmark" component={Denmark}/>
                        <Route path="/country/estonia" component={Estonia}/>
                        <Route path="/country/finland" component={Finland}/>
                        <Route path="/country/france" component={France}/>
                        <Route path="/country/germany" component={Germany}/>
                        <Route path="/country/greece" component={Greece}/>
                        <Route path="/country/india" component={India}/>
                        <Route path="/country/indonesia" component={Indonesia}/>
                        <Route path="/country/israel" component={Israel}/>
                        <Route path="/country/italy" component={Italy}/>
                        <Route path="/country/japan" component={Japan}/>
                        <Route path="/country/latvia" component={Latvia}/>
                        <Route path="/country/luxembourg" component={Luxembourg}/>
                        <Route path="/country/malaysia" component={Malaysia}/>
                        <Route path="/country/mexico" component={Mexico}/>
                        <Route path="/country/netherlands" component={Netherlands}/>
                        <Route path="/country/newzealand" component={NewZealand}/>
                        <Route path="/country/norway" component={Norway}/>
                        <Route path="/country/pakistan" component={Pakistan}/>
                        <Route path="/country/philippines" component={Philippines}/>
                        <Route path="/country/portugal" component={Portugal}/>
                        <Route path="/country/romania" component={Romania}/>
                        <Route path="/country/russia" component={Russia}/>
                        <Route path="/country/singapore" component={Singapore}/>
                        <Route path="/country/spain" component={Spain}/>
                        <Route path="/country/srilanka" component={SriLanka}/>
                        <Route path="/country/sweden" component={Sweden}/>
                        <Route path="/country/thailand" component={Thailand}/>
                        <Route path="/country/ukraine" component={Ukraine}/>
                        <Route path="/country/unitedkingdom" component={UnitedKingdom}/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
