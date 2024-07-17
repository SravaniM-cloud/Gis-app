import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AgricultureMapConstants, BASE_LAYER_LIST, LAYER_TYPES, LOCATIONS_LATLNG, LOCATIONS_ZOOM, MAP_OPTIONS } from '../map.constants';
import { GisdataService, isNullOrUndefined } from '../gis-data.service';
import * as L from 'leaflet';



@Component({
  selector: 'app-gis-agri-map',
  templateUrl: './gis-agri-map.component.html',
  styleUrls: ['./gis-agri-map.component.scss']
})
export class GisAgriMapComponent implements OnInit ,AfterViewInit{

  @Input() infoboxComponent: any;
  @Input() otherOptions: any;
  @Input() sidebarComponent: any;
  @Input() taskManagerComponent: any;
  mapId : String = '';
  layers: any = {
    baselayers: {},
    overlaylayers: {},
    processedLayers: {},
    uploadedLayers: {},
    clickedBoundaryLayers: {},
    // locationWiseOverlays: {},
    aoiLayers: {},
    selectedBoundaryLayers: {}
  }
  map : any ;

  constructor(
    public gisDataSrv : GisdataService
  ) { }

  ngOnInit(): void {
    this.mapId = 'map-' + this.otherOptions.mapId;
    this.revalidateMap();
    this.initializeMapContainer();
  }

  ngAfterViewInit(): void {
    // this.revalidateMap();
    return;
  }

  revalidateMap(): void {
    window.dispatchEvent(new Event('resize'));
    if (this.map) {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 200)
    }
  }
  initializeMapContainer(){
    setTimeout(() => {
      MAP_OPTIONS['editable'] = true;
      MAP_OPTIONS['zoomDelta'] = 1;
      MAP_OPTIONS['zoomSnap'] = 1;
      this.map = (L.map as any)(this.mapId, MAP_OPTIONS);
      this.map.setView(LOCATIONS_LATLNG[AgricultureMapConstants.LOCATIONS.INDIA], LOCATIONS_ZOOM[AgricultureMapConstants.LOCATIONS.INDIA]);
      this.createPanes();
      // this.addZoomBar();
      this.getAndSetBaseLayers();
    }, 10);
  }

  getAndSetBaseLayers() {
    let tileLayers = this.gisDataSrv.addBaseTileLayers(BASE_LAYER_LIST[LAYER_TYPES.TILE_LAYER], this.map)
    this.layers.baselayers = Object.assign(tileLayers, {});
  }

  private createPanes() {
    AgricultureMapConstants.PANE_LIST.forEach((pane: any) => {
      this.map.createPane(pane.name);
      this.map.getPane(pane.name).style.zIndex = pane.zindex;
    });
  }

}
