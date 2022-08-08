import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListPageComponent } from './pages/country-list-page/country-list-page.component';
import { CountryByNamePageComponent } from './pages/country-by-name-page/country-by-name-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListPageComponent,
    CountryByNamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
