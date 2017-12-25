import React from 'react'
import { FormGroup, FormControl, FormLabel, FormControlLabel, FormHelperText} from 'material-ui/Form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './Actions';
import Grid from 'material-ui/Grid'; 
import {withStyles} from 'material-ui/styles';

const styles = {
  cdf: {
    fontFamily:'Avenir',
    opacity:0.7
  }
  ,
  zparam: {
    color: 'orangered',
    opacity: 0.7,
    fontSize:'0.7rem'
  }
};

    
class SampleController extends React.Component{

  constructor(props){
    super(props); 
    this.handleChange = this.handleChange.bind(this); 
    this.sample = this.sample.bind(this); 
    this.format = this.props.type ||'single',
    this.state = {z:Array(props.numSliders).fill(0.5)}; 
    this.sample(); 
  }


  sample(){
    this.props.actions.sample({
      z:this.state.z, 
   name:this.props.name, 
  format:this.format,
   grid:[0.05, 0.95, 4]});

  }

  handleChange = d =>(event)=>{

    let z = this.state.z.slice(0);
    z[d]=+event.target.value;
    this.setState({z});
    this.sample();
  }

  render(){

    const {numSliders, classes} = this.props; 


    return(

      <FormControl component="fieldset">
      <FormLabel component="legend">{'play with z'} </FormLabel>
      <FormGroup>
         {
	   Array.from(Array(numSliders).keys()).map( d => (
	     <input type='range'
	        min={0.05}
	        max={0.95}
	        step={this.format==='grid'?0.05:0.01}
                onChange={this.handleChange(d)}
	        key={d}
                value={this.state.z[d]}/>
	   ))
	 }
        </FormGroup>
      <FormHelperText >{this.props.data+', zdim='
	+(this.props.numSliders+(2*(this.format==='grid')))}
      </FormHelperText>
      <FormHelperText className={classes.cdf}>cdf<sup>-1</sup>
      (<span className={classes.zparam}>
	{(this.format === 'grid' ? '*,*,':'')+
	  this.state.z.map(d=>d.toFixed(2)).join(',')}
	</span>)
      </FormHelperText>
      </FormControl>
    );
  } 
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Actions, dispatch) };
}


export default withStyles(styles)(connect(null, mapDispatchToProps)(SampleController));


