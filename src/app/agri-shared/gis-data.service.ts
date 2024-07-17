import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as L from 'leaflet';
import 'src/assets/js/maplibs/L.TileLayer.ColorFilter.js'
import 'src/assets/js/maplibs/L.TileLayer.ColorFIlter.min.js'
import 'src/assets/js/maplibs/L.vectorgrid.bundle.js';
import 'leaflet-bing-layer';
import { EMPTY, catchError } from 'rxjs';
import 'src/assets/js/maplibs/L.TileLayer.NoGap.js';
import { AgricultureMapConstants,LAYER_TYPES, environment} from './map.constants';
import "src/assets/leaflet-image-transform/L.ImageTransform.js"

@Injectable({
  providedIn: 'root'
})
export class GisdataService {

  urlConstants: any = environment.url;
  bbox: any = '';
  locTypeWiseLocUUID: any = {};
  overlaylayersMap: any = {
    geodata: {
      country: {},
      state: {},
      district: {},
      block: {},
      village: {},
      village_micada: {}
    },
    layers: {
      country: {},
      state: {},
      district: {},
      block: {},
      village: {},
      village_micada: {}
    }
  }

  overlaylayersLULC: any = {
    geodata: {
      country: {},
      state: {},
      district: {},
      block: {},
      village: {},
      village_micada: {}
    },
    layers: {
      country: {},
      state: {},
      district: {},
      block: {},
      village: {},
      village_micada: {}
    }
  }

  constructor(
  ) { }


  addBaseTileLayers(layerList: any, mapObj: any) {
    let baselayers: any = {}
    for (let index in layerList) {
      let layer: any = layerList[index];
      let layerObj: any = this.addTileLayer(layer);
      mapObj.removeLayer(layerObj);
      if (layer['visible']) {
        mapObj.addLayer(layerObj);
      }
      baselayers[layer['name']] = layerObj;
    }
    return baselayers;
  }

  addTileLayer(layerOptions: any) {
    let tileLayer;
    if (layerOptions.name === 'Google Satellite') {
      tileLayer = (L.tileLayer as any).colorFilter(
        layerOptions.url,
        layerOptions
      );
    } else if (layerOptions.name == 'Bing') {
      tileLayer = (L as any).tileLayer.bing(layerOptions.token);
      tileLayer.options.visible = layerOptions.visible;
      tileLayer.options.displayName = layerOptions.displayName;
    } else {
      tileLayer = new L.TileLayer(layerOptions.url, layerOptions);
    }
    return tileLayer;
  }
  getApplicationBasedLayer(layerList: any, layerType: any, params?: any, gisMapComp?: any) {
    if (layerType == LAYER_TYPES.WMS_LAYER) {
      return this.getWMSOverLays(layerList, params);
    } else if (layerType == LAYER_TYPES.VECTOR_LAYER) {
      return this.getVECTOROverlays(layerList, params, gisMapComp);
    } else if (layerType == LAYER_TYPES.GEOJSON_LAYER) {
      return this.getGEOJSONOverLays(layerList);
    } else if (layerType == LAYER_TYPES.HEATMAP_LAYER) {
      return this.getHeatMapOverlays(layerList, {})
    }
  }
  getGeoServerURL(geo?: any, workspaceName?: any) {
    let url: any = this.urlConstants[geo] + workspaceName;
    // let url: any = this.urlConstants.AIMS_GEOSERVER_URL + 'agristack';
    return url;
  }

