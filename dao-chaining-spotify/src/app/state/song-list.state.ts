// import { Track } from "../models/track";

export interface SongListState {
  addToCart: string;
  id: number;
}

export const initialState: SongListState = {
  addToCart: "false",
  id: 0,
};
