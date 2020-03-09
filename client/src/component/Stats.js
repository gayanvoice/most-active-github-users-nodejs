import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default  class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            repository: '',
            submit: false,
            created: false,
            copyText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.submitRepository(this.state.username, this.state.repository);
        this.setState({copyText: "http://localhost:3000/get/" + this.state.username + "/" + this.state.repository });
        event.preventDefault();
    }

    submitRepository(username, repository){
        console.log(username, repository);
        this.setState( {
            submit: true
        })
        fetch('/set/'+ username + '/' + repository)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson === true){
                    this.setState({ created:true });
                }
                this.setState( {
                    submit: false
                })

            }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const submit = this.state.submit;
        const created = this.state.created;
        if (submit){
            return (
                <>
                    <AppBar position="static">
                        <LinearProgress/>
                        <Toolbar>
                            <IconButton
                                component={Link}
                                to="/home"
                                style={{backgroundColor: 'transparent'}}
                                color="inherit">
                                <ArrowBackIosIcon/>
                            </IconButton>
                            <Typography variant="h6">
                                GitHub Stats
                            </Typography>

                        </Toolbar>
                    </AppBar>
                </>
            );
        } else {
            return (
                <>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                component={Link}
                                to="/home"
                                style={{backgroundColor: 'transparent'}}
                                color="inherit">
                                <ArrowBackIosIcon/>
                            </IconButton>
                            <Typography variant="h6">
                                GitHub Stats
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <Box my={2} mx={2}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper className={["p-3"]}>
                                    <Typography variant="h6" gutterBottom>Stats?</Typography>
                                    <form onSubmit={this.handleSubmit}>
                                        <TextField name="username" label="User" variant="outlined" value={this.state.username} onChange={this.handleChange} />
                                        <TextField name="repository" label="Repository" variant="outlined" value={this.state.repository} onChange={this.handleChange} />
                                        <Button variant="contained" type={"submit"} color="primary">
                                            Set
                                        </Button>
                                    </form>
                                </Paper>
                                <Paper className={["p-3"]}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Copy Text"
                                        value={this.state.copyText}
                                        multiline
                                        rows="4"
                                        variant="outlined"
                                    />
                                    <img src={this.state.copyText} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>

                </>

            );
        }
    }
}
