import axios from 'axios'; 
import * as types  from './ActionTypes'; 

const api = '//127.0.0.1:5000/api/sample/';  

export function sampleUpdate(data, name, format) {

  const actionName = name.toUpperCase() + '_' + format.toUpperCase() + '_UPDATE',  
  type = types[actionName]; 

  return{ type, data };  

}

export function sample(post){  

  return dispatch=>axios.post(api, 
    JSON.stringify(post),{ headers: {'Content-Type': 'application/json'} })
    .then(res => { dispatch(sampleUpdate(res.data.sample, post.name, post.format)); })
      .catch(err =>{console.log(err)});
}
