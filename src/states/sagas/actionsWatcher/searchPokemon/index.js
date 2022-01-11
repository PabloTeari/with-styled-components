import * as actWatcher from "./actionTypes";
import { searchPokemon } from "./request.js";
import { takeLeading } from "redux-saga/effects";

export function* actionWatcherSearchPokemon() {
  yield takeLeading(actWatcher.W_SEARCHING_POKEMON, searchPokemon);
}
