import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LinearProgress  from '@material-ui/core/LinearProgress';
import CircularProgress  from '@material-ui/core/CircularProgress';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            modified : null,
            render: false
        };

    }

    compare( a, b ) {
        if ( a.contribution < b.contribution ){
            return 1;
        }
        if ( a.contribution > b.contribution ){
            return -1;
        }
        return 0;
    }


    check_username(value) {
        if(value === null) {
            return 'Null'
        } else {
            return value
        }
    }

    limit(value) {
        return value.slice((this.props.match.params.from), (this.props.match.params.to))
    }

    mDate(date){
        if(!this.state.render){return <CircularProgress color="secondary" />}
        else return new Date(date).toUTCString();
    }

    renderCountryData(param){
        console.log(param);
        fetch('/country/'+ param)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({ data : responseJson[0].dataset, modified: responseJson[0].modified, render: true});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount(){
        var param = this.props.match.params.name;
        this.renderCountryData(param);
    }


    componentDidUpdate(prevProps) {
        var param = this.props.match.params.name;
        if (param !== prevProps.match.params.name)
            this.renderCountryData(param);
      }

    titleCase(str) {
        str = str.replace(/_/g,' ');
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
                <div className="App">
                    <div className=" bg-white w-100">
                        <LinearProgress color="secondary" />
                    </div>
                </div>) // note you can also return null here to render nothing
        } else {
            return (
                <div className="App">
                    <div className="bg-white rounded w-100">
                        <h2>Active users from {this.titleCase(this.props.match.params.name)}</h2>

                        <div className="table-responsive">

                            <table className="table table-borderless">
                                <caption>Last modified {this.mDate(this.state.modified)}</caption>
                                <thead>
                                <tr className="border-bottom">
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Contribution</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.limit(this.state.data.sort(this.compare)).map((item, key) => {
                                    return <tr key={key} className="border-bottom">
                                        <td className="align-middle">{parseInt(this.props.match.params.from) + key + 1}</td>
                                        <td className={"align-middle"}>
                                            <img className="rounded" src={item.avatar_url}
                                                                            alt={item.login} width="48" height="48"/>
                                        </td>
                                        <td className="align-middle">
                                            <a className="m-2 text-gray-dark text-black-50" href={'https://github.com/' + item.login}>
                                            <strong>{this.check_username(item.name)}</strong>

                                            <span className="d-block">
                                                @{item.login} ({item.followers})
                                            </span>
                                            </a>
                                        </td>
                                        <td className="text-black-50 align-middle">{item.location}</td>
                                        <td className="font-weight-bold align-middle">{item.contribution}</td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>

                        <div className="nav-scroller bg-white rounded col-8 m-auto">
                            <nav className="nav">
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.name + "/0/300"}>All</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/0/25"}>25</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/25/50"}>50</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/50/75"}>75</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/75/100"}>100</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/100/125"}>125</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/125/150"}>150</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/150/175"}>175</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/175/200"}>200</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/200/225"}>225</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/225/250"}>250</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/250/275"}>275</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/275/300"}>300</Link>
                            </nav>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default Country;
