import { Action, createAction, props } from "@ngrx/store";

export const enum SongListActionTypes {
  addToCartStatus = "[Song list] Get add to cart action status",
  updateaddToCartStatus = "[Song list] Update add to cart action status",
}

export const addToCartStatus = createAction(
  SongListActionTypes.addToCartStatus,
  props<{
    addToCart: string;
  }>()
);

export const updateaddToCartStatus = createAction(
  SongListActionTypes.updateaddToCartStatus,
  props<{
    addToCart: string;
  }>()
);
