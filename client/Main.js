import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import VASampler from './VASampler'; 

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:'1%'
  },

  control: {
    padding: theme.spacing.unit * 2,
  },
});

const Main = ({classes}) => (
      <Grid container className={classes.root} justify="center" alignItems="center" spacing={24}>
         <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
           <Grid item> <VASampler zdim={2} data={'mnist'}/> </Grid>
           <Grid item> <VASampler zdim={4} data={'mnist'}/> </Grid>
           <Grid item> <VASampler zdim={4} data={'mnist'} type={'grid'}/> </Grid>
          </Grid>
  </Grid>
         <Grid item xs={12}>
         <Grid container justify="center" alignItems="center">
          <Grid item> <VASampler zdim={2} data={'fashion'}/></Grid>
          <Grid item> <VASampler zdim={4} data={'fashion'}/></Grid>
          <Grid item> <VASampler zdim={4} data={'fashion'} type={'grid'}/></Grid>
         </Grid>
  </Grid>
  </Grid>
); 

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main)

