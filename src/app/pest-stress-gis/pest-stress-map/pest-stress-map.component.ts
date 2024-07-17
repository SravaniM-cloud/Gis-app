import { Component, OnInit } from '@angular/core';
import { PestStressSidebarComponent } from '../pest-stress-sidebar/pest-stress-sidebar.component';
import { PestStressInfoboxComponent } from '../pest-stress-infobox/pest-stress-infobox.component';
import { Subject } from 'rxjs';
import { PestStressGisService } from '../pest-stress-gis.service';
import { AgriProjConstants } from 'src/app/proj-constants';

@Component({
  selector: 'app-pest-stress-map',
  templateUrl: './pest-stress-map.component.html',
  styleUrls: ['./pest-stress-map.component.scss']
})
export class PestStressMapComponent implements OnInit {

  sidebarComponent = PestStressSidebarComponent;
  infoboxComponent = PestStressInfoboxComponent;
  destroy: any = new Subject();

  taskManagerComponent: any = '';

  otherOptions: any = {
    legend: {},
    serviceType: PestStressGisService,
    functionName: 'getSrcWiseLayers',
    mapId: 'pest-stress-mapId',
    searchResultComponent: '',
    fixedSidebar: true,
    dontLoadUserBasedLocation: false,
    filterLayersAtEveryLevel: true,
    adminBoundaries: true,
    boundaryColors: {
      areaOfFocus: '#000000',
      vectorColor: '#000000'
    },
    setFeatureStyleForVector: false,
    locationLabelsVisibility: [...Object.keys(AgriProjConstants.HIE_ORDER)],
    triggerGetSrcWiseLayersFunction: true,
    onLocationClick: 'onLocationClick',
    dataProcessingPanel: false,
    isAoiPanel: false,
    myCartPanel: false,
    hasSidePanel: false,
    locationTypeList: [],
    hasNavbar: false,
    enableMIS: true
  };


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}