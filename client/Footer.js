import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { withStyles } from 'material-ui/styles';
import HomeIcon from 'material-ui-icons/FavoriteBorder';

//import { withRouter } from 'react-router'; 
/*import HomeIcon from 'material-ui-icons/Home';*/
//import FloorIcon from 'material-ui-icons/Dashboard';
//import KitchenIcon from 'material-ui-icons/Kitchen';
//import LivingRoomIcon from 'material-ui-icons/EventSeat'; 
//import BedroomIcon from 'material-ui-icons/Snooze';
//import LobbyIcon from 'material-ui-icons/ExitToApp';
//import BathroomIcon from 'material-ui-icons/Wc';



const styles = {
    bottomNavigation: {
    bottom:0,
    position:'fixed',
    width:'100%',
    opacity:0.5
  }
};



class Footer extends React.Component{

  /*static propTypes = {*/
    //match: PropTypes.object.isRequired,
    //location: PropTypes.object.isRequired,
    //history: PropTypes.object.isRequired
  //}


  constructor(props, context){

    super(props, context);
    this.state = {value : 0 };  
    this.handleChange = this.handleChange.bind(this); 
    this.mounted = false; 
  }

  handleChange = (event, value) => { 

    const { history} = this.props; 

    /*this.setState ({ value }); */
    //if (value === 0) 
      //history.push('/'); 
    //else if(value === 1) 
      //history.push('/floor'); 
    //else if (value === 2) 
      //history.push('/living'); 
    //else if (value === 3)
      //history.push('/kitchen');
    //else if (value === 4)
      //history.push('/bedroom');
    //else if (value === 5)
      //history.push('/bathroom');
    //else if (value === 6)
      /*history.push('/lobby');*/

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

	console.log(pathname); 
	console.log(this.state.value); 

        //if(pathname==='/' && this.state.value !==0){
	  //console.log('setting to HOME'); 
	  //that.setState({value: 0})
      //}else if(pathname=='/floor' && this.state.value !==1)
          //this.setState({value: 1})
	//else if(pathname==='/living' && this.state.value!==2)
          //this.setState({value: 2}) 
	//else if(pathname==='/kitchen' && this.state.value!==3)
	  //this.setState({value: 3}) 
	//else if(pathname==='/bedroom' && this.state.value!==4)
          //this.setState({value: 4})
        //else if(pathname==='/bathroom' && this.state.value!==5)
          //this.setState({value: 5})
        //else if(pathname==='/lobby' && this.state.value!==6)
          /*this.setState({value: 6})*/
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
      <BottomNavigationButton label="love the variational" icon={<HomeIcon />}/>
      </BottomNavigation>
    ); 
  }
}
export default withStyles(styles)(Footer); 


