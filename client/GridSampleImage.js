import React from 'react'
import {connect} from 'react-redux';

export const GRID_RES=4;

class GridSampleImage extends React.Component{

  constructor(props){
    super(props); 
    this.sampleImgSize=28;  // square images & canvas 
    this.canvasSize = 168; 
    this.sampleImgDestSize = ~~( this.canvasSize / GRID_RES ) ; 
    this.updateImage = this.updateImage.bind(this); 
  }

  updateImage(){

   const {state, src} = this.props,
      imgArray = state[src],
      gridH = imgArray.length,
      gridW = imgArray[0].length,
      m = imgArray[0][0].length,
      sS = this.sampleImgSize,
      dS = this.sampleImgDestSize; 

   let I, J, img, i, j, v, indx;  

    for (I = 0; I < gridH; I++){
       for (J=0; J < gridW; J++){

	 img = imgArray[I][J]; 

	 for(i = 0; i < m; i++){
	   for(j = 0; j < m; j++) {
            v = +img[i][j];
            indx = i*m + j;
             this.data[indx] = (255  << 24) |    
                (v << 16) |             
                (v <<  8) |             
                v;                     
      }
    }
   this.image.data.set(this.buf8);
   this.oscCtx.putImageData(this.image, 0, 0);
   this.ctx.drawImage(this.osc, 0, 0, sS, sS, I*dS, J*dS, dS, dS); 
   }
  }
  }

  componentDidMount(){
    this.osc = document.createElement('canvas'); 
    this.osc.width = this.sampleImgSize;
    this.osc.height = this.sampleImgSize;
    this.oscCtx = this.osc.getContext('2d');  
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.imageSmoothingEnabled = false; 
    this.image = this.oscCtx.createImageData(this.sampleImgSize,this.sampleImgSize);  
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
      <canvas ref="canvas" width={this.canvasSize} height={this.canvasSize} />
    )
  }
}


function mapStateToProps(state) {
    return { state: state.sample};
}


export default connect(mapStateToProps)(GridSampleImage); 

