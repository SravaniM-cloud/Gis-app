import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PestStressGisModule } from './pest-stress-gis/pest-stress-gis.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PestStressGisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
