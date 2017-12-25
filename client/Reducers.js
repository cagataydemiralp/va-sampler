import {combineReducers} from 'redux';
import { MNIST_Z2_SINGLE_UPDATE, 
  MNIST_Z4_SINGLE_UPDATE, 
  MNIST_Z4_GRID_UPDATE, 
  FASHION_Z2_SINGLE_UPDATE, 
  FASHION_Z4_SINGLE_UPDATE,
  FASHION_Z4_GRID_UPDATE} from './ActionTypes'; 

const initialState = {
  mnistZ2:[],
  mnistZ4:[],
  mnistGridZ4:[[[]]],
  fashionZ2:[],
  fashionZ4:[],
  fashionGridZ4:[[[]]]
};

function sample( state = initialState, action ){

  switch (action.type) {

    case MNIST_Z2_SINGLE_UPDATE:{ 

      return Object.assign( {}, state, {mnistZ2:action.data} );
    } 
     case MNIST_Z4_SINGLE_UPDATE:{ 

      return Object.assign( {}, state, {mnistZ4:action.data} );
    } 
    case MNIST_Z4_GRID_UPDATE:{ 
      return Object.assign( {}, state, {mnistGridZ4:action.data} );
    } 
     case FASHION_Z2_SINGLE_UPDATE:{ 
      return Object.assign( {}, state, {fashionZ2:action.data} );
    } 
     case FASHION_Z4_SINGLE_UPDATE:{ 
      return Object.assign( {}, state, {fashionZ4:action.data} );
    } 
    case FASHION_Z4_GRID_UPDATE:{ 
      return Object.assign( {}, state, {fashionGridZ4:action.data} );
    } 
    default:
      return state;
  }
}

const rootReducer = combineReducers({
 sample 
});


export default rootReducer;

