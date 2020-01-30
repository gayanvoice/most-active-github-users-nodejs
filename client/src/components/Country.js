import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        if ( a.public_contributions < b.public_contributions ){
            return 1;
        }
        if ( a.public_contributions > b.public_contributions ){
            return -1;
        }
        return 0;
    }


    check_username(value) {
        if(value === null) {
            return 'Null';
        } else {
            return value;
        }
    }

    limit(value) {
        return value.slice((this.props.match.params.from), (this.props.match.params.to));
    }

    mDate(date){
        return !this.state.render ? <CircularProgress color="secondary" /> : new Date(date).toUTCString();
    }

    renderCountryData(param){
        console.log(param);
        fetch(`/contributions/${param}`)
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

    componentDidMount(){
        let param = this.props.match.params.name;
        this.renderCountryData(param);
    }


    componentDidUpdate(prevProps) {
        let param = this.props.match.params.name;
        if (param !== prevProps.match.params.name)
            this.renderCountryData(param);
      }

    titleCase(str) {
        str = str.replace(/_/g,' ');
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    render() {
        let isRender = this.state.render;
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
                        <h6 className="mb-4"><Link className="font-weight-bold" to="/home">← Choose a country</Link></h6>
                        <h2 className="mb-2">Active users from {this.titleCase(this.props.match.params.name)}</h2>
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
                                        <td className="align-middle">{+this.props.match.params.from + key + 1}</td>
                                        <td className={"align-middle"}>
                                            <img className="rounded shadow" src={item.avatar_url} alt={item.login} width="48" height="48"/>
                                        </td>
                                        <td className="align-middle">
                                            <a className="text-gray-dark text-black-50" target={'_blank'} rel="noopener" href={`https://github.com/${item.login}`}>
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
                                    <li className={`page-item ${this.props.match.params.to === '300' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/300`}>All</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '25' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/25`}>25</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '50' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/50`}>50</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '75' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/75`}>75</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '100' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/100`}>100</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '125' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/125`}>125</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '150' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/150`}>150</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '175' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/175`}>175</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '200' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/200`}>200</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '225' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/225`}>225</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '250' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/250`}>250</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '275' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/275`}>275</Link>
                                    </li>
                                    <li className={`page-item ${this.props.match.params.to === '300' ? 'active' : null}`}>
                                        <Link className="page-link" to={`/country/${this.props.match.params.name}/0/300`}>300</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            );
        }
    }
}


export default Country;