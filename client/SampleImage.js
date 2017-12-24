import React from 'react'
import {connect} from 'react-redux';

class SampleImage extends React.Component{

  constructor(props){
    super(props); 
    this.updateImage = this.updateImage.bind(this); 
  }
 
  updateImage(){

   const {state, src} = this.props,
      imgArray = state[src],
      m = imgArray.length;

   let i,j,v,indx;  
    for(i = 0; i < m; i++){
        for(j = 0; j < m; j++) {
            indx =  i*m*4 + 4*j;
            v = +imgArray[i][j];
	    this.image.data[indx]= v;
	    this.image.data[indx+1]= v;
	    this.image.data[indx+2]= v;
	    this.image.data[indx+3]= 255;
	  
            /* this.mask[indx] = (255  << 24) |    // alpha*/
                //(v << 16) |             // blue
                //(v <<  8) |             // green
                 /*v;                     // red */
      }
    }

   //this.image.data.set(this.mask);
   //this.oscCtx.clearRect(0, 0, 28, 28);
   this.oscCtx.putImageData(this.image, 0, 0);
   //this.ctx.clearRect(0, 0, 168,168); 
   this.ctx.drawImage(this.osc,0,0, 168, 168); 
  }

  componentDidMount(){
    this.osc = document.createElement('canvas'); 
    this.osc.width = 28;
    this.osc.height = 28;
    this.oscCtx = this.osc.getContext('2d');  
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.imageSmoothingEnabled = false
    this.image = this.oscCtx.createImageData(28,28);  
    //console.log(this.image); 
    this.mask = new Uint32Array(this.image.data); 
    this.updateImage(); 
  }

  componentDidUpdate(){
   this.updateImage(); 
   //return false; 
  }
   
  render(){
    return(
      <canvas ref="canvas" width={168} height={168} />
    )
  }
}


function mapStateToProps(state) {
    return { state: state.sample};
}

export default connect(mapStateToProps)(SampleImage); 


