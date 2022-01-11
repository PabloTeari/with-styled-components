import * as actWatcher from "../../sagas/actionsWatcher/searchPokemon/actionTypes";

export function searchPokemon(pokemon) {
  return {
    type: actWatcher.W_SEARCHING_POKEMON,
    payload: pokemon,
  };
}
