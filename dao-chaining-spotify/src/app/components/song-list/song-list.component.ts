import { Component, OnInit } from "@angular/core";
import { track } from "./track";
import { TRACKS } from "./tracks";

@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  styleUrls: ["./song-list.component.scss"],
})
export class SongListComponent implements OnInit {
  constructor() {}
  tracks = TRACKS;
  selectedTrack?: track;

  ngOnInit(): void {}

  onSelect(track: track): void {
    this.selectedTrack = track;
  }
}
