import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Observable } from "rxjs";

import * as SongListActionTypes from "../actions/song-list.actions";

@Injectable()
export class UserEffects {
  updateSongList$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(SongListActionTypes.updateaddToCartStatus),
      map((response: any) =>
        SongListActionTypes.updateaddToCartStatus({ addToCart: response })
      )
    );
  });

  constructor(private actions$: Actions) {}
}
