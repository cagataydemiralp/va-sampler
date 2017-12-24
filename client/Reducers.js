import {combineReducers} from 'redux';
import {MNIST_SAMPLE_Z2_UPDATE, MNIST_SAMPLE_Z4_UPDATE, FASHION_SAMPLE_Z2_UPDATE, FASHION_SAMPLE_Z4_UPDATE} from './ActionTypes'; 

const initialState = {
  mnistZ2:[],
  mnistZ4:[],
  fashionZ2:[],
  fashionZ4:[],
};

function sample( state = initialState, action ){

  switch (action.type) {

    case MNIST_SAMPLE_Z2_UPDATE:{ 

      return Object.assign( {}, state, {mnistZ2:action.data} );
    } 
     case MNIST_SAMPLE_Z4_UPDATE:{ 

      return Object.assign( {}, state, {mnistZ4:action.data} );
    } 
     case FASHION_SAMPLE_Z2_UPDATE:{ 

      return Object.assign( {}, state, {fashionZ2:action.data} );
    } 
     case FASHION_SAMPLE_Z4_UPDATE:{ 

      return Object.assign( {}, state, {fashionZ4:action.data} );
    } 
    default:
      return state;
  }
}

const rootReducer = combineReducers({
 sample 
});


export default rootReducer;

