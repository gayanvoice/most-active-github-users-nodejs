import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Country from './containers/Country';
import Home from './containers/Home';
import About from './containers/About';
import { Navbar, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>

        <Navbar />


        <main role="main" className="container pt-5 pb-2 mb-5">
          <Switch>
            <Route path="/country/:name/:from/:to" component={Country} exact />
            <Route path="/about" component={About} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </main>


        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
