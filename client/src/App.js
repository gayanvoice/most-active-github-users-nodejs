import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Country from './component/Country';
import Home from './component/Home';
import About from './component/About';
import Stats from "./component/Stats";
import AppGrid from './common/AppGrid'

export default function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline/>
                <Box >
                    <Switch>
                        <Route path="/country/:name/:from/:to" component={Country} exact/>
                        <Route path="/stats/:user/:repository" component={Stats} exact/>
                        <Route path="/stats/" component={Stats} exact/>
                        <Route path="/about" component={About} exact/>
                        <Route path="/home" component={Home} exact/>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </Box>
            </React.Fragment>
            <Box my={2} mx={2}>
                {AppGrid}
            </Box>
        </BrowserRouter>
    );
}
