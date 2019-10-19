import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Sri_Lanka from './country/Sri_Lanka';
import India from './country/India';
import China from './country/China';

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
                <div className="nav-scroller bg-white">
                    <nav className="nav nav-underline">
                        <span className="nav-link"><Link to="/country/china">China</Link></span>
                        <span className="nav-link"><Link to="/country/sri_lanka">Sri Lanka</Link></span>
                        <span className="nav-link"><Link to="/country/india">India</Link></span>
                    </nav>
                </div>
                <div className="d-flex align-items-center p-3 mb-4 rounded shadow-sm">
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
                        <Route path="/country/sri_lanka" component={Sri_Lanka}/>
                        <Route path="/country/india" component={India}/>
                        <Route path="/country/china" component={China}/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
