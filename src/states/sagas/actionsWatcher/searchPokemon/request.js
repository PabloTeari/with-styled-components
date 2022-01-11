import { put, call, select, delay } from "redux-saga/effects";

import api from "api";

export function* searchPokemon() {
  const pokemons = yield select((state) => state.pokemons);
  const canCapture = pokemons.length < 6;
  const id = getRandomPokemonIds(1, 807);

  if (!canCapture) {
    yield put({ type: "SET_TOOLTIP_TYPE", payload: "error" });
    yield put({ type: "SEARCHING", payload: false });
    return;
  }

  yield put({ type: "SET_TOOLTIP_TYPE", payload: "searching" });

  yield put({ type: "SEARCHING", payload: true });

  // To give Ash time to walk
  yield delay(2000);

  const pokerFound = yield call(() =>
    api
      .get(`/pokemon/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      }),
  );

  const pokemon = {
    name: pokerFound.name,
    hp: pokerFound.base_experience,
    sprite: pokerFound.sprites.front_default,
    height: pokerFound.height,
    weight: pokerFound.weight,
    abilities: pokerFound.abilities,
  };

  yield put({ type: "ADD_POKEMON", payload: { pokemon } });
  yield put({ type: "SET_TOOLTIP_TYPE", payload: "search" });
  yield put({ type: "SEARCHING", payload: false });
}

function getRandomPokemonIds(minId, maxId) {
  minId = Math.ceil(minId);
  maxId = Math.floor(maxId);
  return Math.floor(Math.random() * (maxId - minId)) + minId;
}
