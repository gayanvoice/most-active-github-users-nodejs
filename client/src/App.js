import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Country from './components/Country';
import Home from './components/Home';
import About from './components/About';
import GitHubButton from 'react-github-btn';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg  shadow-lg">
          <div className="navbar-collapse" id="navbarsExampleDefault">
              <nav className="nav nav-underline">
                <span className="nav-link">
                    <Link to="/home"><img src={'https://image.flaticon.com/icons/svg/25/25231.svg'} height='24'/></Link>
                </span>

              </nav>
              <nav className="nav nav-underline">
              <span className="nav-link">
                    <Link to="/about"><img src={'https://image.flaticon.com/icons/svg/2188/2188563.svg'} height='24'/></Link>
                </span>
              </nav>
          </div>
        </nav>


          <main role="main" className="container pt-2 pb-2 mb-5">
              <Switch>
                  <Route path="/country/:country/:from/:to" component={Country} exact/>
                  <Route path="/country/:country/top" component={Country} exact/>
                  <Route path="/about" component={About} exact/>
                  <Route path="/home" component={Home} exact/>
                  <Route path="/" component={Home} exact/>
              </Switch>
          </main>

          <div className="nav-scroller bg-white col-8 p-3 m-auto table-responsive">
              <h6>Contributors</h6>
              <nav className="nav mb-1">
                  <a className="m-1" href={"https://github.com/gayanvoice"}><img alt={"gayanvoice"}
                                                                                 src={"https://avatars1.githubusercontent.com/u/30500175?s=48&v=4"}
                                                                                 className={"rounded"}/></a>
                  <a className="m-1" href={"https://github.com/srdjanRakic"}><img alt={"srdjanRakic"}
                                                                                  src={"https://avatars1.githubusercontent.com/u/16154503?s=48&v=4"}
                                                                                  className={"rounded"}/></a>
                  <a className="m-1" href={"https://github.com/nikolalukovic"}><img alt={"nikolalukovic"}
                                                                                    src={"https://avatars0.githubusercontent.com/u/6897673?s=48&v=4"}
                                                                                    className={"rounded"}/></a>
                  <a className="m-1" href={"https://github.com/Donghoon759"}><img alt={"Donghoon759"}
                                                                                  src={"https://avatars0.githubusercontent.com/u/32301380?s=48&v=4"}
                                                                                  className={"rounded"}/></a>

              </nav>
              <h6><span className="small">How to contribute? <a
                  href={"https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md"}> Add missing countries</a></span>
              </h6>
          </div>

          <div className={'align-items-center p-3 mb-4 mt-3 text-center'}>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice" data-size="large" data-show-count="true" aria-label="Follow @gayanvoice on GitHub">Follow @gayanvoice</GitHubButton></span>
              <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/githubstats" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star gayanvoice/githubstats on GitHub">Star</GitHubButton></span>
              <div><small>This project is not affiliated with the GitHub company in any way</small></div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
