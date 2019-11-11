import React, { Component } from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            render: false
        };
    }

    renderUser(param){
        fetch('/user/'+ param)
            .then( res => res.json() )
            .then((response) => {
                this.setState({ data : response, render: true});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount(){
        var param = this.props.match.params.name;
        this.renderUser(param);
    }


    componentDidUpdate(prevProps) {
        var param = this.props.match.params.name;
        if (param !== prevProps.match.params.name)
            this.renderUser(param);
    }

    render() {
        if (!this.state.render) {
            return (
                <div className="App">
                    <div className=" bg-white w-100">
                        <LinearProgress color="secondary" />
                    </div>
                </div>)
        } else {
            return (
                <div className="App">
                    <div className=" bg-white w-100">

                    </div>
                </div>
            );
        }
    }
}

export default User;
