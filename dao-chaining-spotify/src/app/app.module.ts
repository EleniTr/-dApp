import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransactionComponent } from './transaction/transaction.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, TransactionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
