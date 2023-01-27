import { Component, OnInit } from "@angular/core";
import { track } from "../../models/track";
import { TRACKS } from "./tracks";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute } from "@angular/router";
import { SongListActionTypes } from "src/app/actions/song-list.actions";

@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  styleUrls: ["./song-list.component.scss"],
})
export class SongListComponent implements OnInit {
  constructor(
    private store: Store<{ fromSongList: { addToCart: string } }>,
    private router: Router
  ) {}
  tracks = TRACKS;
  selectedTrack?: track;
  addedCart;

  ngOnInit(): void {
    this.addedCart = this.store.dispatch({
      type: SongListActionTypes.addToCartStatus,
      addedCart: "false",
    });
  }

  onSelect(track: track): void {
    this.selectedTrack = track;
  }

  addToCart(id: number) {
    this.addedCart = this.store.dispatch({
      type: SongListActionTypes.updateaddToCartStatus,
      addedCart: "true",
      id: id,
    });
    this.router.navigate(["/home"]);
  }

  getAddedCart() {
    return this.addedCart;
  }
}
