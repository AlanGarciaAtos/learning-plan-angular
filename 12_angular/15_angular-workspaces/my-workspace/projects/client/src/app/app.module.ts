import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkspaceCommonModule } from 'workspace-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkspaceCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
