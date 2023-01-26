import { Component } from "@angular/core";
import { ContractService } from "./services/contract.service";
import { AuthenticationService } from "./services/authentication.service";
import { Router } from "@angular/router";
import { User } from "./models/users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "chaining-spotify-dapp";
  private user;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
