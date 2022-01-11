import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import pokemons from "../reducers/pokemons";
import rootSaga from "../sagas/root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(pokemons, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export function ReduxProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
