import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './saga';

function configureStore(preloadedState, { isServer, req = null }) {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = applyMiddleware(sagaMiddleware);


  const store = createStore(
    rootReducer(),
    preloadedState,
    composeWithDevTools(middleWares)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(store.injectedReducers));
    });
  }

  return store;
}

export default configureStore
