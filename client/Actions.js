import axios from 'axios'; 
import * as types  from './ActionTypes'; 

const api = '//35.196.240.209/api/sample/';
// 
// use
// const api = '//35.196.240.209/api/sample/';  
// when you run the server locally  
// 
export function sampleUpdate(data,name) {

  // console.log('updating ...'); 
  // console.log(data); 

  const type = name === 'mnist_z2' ?  types.MNIST_SAMPLE_Z2_UPDATE : 
    name === 'mnist_z4' ? types.MNIST_SAMPLE_Z4_UPDATE : 
    name === 'fashion_z2' ? types.FASHION_SAMPLE_Z2_UPDATE:
    name === 'fashion_z4' ? types.FASHION_SAMPLE_Z4_UPDATE:
    types.NO_ACTION;

  return{ type, data };  

}

export function sample(post){  
  return dispatch=>axios.post(api, 
    JSON.stringify(post),{ headers: {'Content-Type': 'application/json'} })
    .then(res => { dispatch(sampleUpdate(res.data.sample, post.name)); })
      .catch(err =>{console.log(err)});
}
