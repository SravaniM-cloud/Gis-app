import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PestStressInfoboxComponent } from './pest-stress-infobox/pest-stress-infobox.component';
import { PestStressSidebarComponent } from './pest-stress-sidebar/pest-stress-sidebar.component';
import { PestStressMapComponent } from './pest-stress-map/pest-stress-map.component';
import { PestStressGisRoutingModule } from './pest-stress-gis-routing.module';

@NgModule({
  declarations: [
    PestStressInfoboxComponent,
    PestStressSidebarComponent,
    PestStressMapComponent
  ],
  imports: [
    CommonModule,
    PestStressGisRoutingModule
  ]
})
export class PestStressGisModule { }
