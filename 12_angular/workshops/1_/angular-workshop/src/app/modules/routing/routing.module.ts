import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryListPageComponent } from 'src/app/pages/country-list-page/country-list-page.component';
import { CountryByNamePageComponent } from 'src/app/pages/country-by-name-page/country-by-name-page.component';

const RouteSystem: Routes = [
  { path: '', pathMatch: 'full', component: CountryListPageComponent },
  { path: 'country/:name', component: CountryByNamePageComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(RouteSystem) //* module initialization
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
