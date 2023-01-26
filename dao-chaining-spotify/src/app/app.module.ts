import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./containers/home/home.component";
import { ConnectComponent } from "./components/connect/connect.component";
import { CreateOrgComponent } from "./components/create-org/create-org.component";

import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";

import { BasicAuthInterceptor } from "./helpers/basic-auth.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptior";

// used to create fake backend
import { fakeBackendProvider } from "./helpers/fake-backend";

import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { EffectsModule } from "@ngrx/effects";
import * as fromUser from "./reducers/user.reducer";
import { UserEffects } from "./effects/user.effects";
import * as fromOrganization from "./reducers/organization.reducer";
import * as fromSongList from "./reducers/song-list.reducer";
import { OrganizationEffects } from "./effects/organization.effects";
// import { SongListEffects } from "./effects/song-list.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { GetOrgComponent } from "./components/get-org/get-org.component";
import { DetailOrgComponent } from "./components/detail-org/detail-org.component";
import { LoginComponent } from "./components/login/login.component";
import { SongListComponent } from "./components/song-list/song-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectComponent,
    CreateOrgComponent,
    GetOrgComponent,
    DetailOrgComponent,
    LoginComponent,
    SongListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(
      fromSongList.songListFeatureKey,
      fromSongList.reducer
    ),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([
      UserEffects,
      OrganizationEffects,
      // SongListEffects,
    ]),
    StoreModule.forFeature(
      fromOrganization.organizationFeatureKey,
      fromOrganization.reducer
    ),
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: "never" },
    },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
