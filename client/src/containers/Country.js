import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {TableComponent, TableHeaderComponent, LoadingComponent,FilterComponent,TableDataComponent, DatePipeComponent,ActiveUsersComponent } from '../components/index'



export default class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modified: null,
            isRender: false
        };

    }


    renderCountryData(param) {
        fetch('/contributions/' + param)
            .then((response) => response.json())
            .then((responseJson) => {

                try {
                    this.setState({ data: responseJson[0].dataset, modified: responseJson[0].modified, isRender: true });
                } catch (e) {
                    throw e;
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        let { name } = this.props.match.params
        this.renderCountryData(name);
    }


    componentDidUpdate(prevProps) {
        let { name } = this.props.match.params
        if (name !== prevProps.match.params.name)
            this.renderCountryData(name);
    }



    render() {
        let { isRender, data,modified } = this.state;
        let { params } = this.props.match

        if (!isRender) {
            return (
                <LoadingComponent />) // note you can also return null here to render nothing
        } else {
            return (
                <div className="App">
                    <div className="bg-white rounded w-100">
                        <h6 className="mb-4"><Link className="font-weight-bold" to="/home">← Choose a country</Link></h6>
                        <ActiveUsersComponent name={params.name} />
                        <TableComponent modified={modified} isRender={isRender} data={data} from={params.from}  />
                        <FilterComponent matchQuery={this.props.match} />
                    </div>
                </div>
            );
        }
    }
}


