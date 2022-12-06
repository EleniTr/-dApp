import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerInterfaceComponent } from './customer-interface/customer-interface.component';
import { ProviderInterfaceComponent } from './provider-interface/provider-interface.component';

const ROUTES: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'customer', component: CustomerInterfaceComponent },
  { path: 'provider', component: ProviderInterfaceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerInterfaceComponent,
    ProviderInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
