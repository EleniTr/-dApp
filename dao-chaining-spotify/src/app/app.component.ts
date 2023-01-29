import { Component } from "@angular/core";
import { AccountService } from "./services/account.service";
import { Router } from "@angular/router";
import { User } from "./models/users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "chaining-spotify-dapp";
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
