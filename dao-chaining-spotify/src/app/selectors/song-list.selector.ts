import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SongListState } from "../state/song-list.state";
import * as fromSongList from "../reducers/song-list.reducer";

export const songListState = createFeatureSelector<SongListState>("song-list");

export const selectSongListAddToCartStatus = createSelector(
  songListState,
  fromSongList.updateStatus
);
