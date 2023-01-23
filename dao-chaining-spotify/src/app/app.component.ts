import { Component } from "@angular/core";
import { ContractService } from "./services/contract.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "chaining-spotify-dapp";
  private user;

  constructor() {}
}
