import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PestStressMapComponent } from './pest-stress-map/pest-stress-map.component';

const routes: Routes = [
  {
    path: '',
    component: PestStressMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PestStressGisRoutingModule { }
