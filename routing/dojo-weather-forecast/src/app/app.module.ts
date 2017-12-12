import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' // <-- make sure you have HttpClientModule
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
