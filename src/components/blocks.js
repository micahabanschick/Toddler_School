import React, { Component } from 'react'
import Block from './block'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '50vh',
  },
}));

export default class Blocks extends Component {

    state = {"1": 1,"2": 2,"3": 3}

    // classes = useStyles();

    render() {
        // let i = 0
        // while (i < 4) {
        //     i++
        //     return (
        //         <div>
        //             <Block/>
        //         </div>
        //     )
        // }

        return (
            // <div className={classes.root}>
            //     <Grid container spacing={3}>
            //         <Grid item xs={12}>
            //         <Paper className={classes.paper}>xs=12</Paper>
            //         </Grid>
            //         <Grid item xs={6}>
            //         <Paper className={classes.paper}>xs=6</Paper>
            //         </Grid>
            //         <Grid item xs={6}>
            //         <Paper className={classes.paper}>xs=6</Paper>
            //         </Grid>
            //         <Grid item xs={3}>
            //         <Paper className={classes.paper}>xs=3</Paper>
            //         </Grid>
            //         <Grid item xs={3}>
            //         <Paper className={classes.paper}>xs=3</Paper>
            //         </Grid>
            //         <Grid item xs={3}>
            //         <Paper className={classes.paper}>xs=3</Paper>
            //         </Grid>
            //         <Grid item xs={3}>
            //         <Paper className={classes.paper}>xs=3</Paper>
            //         </Grid>
            //     </Grid>
            // </div>
            <div>
                <Grid container spacing={3}>
                {[1,2,3,4,5,6].map((value, index) => (
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3
                            <Block id={index + 1} key={index} />
                        </Paper>
                    </Grid>
                ))}
                </Grid>
            </div>
            // <div>
            //     {[1,2,3,4,5].map((value, index) => (
            //             <Block id={index + 1} key={index} />
            //     ))}
            // </div>
        )
    }
}

