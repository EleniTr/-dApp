import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./containers/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SongListComponent } from "./components/song-list/song-list.component";
import { AuthGuard } from "./helpers/auth.guard";

const routes: Routes = [
  { path: "", component: SongListComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
