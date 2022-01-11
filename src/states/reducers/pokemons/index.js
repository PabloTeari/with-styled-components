import { createReducer } from "@reduxjs/toolkit";

export default createReducer(
  {
    pokemons: [],
    pokemonFound: {},
    searching: false,
    tooltip_type: "search",
    showModal: false,
  },
  {
    ADD_POKEMON: (state, action) => {
      const { pokemon } = action.payload;
      state.pokemons.push(pokemon);
    },
    SEARCHING: (state, action) => {
      const searching = action.payload;
      state.searching = searching;
    },
    SET_TOOLTIP_TYPE: (state, action) => {
      const tooltip_type = action.payload;
      state.tooltip_type = tooltip_type;
    },
    SET_POKEMON_FOUND: (state, action) => {
      const { pokemon } = action.payload;
      state.pokemonFound = pokemon;
    },
    TOGGLE_MODAL: (state, action) => {
      state.showModal = !state.showModal;
    },
  },
);
