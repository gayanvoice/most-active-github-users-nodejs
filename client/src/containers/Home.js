import React from 'react';
import { LoadingComponent, ListComponent } from '../components'


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            isRender: false
        };

    }



    renderListData() {
        fetch('/contributions/all')
            .then((response) => response.json())
            .then((responseJson) => {
                try {
                    this.setState({ countries: responseJson, isRender: true });
                } catch (e) {
                    console.log(e);
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.renderListData();
    }


    render() {
        let { isRender, countries } = this.state;

        if (!isRender) {
            return (
                <LoadingComponent />
            )
        } else {
            return (

                <ListComponent countries={countries} />

            )

        }




    }


}


