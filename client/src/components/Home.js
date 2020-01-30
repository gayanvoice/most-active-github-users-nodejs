import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from "@material-ui/core/LinearProgress";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            render: false
        };

    }

    titleCase(str) {
        str = str.replace(/_/g,' ');
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    renderListData(){
        fetch('/contributions/all')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                try {
                    this.setState({data: responseJson, render: true});
                } catch (e) {
                    console.log(e);
                }
            }).catch((error) => {
            console.error(error);
        });
    }

    componentDidMount(){
        this.renderListData();
    }

    render() {
        let isRender = this.state.render;
        if (!isRender) {
            return (
                <div className="App">
                    <div className=" bg-white w-100">
                        <LinearProgress color="secondary" />
                    </div>
                </div>)
        } else {
            return (
                <div className="App">
                    <h2 className="mb-3">Choose a country</h2>
                    <div className="list-group">
                        {this.state.data.map((item, key) => {
                            return  <Link key={key} className="list-group-item list-group-item-action" to={`/country/${item.city[0].toLowerCase()}/0/25`}>{this.titleCase(item.city[0])}</Link>
                            })}
                    </div>
                </div>
            );
        }
    }
}


function Home() {
  return (
      <div className="App">
        <div className="bg-white rounded shadow-lg m-2 p-4">
            <List />
        </div>
      </div>
  );
}


export default Home;