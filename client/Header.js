import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  appBar:{
    opacity:0.7,
    background:'black',
  },
menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }, 
  flex: {
    flex: 1,
    fontWeight:100,
    textAlign:'center'
  }
}

const  Header = ({classes}) => (

  <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
           Vary The Variational!   
          </Typography>
        </Toolbar>
      </AppBar>)

export default withStyles(styles)(Header); 


