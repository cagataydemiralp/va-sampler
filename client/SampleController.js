import React from 'react'
import { FormGroup, FormControl, FormLabel, FormControlLabel, FormHelperText} from 'material-ui/Form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './Actions';


class SampleController extends React.Component{


  constructor(props){
    super(props); 
    this.handleChange = this.handleChange.bind(this); 
    this.state = {z:Array(props.numSliders).fill(0.5)}; 
    this.name = this.props.data + '_z' + this.props.numSliders; 
    this.props.actions.sample( {z:[this.state.z], name:this.name});
  }

  handleChange = d =>(event)=>{

    let z = this.state.z.slice(0);
    z[d]=+event.target.value;
    this.setState({z});
    //console.log('handling change'); 
    this.props.actions.sample( {z:[this.state.z], name:this.name});
  }

  componentDidMount = () => {
   //this.props.actions.sample( {z:[this.state.z], name:this.name});
  }

  render(){

    const {numSliders} = this.props; 


    return(

      <FormControl component="fieldset">
      <FormLabel component="legend">{'play with z'} </FormLabel>
      <FormGroup>
         {
	   Array.from(Array(numSliders).keys()).map( d => (
	     <input type='range'
	        min={0.05}
	        max={0.95}
	        step={0.01}
                onChange={this.handleChange(d)}
	        key={d}
                value={this.state.z[d]}/>
	   ))
	 }
        </FormGroup>
      <FormHelperText>{this.props.data+', zdim='+this.props.numSliders}</FormHelperText>
      </FormControl>
    );
  } 

}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Actions, dispatch) };
}


export default connect(null, mapDispatchToProps)(SampleController);


