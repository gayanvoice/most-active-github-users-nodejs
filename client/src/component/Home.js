import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import LinearProgress from "@material-ui/core/LinearProgress";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from '@material-ui/icons/Image';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

import {getCountry} from "../util/HomeUtils";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppBar from "@material-ui/core/AppBar";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));


function ScrollTop(props) {
    const {children, window} = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const HideOnScroll = (props) => {
    const {children, window} = props;
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};


HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


export default function Home(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        fetch('/contributions/all')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                try {
                    setData(responseJson);
                    setRender(true);
                } catch (e) {
                    console.log(e);
                }
            }).catch((error) => {
            console.error(error);
        });
    }, [false]);

    if (!render) {
        return (
            <>
                <LinearProgress color="primary"/>
            </>
        );
    } else {
        return (
            <>
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar>
                            <IconButton color={"inherit"} component={Link} to={'/'}>
                                <HomeIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                GitHub Stats
                            </Typography>
                            <IconButton color={"inherit"} component={Link} to={'/stats'}>
                                <EqualizerIcon />
                            </IconButton>
                            <IconButton color={"inherit"} href={'https://github.com/gayanvoice/most-active-github-users-nodejs'}>
                                <GitHubIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar id="back-to-top-anchor"/>
                <Box my={2} mx={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <List>
                                    {data.map((item, key) => {
                                        return (
                                            <ListItem button component={Link}
                                                      to={"/country/" + item.city[0].toLowerCase() + "/0/25"} key={key}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                {/*<Paper className={["p-3", classes.paper]} to={"/country/" + item.city[0].toLowerCase() + "/0/25"} >{getCountry(item.city[0])}</Paper >*/}
                                                <ListItemText
                                                    primary={getCountry(item.city[0])}/>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ChevronRightIcon/>
                                                    </Avatar>
                                                </ListItemAvatar>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>

            </>
        );
    }
}
