import React from 'react'
import {connect} from 'react-redux';

class GridSampleImage extends React.Component{

  constructor(props){
    super(props); 
    this.updateImage = this.updateImage.bind(this); 
  }

  updateImage(){

   const {state, src} = this.props,
      imgArray = state[src],
      gridH = imgArray.length,
      gridW = imgArray[0].length,
      m = imgArray[0][0].length; 
    



   let I, J, img, i, j, v, indx;  

    for (I = 0; I < gridH; I++){
       for (J=0; J < gridW; J++){

	 img = imgArray[I][J]; 

	 for(i = 0; i < m; i++){
	   for(j = 0; j < m; j++) {
            v = +img[i][j];
            //indx =  i*m*4 + 4*j;
	    //this.image.data[indx]= v;*/
	    //this.image.data[indx+1]= v;
	    //this.image.data[indx+2]= v;
	    //this.image.data[indx+3]= 255;
	     //
            indx = i*m + j;

	    //this is a bit faster 
             this.data[indx] = (255  << 24) |    // alpha*/
                (v << 16) |             // blue
                (v <<  8) |             // green
                v;                     // red */
      }
    }
   this.image.data.set(this.buf8);
   this.oscCtx.putImageData(this.image, 0, 0);
   this.ctx.drawImage(this.osc,0, 0, 28, 28, I*42, J*42, 42, 42); 
   }
  }
  }

  componentDidMount(){
    this.osc = document.createElement('canvas'); 
    this.osc.width = 28;
    this.osc.height = 28;
    this.oscCtx = this.osc.getContext('2d');  
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.imageSmoothingEnabled = false; 
    this.image = this.oscCtx.createImageData(28,28);  
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

export default connect(mapStateToProps)(GridSampleImage); 

