import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HomeComponent } from "../../containers/home/home.component";

@Component({
  selector: "app-create-org",
  templateUrl: "./create-org.component.html",
  styleUrls: ["./create-org.component.scss"],
})
export class CreateOrgComponent implements OnInit {
  @Output() create = new EventEmitter();

  songPrice: number;

  form = this.fb.group({
    id: [505, Validators.required], // uint256
    walletAddress: ["", Validators.required],
    name: ["", Validators.required],
    tokenAddress: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private songListAddtoCart: HomeComponent
  ) {}

  ngOnInit(): void {
    this.songPrice = this.songListAddtoCart.getSong().price;
  }

  Submit() {
    this.create.emit(this.form.value);
  }
}