  getWMSOverLays(data: any, params?: any) {
    let overlays: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && !isNullOrUndefined(data[key])) {
        const value = data[key];
        let overlay: any = {};
        overlay.name = value.name;
        overlay.type = 'wms';
        overlay.component = value.component;
        overlay.layerOptions = {};
        if (value.cType && value.cType.length > 0) {
          overlay.layerOptions.cType = value.cType;
        }
        if (params && params['pUUID']) {
          overlay.layerOptions.pUUID = params['pUUID'];
        }
        overlay.layerOptions.name = value.name;
        overlay.layerOptions.format = 'image/png';
        overlay.layerOptions.transparent = true;
        overlay.layerOptions.workspaceName = value.layeroptions_name.split(':')[0] == 'visualisation' ? 'visualization' : value.layeroptions_name.split(':')[0];
        overlay.url = this.getGeoServerURL(value.environment_server_url, overlay.layerOptions.workspaceName) + "/wms";
        if (this.validateValue(value.env)) {
          overlay.layerOptions.env = value.env;
        }
        if(this.validateValue(value.openGroupByDefault)) {
          overlay.layerOptions.openGroupByDefault = value.openGroupByDefault;
        }
        if (this.validateValue(value.viewparams)) {
          overlay.layerOptions.VIEWPARAMS = value.viewparams;
        }
        if (this.validateValue(value.hasLegend))
          overlay.layerOptions.hasLegend = value.hasLegend;
        if (this.validateValue(value.legendName))
          overlay.layerOptions.legendName = value.legendName;
        if (this.validateValue(value.key))
          overlay.layerOptions.key = value.key;
        if (this.validateValue(value.view))
          overlay.layerOptions.view = value.view;
        if (this.validateValue(value.displayName))
          overlay.layerOptions.displayName = value.displayName;
        if (this.validateValue(value.imagesrc))
          overlay.layerOptions.imagesrc = value.imagesrc;
        if (this.validateValue(value.source))
          overlay.layerOptions.source = value.source;
        if (this.validateValue(value.layer_name))
          overlay.layerOptions.layer_name = value.layer_name;
        if (this.validateValue(value.cql_filter))
          overlay.layerOptions.cql_filter = value.cql_filter;
        if (this.validateValue(value.cql_filter_value)) {
          overlay.layerOptions.cql_filter_value = value.cql_filter_value;
        }
        if (this.validateValue(value.viewParams))
          overlay.layerOptions.viewParams = value.viewparams
        if (this.validateValue(value.subgroup))
          overlay.layerOptions.subgroup = value.subgroup;
        if (this.validateValue(value.visible))
          overlay.layerOptions.visible = value.visible;
        if (this.validateValue(value.dashboardView))
          overlay.layerOptions.dashboardView = value.dashboardView;
        if (this.validateValue(value.group))
          overlay.layerOptions.group = value.group;
        if (this.validateValue(value.layeroptions_name))
          overlay.layerOptions.layers = value.layeroptions_name;
        if (this.validateValue(value.layeroptions_min_zoom))
          overlay.layerOptions.minZoom = value.layeroptions_min_zoom;
        if (this.validateValue(value.layeroptions_max_zoom))
          overlay.layerOptions.maxZoom = value.layeroptions_max_zoom;
        if (this.validateValue(value.layeroptions_pane)) {
          overlay.layerOptions.pane = value.layeroptions_pane;
        }
        if (this.validateValue(value.layeroptions_zindex)) {
          overlay.layerOptions.zIndex = value.layeroptions_zindex;
        }
        if (this.validateValue(value.layeroptions_show_on_selector) && !value.layeroptions_show_on_selector)
          overlay.layerOptions.showOnSelector = value.layeroptions_show_on_selector;
        if (this.validateValue(value.group_type)) {
          overlay.layerOptions.groupType = value.group_type
        }
        if (this.validateValue(value.data)) {
          overlay.layerOptions.data = value.data
        }
        if (this.validateValue(value.crs) && value.crs == "EPSG4326") {
          overlay.layerOptions.crs = L.CRS.EPSG4326;
        }
        if (this.validateValue(value.position)) {
          overlay.layerOptions.position = value.position;
        }
        if (this.validateValue(value.time)) {
          overlay.layerOptions.time = value.time;
        }
        if (value.type === 'WMS') {

          if (overlay.name === 'Sentinel 1' || overlay.name === 'Sentinel 2 FCC' || overlay.name === 'Sentinel 2 TCC' ||
            overlay.name.includes('ALOS')) {
            overlay.key = overlay.name;
            overlays[overlay.name] = overlay;
          }
          else {
            overlay.key = key;
            overlay.layerOptions.key = key;
            overlays[key] = overlay;
          }
        }
        if (this.validateValue(value.layeroptions_styles)) {
          overlay.layerOptions.STYLES = value.layeroptions_styles;
        }
        if (this.validateValue(value.info)) {
          overlay.layerOptions.info = value.info
        }
        if (this.validateValue(value.environment_server_url)) {
          overlay.layerOptions.environment_server_url = value.environment_server_url;
        }
      }
    }
    return overlays;
  }
  getVECTOROverlays(data: any, params?: any, gisMapComp?: any) {
    let that: any = this;
    let overlays: any = {};
    for (const key in data) {
      let element = data[key];
      if (element.type === "VECTOR") {
        const overlay: any = {};
        overlay.type = 'vector';
        overlay.name = element.name;
        overlay.component = element.component;
        overlay.layerOptions = {};
        overlay.layerOptions.interactive = true;
        overlay.layerOptions.name = element.name;
        this.locTypeWiseLocUUID[element.layer_name] = [];
        overlay.layerOptions.rendererFactory = (L as any).canvas.tile;
        if (this.validateValue(element.cql_filter)) {
          overlay.layerOptions.cql_filter = element.cql_filter;
        }
        if(this.validateValue(element.openGroupByDefault)) {
          overlay.layerOptions.openGroupByDefault = element.openGroupByDefault;
        }
        if (this.validateValue(element.layer_name)) {
          overlay.layerOptions.layer_name = element.layer_name;
        }
        if (this.validateValue(element.layeroptions_name)) {
          overlay.layerOptions.workspaceName = element.layeroptions_name.split(':')[0];
        }
        if (this.validateValue(element.environment_server_url)) {
          overlay.layerOptions.environment_server_url = element.environment_server_url;
        }
        if (this.validateValue(element.layerFrom)) {
          overlay.layerOptions.layerFrom = element.layerFrom;
        }
        if (this.validateValue(element.imageUrl)) {
          overlay.layerOptions.imageUrl = element.imageUrl;
        }
        if (this.validateValue(element.id)) {
          overlay.layerOptions.id = element.id;
        }
        if (this.validateValue(element.cql_filter_value)) {
          overlay.layerOptions.cql_filter_value = element.cql_filter_value;
        }
        if (this.validateValue(element.cql_filter)) {
          overlay.layerOptions.cql_filter = element.cql_filter;
        }
        overlay.url = this.getVectorLayerURL(element.layeroptions_name, overlay.layerOptions);
        overlay.layerOptions.view = element.view;
        overlay.layerOptions.minZoom = element.layeroptions_min_zoom;
        overlay.layerOptions.maxZoom = element.layeroptions_max_zoom;
        overlay.layerOptions.pane = element.layeroptions_pane;
        overlay.layerOptions.visible = element.visible;
        overlay.layerOptions.type = LAYER_TYPES.VECTOR_LAYER;
        if (element.component) {
          overlay.layerOptions.component = element.component;
        }

        if (this.validateValue(element.viewparams)) {
          overlay.layerOptions.VIEWPARAMS = element.viewparams;
        }
        if (this.validateValue(element.source))
          overlay.layerOptions.source = element.source;
        if (this.validateValue(element.dashboardView))
          overlay.layerOptions.dashboardView = element.dashboardView;
        if (this.validateValue(element.hasLegend))
          overlay.layerOptions.hasLegend = element.hasLegend;
        if (this.validateValue(element.legendName))
          overlay.layerOptions.legendName = element.legendName;
        overlay.layerOptions.group = element.group;
        overlay.layerOptions.displayName = element.displayName;
        if (this.validateValue(element.layeroptions_show_on_selector) && !element.layeroptions_show_on_selector)
          overlay.layerOptions.showOnSelector = element.layeroptions_show_on_selector;
        if (this.validateValue(element.group_type)) {
          overlay.layerOptions.groupType = element.group_type
        }
        if (this.validateValue(element.layeroptions_name)) {
          overlay.layerOptions.layerName = element.layeroptions_name;
        }
        if (this.validateValue(element.layer_events)) {
          overlay.layerOptions.layerEvents = element.layer_events;
        }
        overlay.layerOptions.vectorTileLayerStyles = {};
        if (element.layer_name === 'State Boundary') {
          let layerName: any = element.layeroptions_name.split(':')[1];
          overlay.layerOptions.vectorTileLayerStyles[layerName] = {
            fillColor: "transparent",
            opacity: 0.8,
            weight: gisMapComp.otherOptions.boundaryColors.vectorColor === '#000000' ? 1 : 0.6,
            color: gisMapComp.otherOptions.boundaryColors.vectorColor,
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            if (!that.locTypeWiseLocUUID[element.layer_name].includes(feature.properties.uuid)) {
              that.locTypeWiseLocUUID[element.layer_name].push(feature.properties.uuid)
            }
            return feature.properties.uuid;
          }
        }
        if (element.layer_name === 'District Boundary') {
          let layerName: any = element.layeroptions_name.split(':')[1];
          overlay.layerOptions.vectorTileLayerStyles[layerName] = {
            fillColor: "transparent",
            opacity: 1,
            weight: 0.6,
            color: gisMapComp.otherOptions.boundaryColors.vectorColor
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            if (!that.locTypeWiseLocUUID[element.layer_name].includes(feature.properties.district_uuid)) {
              that.locTypeWiseLocUUID[element.layer_name].push(feature.properties.district_uuid)
            }
            return feature.properties.district_uuid;
          }
        }
        if (element.layer_name === 'Block Boundary') {
          let layerName: any = element.layeroptions_name.split(':')[1];
          overlay.layerOptions.vectorTileLayerStyles[layerName] = function (properties: any, zoom: any) {
            return {
              fillColor: "transparent",
              opacity: 1,
              weight: 0.6,
              color: zoom > 9 ? gisMapComp.otherOptions.boundaryColors.vectorColor : 'transparent',
            }
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            if (!that.locTypeWiseLocUUID[element.layer_name].includes(feature.properties.block_uuid)) {
              that.locTypeWiseLocUUID[element.layer_name].push(feature.properties.block_uuid)
            }
            return feature.properties.block_uuid;
          }
        }
        if (element.layer_name === 'Village Boundary') {
          let layerName: any = element.layeroptions_name.split(':')[1];
          overlay.layerOptions.vectorTileLayerStyles[layerName] = function (properties: any, zoom: any) {
            return {
              fillColor: "transparent",
              opacity: 1,
              weight: 1,
              color: zoom > 9 ? gisMapComp.otherOptions.boundaryColors.vectorColor : 'transparent',
            }
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            if (!that.locTypeWiseLocUUID[element.layer_name].includes(feature.properties.village_uuid)) {
              that.locTypeWiseLocUUID[element.layer_name].push(feature.properties.village_uuid)
            }
            return feature.properties.village_uuid;
          }
        }
        if (element.layer_name === 'Village Micada Boundary') {
          let layerName: any = element.layeroptions_name.split(':')[1];
          overlay.layerOptions.vectorTileLayerStyles[layerName] = function (properties: any, zoom: any) {
            return {
              fillColor: "transparent",
              opacity: 1,
              weight: 1,
              color: zoom > 9 ? gisMapComp.otherOptions.boundaryColors.vectorColor : 'transparent',
            }
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            if (!that.locTypeWiseLocUUID[element.layer_name].includes(feature.properties.village_uuid)) {
              that.locTypeWiseLocUUID[element.layer_name].push(feature.properties.village_uuid)
            }
            return feature.properties.village_uuid;
          }
        }
        if (element.layer_name === 'Field Polygons') {
          overlay.layerOptions.vectorTileLayerStyles['bb_farm_polygons'] = function (properties: any, zoom: any) {
            return {
              fillColor: "transparent",
              opacity: 1,
              weight: 0.6,
              color: '#000000'
            }
          }
          overlay.layerOptions.getFeatureId = function (feature: any) {
            return feature.properties.uuid;
          }
        }
        if (element.type === 'VECTOR') {
          overlay.key = element;
          overlays[key] = overlay;
        }
      }
    }
    return overlays;
  }

  getVectorLayerURL(layerName: any, options: any) {
    let url: any = '';
    if (options.layerFrom !== 'BACKEND') {
      url = environment.url[options.environment_server_url] + options.workspaceName
      url += '/gwc/service/wmts?layer=' + layerName + '&tilematrixset=EPSG:900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=application/x-protobuf;type=mapbox-vector&TileMatrix=EPSG:900913:{z}&TileCol={x}&TileRow={y}';
      if (this.validateValue(options.cql_filter)) {
        url += '&cql_filter=' + options.cql_filter;
      }
    } else {
      url += environment.url[options.environment_server_url] + options.imageUrl;
    }
    return url;
  }

  validateValue(value: any) {
    if (isNullOrUndefined(value)) {
      return false;
    }
    return true;
  }

  getGEOJSONOverLays(data: any) {
    let overlays: any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && !isNullOrUndefined(data[key])) {
        const value = data[key];
        let overlay: any = {};
        overlay.name = value.name;
        overlay.type = 'GEOJSON';
        overlay.layerOptions = {};
        if (value.cType && value.cType.length > 0) {
          overlay.cType = value.cType;
          overlay.layerOptions.cType = value.cType;
        }
        overlay.layerOptions.type = 'GEOJSON';
        overlay.layerOptions.name = value.name;
        overlay.layerOptions.format = 'image/png';
        overlay.layerOptions.transparent = true;
        if (this.validateValue(value.hasLegend))
          overlay.layerOptions.hasLegend = value.hasLegend;
        if (this.validateValue(value.legendName))
          overlay.layerOptions.legendName = value.legendName;
        if (this.validateValue(value.legendData))
          overlay.layerOptions.legendData = value.legendData;
        if (this.validateValue(value.component))
          overlay.layerOptions.component = value.component;
        if (this.validateValue(value.view))
          overlay.layerOptions.view = value.view;
        if (this.validateValue(value.layer_name))
          overlay.layerOptions.layer_name = value.layer_name;
        if (this.validateValue(value.cqlfilter))
          overlay.layerOptions.cql_filter = value.cqlfilter;
        if (this.validateValue(value.cql_filter_value))
          overlay.layerOptions.cql_filter_value = value.cql_filter_value;
        if (this.validateValue(value.source))
          overlay.layerOptions.source = value.source;
        if (this.validateValue(value.visible))
          overlay.layerOptions.visible = value.visible;
        if (this.validateValue(value.layerFrom))
          overlay.layerOptions.layerFrom = value.layerFrom;
        if (this.validateValue(value.includeAll))
          overlay.layerOptions.includeAll = value.includeAll;
        if (this.validateValue(value.displayName))
          overlay.layerOptions.displayName = value.displayName;
        if (this.validateValue(value.style))
          overlay.layerOptions.style = value.style;
        if (this.validateValue(value.onEachFeature))
          overlay.layerOptions.onEachFeature = value.onEachFeature;
        if (this.validateValue(value.pointToLayer))
          overlay.layerOptions.pointToLayer = value.pointToLayer;
        if (this.validateValue(value.afterLayerAddition))
          overlay.layerOptions.afterLayerAddition = value.afterLayerAddition;
        if (this.validateValue(value.group))
          overlay.layerOptions.group = value.group;
        if (this.validateValue(value.canalWMSLayer))
          overlay.layerOptions.canalWMSLayer = value.canalWMSLayer;
        if (this.validateValue(value.layeroptions_name))
          overlay.layerOptions.layers = value.layeroptions_name;
        if (this.validateValue(value.layeroptions_min_zoom))
          overlay.layerOptions.minZoom = value.layeroptions_min_zoom;
        if (this.validateValue(value.layeroptions_max_zoom))
          overlay.layerOptions.maxZoom = value.layeroptions_max_zoom;
        if (this.validateValue(value.layeroptions_pane)) {
          overlay.layerOptions.pane = value.layeroptions_pane;
        }
        if (this.validateValue(value.layeroptions_zindex)) {
          overlay.layerOptions.zIndex = value.layeroptions_zindex;
        }
        if (this.validateValue(value.layeroptions_show_on_selector) && !value.layeroptions_show_on_selector)
          overlay.layerOptions.showOnSelector = value.layeroptions_show_on_selector;
        if (this.validateValue(value.group_type)) {
          overlay.layerOptions.groupType = value.group_type
        }
        if(this.validateValue(value.openGroupByDefault)) {
          overlay.layerOptions.openGroupByDefault = value.openGroupByDefault;
        }
        if (this.validateValue(value.data)) {
          overlay.layerOptions.data = value.data
        }
        if (this.validateValue(value.crs) && value.crs == "EPSG4326") {
          overlay.layerOptions.crs = L.CRS.EPSG4326;
        }
        if (this.validateValue(value.position)) {
          overlay.layerOptions.position = value.position;
        }
        if (value.type === 'GEOJSON') {
          overlay.key = key;
          overlays[key] = overlay;
        }
        if (this.validateValue(value.layeroptions_styles)) {
          overlay.layerOptions.STYLES = value.layeroptions_styles;
        }
        if (this.validateValue(value.info)) {
          overlay.layerOptions.info = value.info
        }
        if (this.validateValue(value.environment_server_url)) {
          overlay.layerOptions.environment_server_url = value.environment_server_url;
        }
        if (this.validateValue(value.layeroptions_protocol)) {
          overlay.layerOptions.protocol = value.layeroptions_protocol;
        }
        if (this.validateValue(value.layeroptions_parent_lname)) {
          overlay.layerOptions.parent_lname = value.layeroptions_parent_lname;
        }
        if (this.validateValue(value.parent_cql_filter_key)) {
          overlay.layerOptions.parent_cql_filter_key = value.parent_cql_filter_key;
        }
      }
    }
    return overlays;
  }
  getHeatMapOverlays(layersList: any, imageData?: any) {
    var overlays: any = {};
    for (const key in layersList) {
      if (layersList.hasOwnProperty(key)) {
        const value = layersList[key];
        let overlay: any = {};
        overlay.name = value.name;
        overlay.type = 'image';
        overlay.layerOptions = {};
        overlay.layerOptions.name = value.name;
        if (this.validateValue(imageData[overlay.name]))
          if (this.validateValue(value.group_type)) {
            overlay.layerOptions.groupType = value.group_type
          }
        if (this.validateValue(value.component)) {
          overlay.layerOptions.component = value.component;
        }
        if (this.validateValue(value.hasLegend))
          overlay.layerOptions.hasLegend = value.hasLegend;
        if (this.validateValue(value.key))
          overlay.layerOptions.key = value.key;
        if (this.validateValue(value.legendName))
          overlay.layerOptions.legendName = value.legendName;
        if (this.validateValue(value.legendData)) {
          overlay.layerOptions.legendData = value.legendData;
        }
        if (this.validateValue(value.subgroup))
          overlay.layerOptions.subgroup = value.subgroup;
        if (this.validateValue(value.displayName))
          overlay.layerOptions.displayName = value.displayName;
        if (this.validateValue(value.visible))
          overlay.layerOptions.visible = value.visible;
        if (this.validateValue(value.group))
          overlay.layerOptions.group = value.group;
        if (this.validateValue(value.type))
          overlay.layerOptions.type = value.type;
        if (this.validateValue(value.layeroptions_name))
          overlay.layerOptions.layerName = value.layeroptions_name;
        if (this.validateValue(value.layeroptions_pane)) {
          overlay.layerOptions.pane = value.layeroptions_pane;
        }
        if(this.validateValue(value.openGroupByDefault)) {
          overlay.layerOptions.openGroupByDefault = value.openGroupByDefault;
        }
        if (this.validateValue(value.layeroptions_min_zoom))
          overlay.layerOptions.minZoom = value.layeroptions_min_zoom;
        if (this.validateValue(value.layeroptions_max_zoom))
          overlay.layerOptions.maxZoom = value.layeroptions_max_zoom;
        if (this.validateValue(value.layeroptions_show_on_selector) && !value.layeroptions_show_on_selector)
          overlay.layerOptions.showOnSelector = value.layeroptions_show_on_selector;
        if (value.type === 'HEATMAP' && !this.validateValue(value.image_path)) {
          if (this.validateValue(imageData[overlay.name])) {
            overlay.url = imageData[overlay.name].url
            overlays[key] = overlay;
          }
          else {
            overlay.url = imageData[value.layeroptions_name];
            overlays[key] = overlay;
          }
        } else if (value.type === 'HEATMAP' && this.validateValue(value.image_path)) {
          overlay.url = value.image_path;
          overlays[key] = overlay;
        }
        if (this.validateValue(value.info)) {
          overlay.layerOptions.info = value.info
        }
      }
    }
    return overlays;
  }


}

export function isNullOrUndefined(value: any) {
    return value === null || value === undefined;
  }