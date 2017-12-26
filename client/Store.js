import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
//
// Async dispatch enabled Store
//
export default function configureStore() {

    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

