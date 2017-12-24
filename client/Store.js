import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

export default function configureStore() {

    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    // return createStore(rootReducer);
    // const store = createStore( rootReducer, compose(applyMiddleware(thunk),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f));

  //const store = createStore( rootReducer, compose(applyMiddleware(thunk),
	  //window.devToolsExtension ? window.devToolsExtension() : f => f));

  // if (module.hot) {
  //   module.hot.accept('./Reducers', () => {
  //     const nextReducer = rootReducer;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  //   return store;

}





