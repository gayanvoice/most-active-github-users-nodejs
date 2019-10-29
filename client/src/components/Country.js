import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
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
        return  value.slice((this.props.match.params.from), (this.props.match.params.to))
    }



    renderMyData(param){

        fetch('/api/'+ param)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount(){
        var param = this.props.match.params.country;
        this.renderMyData(param);
    }


    render() {
        return (
            <div className="App">
                <div className="my-3 p-3 bg-white rounded shadow-sm w-100">
                    <h5 className="pb-2 mb-0 font-weight-bold">Active users from {this.props.match.params.country}</h5>

                    <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
                        <nav className="nav">
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/0/256"}>All (300)</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/0/25"}>0-25</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/25/50"}>25-50</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/50/75"}>50-75</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/75/100"}>75-100</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/100/125"}>100-125</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/125/150"}>125-150</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/150/175"}>150-175</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/175/200"}>175-200</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/200/225"}>200-250</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/225/250"}>225-250</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/250/275"}>250-275</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/275/300"}>275-300</Link></a>
                        </nav>
                    </div>
                    {this.limit(this.state.data.sort(this.compare)).map((item, key) => {
                        return  <div key={key} className={"media text-muted pt-3"}>
                            <h3 className="pr-4 font-weight-bold">{parseInt(this.props.match.params.from) + key + 1}</h3>
                            <img className="bd-placeholder-img mr-2 rounded" src={item.avatar_url} alt={item.login} width="64" height="64"/>
                            <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer"  className="text-black-50">
                                        <strong className="text-gray-dark">{this.check_username(item.name)}</strong>
                                    </a>
                                    {item.contribution}
                                </div>
                                <span className="d-block"><a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer" className="text-black-50">@{item.login} ({item.followers})</a></span>
                            </div>
                        </div>
                    })}
                    <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
                        <nav className="nav">
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/0/256"}>All (300)</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/0/25"}>0-25</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/25/50"}>25-50</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/50/75"}>50-75</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/75/100"}>75-100</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/100/125"}>100-125</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/125/150"}>125-150</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/150/175"}>150-175</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/175/200"}>175-200</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/200/225"}>200-250</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/225/250"}>225-250</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/250/275"}>250-275</Link></a>
                            <a className="m-2"><Link to={"/country/" + this.props.match.params.country + "/275/300"}>275-300</Link></a>
                        </nav>
                    </div>

                    <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
                        <strong className='mt-2'>Click the country from the list. Select the range (0-20) It takes few seconds to fetch the list</strong>
                        <h6>If nothing works refresh the page again.</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Country;
