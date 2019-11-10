import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LinearProgress  from '@material-ui/core/LinearProgress';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            modified : null,
            render: false,
            from: props.match.params.from,
            to: props.match.params.to
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
        if(this.from === null || this.to === null){
            return  value.slice(0, 50)
        }
        else {return  value.slice((this.from), (this.to))}
    }

    mDate(date){
        if(date===null){return "Loading"}
       return new Date(date).toUTCString();
    }

    renderMyData(param){

        fetch('/get/'+ param)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson[0].dataset, modified: responseJson[0].modified, render: true});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount(){
        var param = this.props.match.params.country;
        this.renderMyData(param);
    }


    componentDidUpdate(prevProps) {
        var param = this.props.match.params.country;
        if (param !== prevProps.match.params.country)
            this.renderMyData(param);
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
        var isRender = this.state.render === false;
        if (isRender) {
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
                        <h2>Active users from {this.titleCase(this.props.match.params.country)}</h2>

                        <div className="table-responsive">

                            <table className="table table-borderless">
                                <caption>Last modifed {this.mDate(this.state.modified)}</caption>
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
                                        <td className="align-middle">{parseInt(this.from) + key + 1}</td>
                                        <td className={"align-middle"}><img className="rounded" src={item.avatar_url}
                                                                            alt={item.login} width="48" height="48"/>
                                        </td>
                                        <td className="align-middle"><a href={'https://github.com/' + item.login}
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        className="text-black-50">
                                            <strong className="text-gray-dark">{this.check_username(item.name)}</strong>
                                        </a>
                                            <span className="d-block"><a href={'https://github.com/' + item.login}
                                                                         target="_blank" rel="noopener noreferrer"
                                                                         className="text-black-50">@{item.login} ({item.followers})</a></span>
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
                                      to={"/country/" + this.props.match.params.country + "/0/300"}>All
                                    (300)</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/0/50"}>0-50</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/50/100"}>50-100</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/100/150"}>100-150</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/150/200"}>150-200</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/200/250"}>200-250</Link>
                                <Link className="m-2"
                                      to={"/country/" + this.props.match.params.country + "/250/300"}>250-300</Link>
                            </nav>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default Country;
