import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ModelActions from './Actions';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import FloorIcon from 'material-ui-icons/Dashboard';
import KitchenIcon from 'material-ui-icons/Kitchen';
import LivingIcon from 'material-ui-icons/EventSeat';
import Header from './Header'; 
import Main from './Main'; 
import Footer from './Footer'; 


const windowHeight = Math.max(
  document.documentElement.clientHeight, 
  window.innerHeight || 0); 


const styles = {
  root: {
    width:'100%',
    height: windowHeight,
    overflow: 'hidden'
  }
};

class ButtonAppBar extends React.Component {
  
  constructor(props, context){
    super(props, context); 
  }


componentDidMount(){

}

render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
    <Header/> 
     <Main/>
    <Footer/>
    </div>
  );
}

}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { state: state.model};
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(ModelActions, dispatch) };
}

export default withStyles(styles)(ButtonAppBar);



