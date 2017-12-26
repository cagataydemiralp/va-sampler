import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { withStyles } from 'material-ui/styles';
import HeartIcon from 'material-ui-icons/FavoriteBorder';

const styles = {
    bottomNavigation: {
    bottom:0,
    position:'fixed',
    width:'100%',
    opacity:0.5
  }
};



class Footer extends React.Component{

  

  constructor(props, context){

    super(props, context);
    this.state = {value : 0 };  
    this.handleChange = this.handleChange.bind(this); 
    this.mounted = false; 
  }

  handleChange = (event, value) => { 

    const { history} = this.props; 

  }

  componentWillUnmount(){

    this.mounted = false; 

  }
  componentDidMount(){

    const {value} = this.state; 
    const that = this; 

    this.mounted = true; 

    window.onpopstate = () => {
      if(this.mounted) {
        const {pathname} = this.props.location; 
      }
    }
  }

  
  render(){

    const { classes } = this.props;
    const { value  } = this.state; 

    return(
      <BottomNavigation
      value={value}
      className={classes.bottomNavigation}
      onChange={this.handleChange}
      showLabels>
      <BottomNavigationButton label="love the variational" icon={<HeartIcon />}/>
      </BottomNavigation>
    ); 
  }
}
export default withStyles(styles)(Footer); 


