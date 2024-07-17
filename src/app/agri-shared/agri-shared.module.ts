import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgriBreadcrumbComponent } from './agri-breadcrumb/agri-breadcrumb.component';
import { AgriLayersComponent } from './agri-layers/agri-layers.component';
import { GisAgriMapComponent } from './gis-agri-map/gis-agri-map.component';
import { AnimationProgressBarComponent } from './animation-progress-bar/animation-progress-bar.component';



@NgModule({
  declarations: [
    AgriBreadcrumbComponent,
    AgriLayersComponent,
    GisAgriMapComponent,
    AnimationProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgriSharedModule { }
