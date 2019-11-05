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

    componentDidUpdate(prevProps) {
        var param = this.props.match.params.country;
        if (param !== prevProps.match.params.country)
            this.renderMyData(param);
      }

    render() {
        return (
            <div className="App">
                <div className="my-3 p-3 bg-white rounded shadow-sm w-100">
                    <h5 className="pb-2 mb-0 font-weight-bold">Active users from {this.props.match.params.country}</h5>

                    <div className="nav-scroller bg-white rounded shadow-sm m-2 p-2">
                        <nav className="nav">
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/0/300"}>All (300)</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/0/25"}>0-25</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/25/50"}>25-50</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/50/75"}>50-75</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/75/100"}>75-100</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/100/125"}>100-125</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/125/150"}>125-150</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/150/175"}>150-175</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/175/200"}>175-200</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/200/225"}>200-250</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/225/250"}>225-250</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/250/275"}>250-275</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/275/300"}>275-300</Link>
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

                    <div className="nav-scroller bg-white rounded shadow-sm m-2 mt-4 p-2">
                        <nav className="nav">
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/0/300"}>All (300)</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/0/25"}>0-25</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/25/50"}>25-50</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/50/75"}>50-75</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/75/100"}>75-100</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/100/125"}>100-125</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/125/150"}>125-150</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/150/175"}>150-175</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/175/200"}>175-200</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/200/225"}>200-250</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/225/250"}>225-250</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/250/275"}>250-275</Link>
                            <Link className="m-2" to={"/country/" + this.props.match.params.country + "/275/300"}>275-300</Link>
                        </nav>
                    </div>

                    <div className="nav-scroller bg-white rounded shadow-sm m-2 mt-4 p-3">
                        <strong className='mt-2'>Click the country from the list. Select the range (0-25) It takes few seconds to fetch the list.</strong>
                        <h6>If nothing works refresh the page again.</h6>
                    </div>
                    <div className="nav-scroller bg-white rounded shadow-sm m-2 mt-4 p-3">
                        <h6><span>Contributors</span> <span className="small">How to contribute? <a href={"https://github.com/gayanvoice/githubstats/blob/master/CONTRIBUTING.md"}> Add missing countries</a></span></h6>
                        <nav className="nav">
                            <a className="m-1" href={"https://github.com/gayanvoice"}><img alt={"gayanvoice"} src={"https://avatars1.githubusercontent.com/u/30500175?s=48&v=4"} className={"rounded"}/></a>
                            <a className="m-1" href={"https://github.com/srdjanRakic"}><img alt={"srdjanRakic"} src={"https://avatars1.githubusercontent.com/u/16154503?s=48&v=4"} className={"rounded"} /></a>
                            <a className="m-1" href={"https://github.com/nikolalukovic"}><img alt={"nikolalukovic"} src={"https://avatars0.githubusercontent.com/u/6897673?s=48&v=4"} className={"rounded"} /></a>
                            <a className="m-1" href={"https://github.com/Donghoon759"}><img alt={"Donghoon759"} src={"https://avatars0.githubusercontent.com/u/32301380?s=48&v=4"} className={"rounded"} /></a>

                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Country;
