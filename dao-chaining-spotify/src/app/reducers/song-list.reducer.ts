import { createReducer, on } from "@ngrx/store";
import {
  addToCartStatus,
  updateaddToCartStatus,
} from "../actions/song-list.actions";
import { initialState, SongListState } from "../state/song-list.state";

export const songListFeatureKey = "song-list";

export const reducer = createReducer(
  initialState,
  on(addToCartStatus, (state) => ({
    ...state,
    addToCart: "false",
  })),
  on(updateaddToCartStatus, (state, { id }) => ({
    ...state,
    addToCart: "true",
    id: id,
  }))
);

export function SongListReducer(state, action) {
  return reducer(state, action);
}

export const updateStatus = (state: SongListState) => state.addToCart;
