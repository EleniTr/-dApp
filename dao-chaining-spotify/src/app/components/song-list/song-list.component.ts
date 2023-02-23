import { Component, OnInit } from "@angular/core";
import { track } from "../../models/track";
import { TRACKS } from "./tracks";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { SongListActionTypes } from "src/app/actions/song-list.actions";
import { User } from "../../models/users";
import { AccountService } from "../../services/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  styleUrls: ["./song-list.component.scss"],
})
export class SongListComponent implements OnInit {
  user: User;
  constructor(
    private store: Store<{ fromSongList: { addToCart: string } }>,
    private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.accountService.userValue;
    this.userRole = this.accountService.userValue.role;
  }
  tracks = TRACKS;
  selectedTrack?: track;
  addedCart;
  userRole: string;
  ipfsForm: FormGroup;

  ngOnInit(): void {
    this.ipfsForm = this.formBuilder.group({
      ipfsForm_file: ["", Validators.required],
    });

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
