import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Sri_Lanka from './country/Sri_Lanka';
import India from './country/India';

import Home from './components/home';

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
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
                <div className="nav-scroller bg-white shadow-sm">
                    <nav className="nav nav-underline">
                        <span className="nav-link"><Link to="/country/sri_lanka">Sri Lanka</Link></span>
                        <span className="nav-link"><Link to="/country/india">India</Link></span>
                    </nav>
                </div>
                <main role="main" className="container">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/country/sri_lanka" component={Sri_Lanka}/>
                        <Route path="/country/india" component={India}/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
