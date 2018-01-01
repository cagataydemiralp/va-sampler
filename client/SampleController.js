import React from 'react'
import { FormGroup, FormControl, FormLabel, FormControlLabel, FormHelperText} from 'material-ui/Form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './Actions';
import Grid from 'material-ui/Grid'; 
import {withStyles} from 'material-ui/styles';
import {GRID_RES} from './GridSampleImage'; 

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
    this.format = this.props.type ||'single';
    this.slider = {
      min:0.05, 
      step:this.format==='grid'?0.075:0.05, 
      max:0.95, 
      val:0.5}; 
    this.state = {z:Array(props.numSliders).fill(this.slider.val)}; 
    this.sample(); 
  }


  sample(){
    this.props.actions.sample({
      z:this.state.z, 
   name:this.props.name, 
  format:this.format,
   grid:[this.slider.min, this.slider.max, GRID_RES]});

  }

  handleChange = d =>(event)=>{

    let z = this.state.z.slice(0);
    z[d]=+event.target.value;
    this.setState({z});
    this.sample();
  }

  render(){

    const {numSliders, classes} = this.props,
      sliderValsString = this.state.z.map(d=>d.toFixed(2)).join(','),
      zparamLabel = (this.format === 'grid' ? 
      <span className={classes.zparam}>[<span>g<sub>x</sub>,g<sub>y</sub>,</span>{sliderValsString}]</span>:
      <span className={classes.zparam}>[{sliderValsString}]</span>); 


    return(

      <FormControl component="fieldset">
      <FormLabel component="legend">{'play with z'} </FormLabel>
      <FormGroup>
         {
	   Array.from(Array(numSliders).keys()).map( d => (
	     <input type='range'
	        min={this.slider.min}
	        max={this.slider.max}
	        step={this.slider.step}
                onChange={this.handleChange(d)}
	        key={d}
                value={this.state.z[d]}/>
	   ))
	 }
        </FormGroup>
      <FormHelperText >{this.props.data+', zdim='
	+(this.props.numSliders+(2*(this.format==='grid')))}
      </FormHelperText>
      <FormHelperText className={classes.cdf}>z=cdf<sup>-1</sup>
      {zparamLabel}
      </FormHelperText>
      </FormControl>
    );
  } 
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Actions, dispatch) };
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(SampleController));


