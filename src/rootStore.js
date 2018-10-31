import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { all } from "redux-saga/effects";

import { rootReducer } from './rootReducer.js';
// import { watchers as landing } from 'Landing/sagas.js';

// const transform = watchers => watchers.map(watcher => watcher());

// export function* rootSaga() {
//   yield all([
//     ...transform(landing),
//   ]);
// }

export function initializeStore(initialState) {
  // const sagaMiddleware = createSagaMiddleware()

  // const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, initialState);
  // sagaMiddleware.run(rootSaga);

  // if (module.hot) {
  //   console.log('is module hot');
  //   module.hot.accept("./rootReducer.js", () => {
  //     store.replaceReducer("./rootReducer.js");
  //   });
  // }

  return store;
}

export const store = initializeStore();

export default store;
