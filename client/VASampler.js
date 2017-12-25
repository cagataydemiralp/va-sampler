import React from 'react'; 
import SampleController from './SampleController';
import SampleImage  from './SampleImage';
import GridSampleImage from './GridSampleImage';

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid'; 
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height:250,
    width: 350
  }
});

const VASampler = ({data, zdim, type, classes}) =>  ( 
  <Paper className={classes.paper}>
     <Grid container className={classes.root} justify="center" spacing={24}>
       <Grid item>
       <SampleController numSliders={type!=='grid'?zdim:zdim-2} 
  data={data} name={data + '_z' + zdim} type={type}/>
      </Grid>
      <Grid item>{type !== 'grid'? 
	<SampleImage src={data+'Z'+zdim}/> :
	<GridSampleImage src={data+'GridZ'+zdim}/>}
       </Grid>
    </Grid>
    </Paper>
  ); 

export default withStyles(styles)(VASampler); 
