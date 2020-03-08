import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modified: null,
            render: false
        };

    }

    compare(a, b) {
        if (a.public_contributions < b.public_contributions) {
            return 1;
        }
        if (a.public_contributions > b.public_contributions) {
            return -1;
        }
        return 0;
    }


    check_username(value) {
        if (value === null) {
            return 'Null'
        } else {
            return value
        }
    }

    limit(value) {
        return value.slice((this.props.match.params.from), (this.props.match.params.to))
    }

    mDate(date) {
        if (!this.state.render) {
            return <CircularProgress color="secondary"/>
        } else return new Date(date).toUTCString();
    }

    renderCountryData(param) {
        console.log(param);
        fetch('/contributions/' + param)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                try {
                    this.setState({data: responseJson[0].dataset, modified: responseJson[0].modified, render: true});
                } catch (e) {
                    console.log(e);
                }
            }).catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        var param = this.props.match.params.name;
        this.renderCountryData(param);
    }


    componentDidUpdate(prevProps) {
        var param = this.props.match.params.name;
        if (param !== prevProps.match.params.name)
            this.renderCountryData(param);
    }

    titleCase(str) {
        str = str.replace(/_/g, ' ');
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    render() {
        var isRender = this.state.render;
        if (!isRender) {
            return (
                <>
                    <AppBar position="static">
                        <LinearProgress />
                        <Toolbar>
                            <IconButton
                                component={Link}
                                to="/home"
                                color="inherit">
                                <ArrowBackIosIcon/>
                            </IconButton>
                            <Typography variant="h6">
                                GitHub Stats
                            </Typography>

                        </Toolbar>
                    </AppBar>
                </>
            );
        } else {
            return (
              <>
                  <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    component={Link}
                                    to="/home"
                                    color="inherit">
                                    <ArrowBackIosIcon/>
                                </IconButton>
                                <Typography variant="h6">
                                    GitHub Stats
                                </Typography>
                            </Toolbar>
                        </AppBar>

                  <Box my={2} mx={2}>
                      <Grid container>
                          <Grid item xs={12}>
                              <Paper className={["p-3"]}>

                                  <Typography variant="h6" gutterBottom >Active users from {this.titleCase(this.props.match.params.name)}</Typography>
                        <div className="table-responsive">

                            <table className="table table-borderless">
                                <caption>Last modified {this.mDate(this.state.modified)}</caption>
                                <thead>
                                <tr className="border-bottom">
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Total Contributions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.limit(this.state.data.sort(this.compare)).map((item, key) => {
                                    return <tr key={key} className="border-bottom">
                                        <td className="align-middle">{parseInt(this.props.match.params.from) + key + 1}</td>
                                        <td className={"align-middle"}>
                                            <img className="rounded shadow" src={item.avatar_url}
                                                 alt={item.login} width="48" height="48"/>
                                        </td>
                                        <td className="align-middle">
                                            <a className="text-gray-dark text-black-50" target={'_blank'} rel="noopener"
                                               href={'https://github.com/' + item.login}>
                                                <strong>{this.check_username(item.name)}</strong>

                                                <span className="d-block">
                                                @{item.login} ({item.followers})
                                            </span>
                                            </a>
                                        </td>
                                        <td className="text-black-50 align-middle text-break">{item.location}</td>
                                        <td className="font-weight-bold align-middle">{item.public_contributions}</td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>


                        <div className="bg-white rounded">
                            <nav className="nav pt-4 pb-2 table-responsive">
                                <ul className="pagination m-auto">
                                    <li className={"page-item " + (this.props.match.params.to === '300' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/300"}>All</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '25' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/25"}>25</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '50' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/50"}>50</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '75' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/75"}>75</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '100' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/100"}>100</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '125' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/125"}>125</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '150' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/150"}>150</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '175' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/175"}>175</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '200' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/200"}>200</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '225' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/225"}>225</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '250' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/250"}>250</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '275' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/275"}>275</Link>
                                    </li>
                                    <li className={"page-item " + (this.props.match.params.to === '300' ? "active" : null)}>
                                        <Link className="page-link"
                                              to={"/country/" + this.props.match.params.name + "/0/300"}>300</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                              </Paper>
                          </Grid>
                      </Grid>
                  </Box>

                  </>
            );
        }
    }
}

export default Country;