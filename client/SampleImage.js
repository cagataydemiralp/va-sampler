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

    for(i = 0; i < m; i++) {
        for(j = 0; j < m; j++) {
            v = +imgArray[i][j];
	     indx = i*m + j;
             this.data[indx] = (255  << 24) |    
                (v << 16) |             
                (v <<  8) |             
                v;                     
       }
     }

   this.image.data.set(this.buf8);
   this.oscCtx.putImageData(this.image, 0, 0);
   this.ctx.drawImage(this.osc,0,0, 168, 168); 
  }

  componentDidMount(){
    this.osc = document.createElement('canvas'); 
    this.osc.width = 28;
    this.osc.height = 28;
    this.oscCtx = this.osc.getContext('2d');  
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.imageSmoothingEnabled = false; 
    this.image = this.oscCtx.getImageData(0,0,28,28);  
    this.buf = new ArrayBuffer(this.image.data.length);
    this.buf8 = new Uint8ClampedArray(this.buf);
    this.data = new Uint32Array(this.buf);

    this.updateImage(); 
  }

  componentDidUpdate(){
   this.updateImage(); 
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


