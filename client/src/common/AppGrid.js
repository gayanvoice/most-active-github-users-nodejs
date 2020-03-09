import React from "react";

import GitHubButton from "react-github-btn";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function AppGrid() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper className={["p-3", classes.paper]}>
                    <Typography variant="h6" gutterBottom>How it works?</Typography>
                    <Typography variant="body1" gutterBottom>
                        List of most active GitHub users in the country over the past year based on public contributions
                        of each user. To contribute, create your pull request and add changes to the project <a
                        href={"https://github.com/gayanvoice/nodejs-graphql"}>gayanvoice/nodejs-graphql</a>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={["p-3", classes.paper]}>
                    <Typography variant="h6" gutterBottom>Frameworks</Typography>
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

                </Paper>

            </Grid>
            <Grid item xs={6}>
                <Paper className={["p-3", classes.paper]}>
                    <Typography variant="h6" gutterBottom>Deploy</Typography>
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
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={["p-2", classes.paper]}>
                    <Typography variant="h6" gutterBottom >Contributors</Typography>
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
                        <a className="m-1" href={"https://github.com/3imed-jaberi"}>
                            <img alt={"3imed-jaberi"} src={"https://avatars0.githubusercontent.com/u/43971542?s=48&v=4"}
                                 className={"rounded"}/>
                        </a>


                    </nav>
                    <Typography variant="subtitle1" gutterBottom >How to contribute? <a
                        href={"https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md"}> Add missing countries</a></Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={["p-3", classes.paper]}>
                    <div className={'align-items-center text-center'}>
                    <span className={"ml-2"}>
                        <GitHubButton href="https://github.com/gayanvoice" data-size="large"
                                      data-show-count="true"
                                      aria-label="Follow @gayanvoice on GitHub">Follow @gayanvoice</GitHubButton>
                    </span>
                        <span className={"ml-2"}>
                                    <GitHubButton
                                        href="https://github.com/gayanvoice/most-active-github-users-nodejs"
                                        data-icon="octicon-star" data-size="large"
                                        data-show-count="true"
                                        aria-label="Star gayanvoice/most-active-github-users-nodejs on GitHub">Star</GitHubButton>
                                </span>
                        <Typography variant="subtitle1" gutterBottom >Like this project? Go to <a
                            href={'https://github.com/gayanvoice/most-active-github-users-nodejs'}>gayanvoice/most-active-github-users-nodejs</a></Typography>
                        <Typography variant="subtitle1" gutterBottom >This project is not affiliated with the GitHub company in any way</Typography>
                    </div>
                </Paper>

            </Grid>

        </Grid>
    )

}