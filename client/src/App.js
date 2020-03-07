import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Country from './components/Country';
import Home from './components/Home';
import About from './components/About';
import GitHubButton from 'react-github-btn';

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar  navbar-expand-lg  shadow-lg">
                    <div className="navbar-collapse" id="navbarsExampleDefault">
                        <nav className="nav nav-underline">
                <span className="nav-link">
                    <Link to="/home"><img src={'https://image.flaticon.com/icons/svg/25/25231.svg'} alt={'go to home'}
                                          height='24'/></Link>
                </span>
                        </nav>
                    </div>
                </nav>


                <main role="main" className="container pt-5 pb-2 mb-5">
                    <Switch>
                        <Route path="/country/:name/:from/:to" component={Country} exact/>
                        <Route path="/about" component={About} exact/>
                        <Route path="/home" component={Home} exact/>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </main>

                <div className="nav-scroller bg-white col-10 p-3 m-auto table-responsive">
                    <h5>How it works?</h5>
                    <h6 className="pl-2 pr-2 pt-2 pb-1">
                        List of most active GitHub users in the country over the past year based on public contributions
                        of each user
                    </h6>
                    <h6 className="bg-light pl-2 pr-2 pt-1 pb-2">
                        To contribute, create your pull request and add changes to the project <a
                        href={"https://github.com/gayanvoice/nodejs-graphql"}>gayanvoice/nodejs-graphql</a>
                    </h6>
                </div>

                <div className="nav-scroller bg-white col-10 p-3 m-auto">
                    <h5>Frameworks</h5>
                    <nav className="nav mb-1">
                        <a className="m-1" href={"https://github.com/Nodejs"}>
                            <img alt={"Node.js"} src={"https://avatars1.githubusercontent.com/u/9950313?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/expressjs"}>
                            <img alt={"expressjs"} src={"https://avatars1.githubusercontent.com/u/5658226?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/mongodb"}>
                            <img alt={"mongodb"} src={"https://avatars1.githubusercontent.com/u/45120?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/facebook/react"}>
                            <img alt={"facebook"} src={"https://avatars1.githubusercontent.com/u/69631?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/graphql"}>
                            <img alt={"graphql"} src={"https://avatars1.githubusercontent.com/u/12972006?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                    </nav>
                </div>

                <div className="nav-scroller bg-white col-10 p-3 m-auto">
                    <h5>Deploy</h5>
                    <nav className="nav mb-1">
                        <a className="m-1" href={"https://heroku.com/"}>
                            <img alt={"Node.js"} src={"https://avatars1.githubusercontent.com/u/23211?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://www.mongodb.com/cloud/atlas"}>
                            <img alt={"expressjs"} src={"https://avatars1.githubusercontent.com/u/45120?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                    </nav>
                </div>

                <div className="nav-scroller bg-white col-10 p-3 m-auto table-responsive">
                    <h5>Contributors</h5>
                    <nav className="nav mb-1">
                        <a className="m-1" href={"https://github.com/gayanvoice"}>
                            <img alt={"gayanvoice"} src={"https://avatars1.githubusercontent.com/u/30500175?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/srdjanRakic"}>
                            <img alt={"srdjanRakic"} src={"https://avatars1.githubusercontent.com/u/16154503?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/nikolalukovic"}>
                            <img alt={"nikolalukovic"} src={"https://avatars0.githubusercontent.com/u/6897673?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/Donghoon759"}>
                            <img alt={"Donghoon759"} src={"https://avatars0.githubusercontent.com/u/32301380?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/AWIXOR"}>
                            <img alt={"AWIXOR"} src={"https://avatars0.githubusercontent.com/u/43700517?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/ronaldaug"}>
                            <img alt={"ronaldaug"} src={"https://avatars0.githubusercontent.com/u/33022876?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/Ademking"}>
                            <img alt={"Adem Kouki"} src={"https://avatars0.githubusercontent.com/u/12462188?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/shivaylamba"}>
                            <img alt={"Shivay Lamba"} src={"https://avatars0.githubusercontent.com/u/19529592?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>
                        <a className="m-1" href={"https://github.com/3imed-jaberi"}>
                            <img alt={"3imed-jaberi"} src={"https://avatars0.githubusercontent.com/u/43971542?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>

                    </nav>
                    <h6><span className="small">How to contribute? <a
                        href={"https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md"}> Add missing countries</a></span>
                    </h6>
                </div>

                <div className={'align-items-center p-3 mb-4 mt-3 text-center'}>
                    <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice" data-size="large"
                                                           data-show-count="true"
                                                           aria-label="Follow @gayanvoice on GitHub">Follow @gayanvoice</GitHubButton></span>
                    <span className={"ml-2"}><GitHubButton href="https://github.com/gayanvoice/nodejs-graphql"
                                                           data-icon="octicon-star" data-size="large"
                                                           data-show-count="true"
                                                           aria-label="Star gayanvoice/nodejs-graphql on GitHub">Star</GitHubButton></span>
                    <div><small>Like this project? Go to <a
                        href={'https://github.com/gayanvoice/nodejs-graphql'}>gayanvoice/nodejs-graphql</a></small>
                    </div>
                    <div><small>This project is not affiliated with the GitHub company in any way</small></div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
