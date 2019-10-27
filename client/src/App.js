import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Country from './components/Country';

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
                        <span className="nav-link"><Link to="/country/hongkong">Hong Kong</Link></span>
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
                        <span className="nav-link"><Link to="/country/taiwan">Taiwan</Link></span>
                        <span className="nav-link"><Link to="/country/thailand">Thailand</Link></span>
                        <span className="nav-link"><Link to="/country/ukraine">Ukraine</Link></span>
                        <span className="nav-link"><Link to="/country/unitedkingdom">United Kingdom</Link></span>
                        <span className="nav-link"><Link to="/country/unitedstates">United States</Link></span>
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
                        <Route path="/country/:country" component={Country} exact/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
