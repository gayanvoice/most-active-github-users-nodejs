import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    }

    check_username(value) {
        if(value === null) {
            return 'Null'
        } else {
            return value
        }
    }

    componentWillMount() {
        var param = this.props.match.params.country;
        this.renderMyData(param);
    }

    renderMyData(param){
        fetch('/api/'+ param)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <div className="App">
                <div className="my-3 p-3 bg-white rounded shadow-sm w-100">
                    <h5 className="pb-2 mb-0 font-weight-bold">Active users from {this.props.match.params.country}</h5>
                    {this.state.data.map((item, key) => {
                        return  <div key={key} className={"media text-muted pt-3"}>
                            <h3 className="pr-4 font-weight-bold">{key + 1}</h3>
                            <img className="bd-placeholder-img mr-2 rounded" src={item.avatar_url} alt={item.login} width="64" height="64"/>
                            <div className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer"  className="text-black-50">
                                        <strong className="text-gray-dark">{this.check_username(item.name)}</strong>
                                    </a>
                                    {item.contribution}
                                </div>
                                <span className="d-block"><a href={'https://github.com/' + item.login} target="_blank" rel="noopener noreferrer" className="text-black-50">@{item.login} ({item.followers})</a></span>
                            </div>loca
                        </div>

                    })}
                </div>
            </div>
        );
    }
}

export default Country;
