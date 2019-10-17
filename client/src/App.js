import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Sri_Lanka from './country/Sri_Lanka';
import Home from './components/home';

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/country/sri_lanka">Sri Lanka</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/country/sri_lanka" component={Sri_Lanka}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
