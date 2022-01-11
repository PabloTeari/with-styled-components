import { all } from "redux-saga/effects";

import * as searchPokemon from "../actionsWatcher/searchPokemon";

export default function* rootSaga() {
  yield all([searchPokemon.actionWatcherSearchPokemon()]);
}
