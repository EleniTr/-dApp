import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AccountService } from "../../services/account.service";
import { AlertService } from "../../services/alert.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  roleList = ["Admin", "User"];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: ["", Validators.required],
      firstName: [""],
      lastName: [""],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .register(this.signUpForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success("Registration successful", {
            keepAfterRouteChange: true,
          });
          this.router.navigate(["../login"], { relativeTo: this.route });
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
