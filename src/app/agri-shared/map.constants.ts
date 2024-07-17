export const AimsBaseUrl: any = 'https://fieldwise.vassarlabs.com';
export const environment: any = {
    production: false,
    url: {
      AIMS_GEOSERVER_URL: 'http://20.219.166.170/geoserver/',
      AIMS_API_URL: AimsBaseUrl + '/staging/api/',
      AGRI_URL: 'http://aims.vassarlabs.com/api/',
      FILES_URL: AimsBaseUrl + '/files',
      IMAGE_URL: AimsBaseUrl + '/images',
      USERMANAGEMENT_URL: 'https://agriwise.vassarlabs.com/authentication/login',
      KEYCLOCK_URL: 'https://agriwise.vassarlabs.com/auth/realms',
      AimsBaseUrl: AimsBaseUrl,
      KRISHI_DSS_GEOSERVER_URL: 'https://agriwise.vassarlabs.com/geoserver/',
      NGROK_URL: 'http://192.168.15.197:9002/',
      BOONIDI_URL: 'https://bhoonidhi.nrsc.gov.in/geoserver/',
      MICADA_URL: 'http://iisif-staging.vassarlabs.com/api/'
    }
  };


export const MAP_OPTIONS: any = {
    minZoom: 5,
    maxZoom: 22,
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    zoomControl: false,
    zoomAnimation: true,
    attributionControl: false,
    maxBounds: [
        [40, 66],
        [5, 99]
    ]
};

export const AgricultureMapConstants: any = {
    LOCATIONS: {
        'ALL': 'ALL',
        'INDIA': 'INDIA',
        'COUNTRY': 'COUNTRY',
        'STATE': 'STATE',
        'DISTRICT': 'DISTRICT',
        'VILLAGE': 'VILLAGE',
        'BLOCK': 'BLOCK',
        'FARM': 'FARM',
        'CROP': 'CROP',
        'USER_DEFINED': 'USER_DEFINED',
        'ADMIN_LAYERS': 'ADMIN_LAYERS',
        'COMBINED_BASIN': 'COMBINED_BASIN'
    },
    LOCATION_TYPES: {
        'COUNTRY': 'COUNTRY',
        'STATE': 'STATE',
        'STATE BOUNDARY': 'STATE BOUNDARY',
        'DISTRICT': 'DISTRICT',
        'DISTRICT BOUNDARY': 'DISTRICT BOUNDARY',
        'BLOCK': 'BLOCK',
        'BLOCK BOUNDARY': 'BLOCK BOUNDARY',
        'VILLAGE': 'VILLAGE',
        'VILLAGE BOUNDARY': 'VILLAGE BOUNDARY',
        'FARM': 'FARM',
        'FARM BOUNDARY': 'FARM BOUNDARY'
    },
    VIEWS: {
        'ALL': 'ALL',
        'ADMIN': 'ADMIN',
        'BASIN': 'BASIN',
        'INDIA': 'INDIA',
        'COMBINED_BASIN': 'COMBINED_BASIN',
    },
    HIERARCHY: {
        'ADMIN_HIERARCHY': 'ADMIN_HIERARCHY'
    },
    SOURCES: {
        'ALL': 'ALL',
        'GEOSERVER': 'GEOSERVER',
        'BACKEND': 'BACKEND',
        'UI': 'UI',
        'BOONIDHI': 'BOONIDHI'
    },
    COMPONENT: {
        'PROCESSINGSTATUS': 'PROCESSING-STATUS',
        'USERLANDING': 'USER-LANDING',
        'CROPANALYTICS': 'CROPANALYTICS',
        'SATELLITEDATAPROCESSING': 'SATELLITE_DATA_PROCESSING',
        'BOUNDARYMANAGEMENT': 'BOUNDARY_MANAGEMENT',
        'PICTORIALANALYSIS': 'PICTORIAL_ANALYSIS',
        'CROPGROWTHANALYSIS': 'CROPGROWTHANALYSIS',
        'DROUGHT': 'DROUGHT',
        'PLOTADDITION': 'PLOTADDITION',
        'CROPSOWNINFO': 'CROPSOWNINFO',
        'UNIFIEDFARMERDATABASE': 'UNIFIEDFARMERDATABASE',
        'GROUNDTRUTH': 'GROUNDTRUTH',
        'PESTSTRESSMANAGEMENT': 'PESTSTRESSMANAGEMENT',
        'CROPSOWINGANDHARVESTINGCALENDAR': 'CROP_SOWING_AND_HARVESTING_CALENDAR'
    },
    PANE_LIST: [
        {
            name: 'elev',
            zindex: '10'
        },
        {
            name: 'subbasin',
            zindex: '150'
        },
        {
            name: 'bb-user-loaded-basemap',
            zindex: '300'
        },
        {
            name: 'base',
            zindex: '390'
        },
        {
            name: 'WA',
            zindex: '400'
        },
        {
            name: 'country',
            zindex: '400'
        },
        {
            name: 'state',
            zindex: '401'
        },
        {
            name: 'district',
            zindex: '402'
        },
        {
            name: 'mandal',
            zindex: '403'
        },
        {
            name: 'block',
            zindex: '403'
        },
        {
            name: 'heatMap',
            zindex: '400'
        },
        {
            name: 'farm',
            zindex: '450'
        },
        {
            name: 'village',
            zindex: '410'
        },
        {
            name: 'areaoffocus',
            zindex: '450'
        },
        {
            name: 'rivers',
            zindex: '500'
        },
        {
            name: 'marker',
            zindex: '600'
        },
        {
            name: 'popUp',
            zindex: '602'
        },
        {
            name: 'depth',
            zindex: '610'
        },
        {
            name: 'field-polygons',
            zindex: '700'
        },
        {
            name: 'popUpGeoJson',
            zindex: '801'
        },
        {
            name: 'mask',
            zindex: '700'
        },
        {
            name: 'names',
            zindex: '800'
        },
        {
            name: 'imagePoints',
            zindex: '850'
        },
        {
            name: 'max',
            zindex: '900'
        },
        {
            name: 'field-heat-map',
            zindex: '1200'
        }
    ],
    DASHBOARD_WISE_COMMON_LAYERS_KEY_MAPPING: {
        'cropAnalytics': 'ADMIN_LAYERS',
        'download': 'ADMIN_LAYERS',
        'processing': 'ADMIN_LAYERS',
        'indices-computation': 'ADMIN_LAYERS',
        'aggregation': 'ADMIN_LAYERS',
        'visualization': 'ADMIN_LAYERS',
        'supervised': 'ADMIN_LAYERS',
        'unsupervised': 'ADMIN_LAYERS',
        'contentManagement': 'ADMIN_LAYERS',
        'boundaryManagement': 'ADMIN_LAYERS',
        'pictorialAnalysis': 'ADMIN_LAYERS',
        'cropGrowthAnalysis': 'ADMIN_LAYERS',
        'drought': 'ADMIN_LAYERS',
        'plotAddition': 'ADMIN_LAYERS',
        'cropSownInfo': 'ADMIN_LAYERS',
        'unifiedFarmerDatabase': 'ADMIN_LAYERS',
        'groundTruth': 'ADMIN_LAYERS',
        'pest-stress-gis': 'ADMIN_LAYERS',
        'crop-sowing-and-harvesting-calendar': 'ADMIN_LAYERS',
        'cropSowingAndHarvesting': 'ADMIN_LAYERS'
    },
    // VECTOR LAYER COLORING IS CREATING ISSUE IF ZOOM SNAP AND ZOOM DELTA IS 0.25 SO, FOR THESE DASHBOARDS ZOOM DETLA AND SNAP SHOULD BE 1 AS WE ARE USING REDRAW() FEATURE OF VECTORTILE.
    UPDATE_ZOOMSNAP_ZOOMDETLA: ['pest-stress-gis', 'pictorialAnalysis', 'boundaryManagement']
}

export const LOCATIONS_LATLNG = {
    [AgricultureMapConstants.LOCATIONS.INDIA]: [22.5937, 78.9629],
};

export const LOCATIONS_ZOOM = {
    [AgricultureMapConstants.LOCATIONS.INDIA]: 5.25,
};

export const LOCATIONS_ZOOM_RANGE = {
    [AgricultureMapConstants.LOCATIONS.INDIA]: {
        MIN: 2,
        MAX: 22
    },
    [AgricultureMapConstants.LOCATIONS.STATE]: {
        MIN: 6,
        MAX: 18
    },
    [AgricultureMapConstants.LOCATIONS.DISTRICT]: {
        MIN: 6,
        MAX: 12
    },
    [AgricultureMapConstants.LOCATIONS.BLOCK]: {
        MIN: 10,
        MAX: 22
    },
    [AgricultureMapConstants.LOCATIONS.VILLAGE]: {
        MIN: 10,
        MAX: 18
    },
    [AgricultureMapConstants.LOCATIONS.CROP]: {
        MIN: 11,
        MAX: 22
    },
    [AgricultureMapConstants.LOCATIONS.FARM]: {
        MIN: 9,
        MAX: 22
    },
    [AgricultureMapConstants.LOCATIONS.USER_DEFINED]: {
        MIN: 6,
        MAX: 22
    }
};

export const LAYER_TYPES = {
    'TILE_LAYER': 'TILELAYER',
    'WMS_LAYER': 'WMS',
    'VECTOR_LAYER': 'VECTOR',
    'GEOJSON_LAYER': 'GEOJSON',
    'HEATMAP_LAYER': 'HEATMAP'
};

export const BASE_LAYER_LIST = {
    [LAYER_TYPES.TILE_LAYER]: [
        {
            name: 'Carto',
            displayName: 'Carto',
            layerServiceType: 'TILELAYER',
            type: 'Base',
            view: 'Admin',
            default_select: false,
            visible: false,
            url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
            imagesrc: './assets/imgs/maps/base-map.jpg',
            maxZoom: MAP_OPTIONS.maxZoom,
            class: 'card card-maps h-100'
        },
        {
            name: 'Google',
            displayName: 'Google Satellite',
            layerServiceType: 'TILELAYER',
            type: 'Base',
            view: 'Admin',
            default_select: false,
            imagesrc: './assets/imgs/maps/satellite.jpg',
            visible: true,
            url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
            maxZoom: MAP_OPTIONS.maxZoom,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            class: 'card card-maps h-100'
        },
        {
            name: 'Bing',
            displayName: 'Bing',
            layerServiceType: 'Base',
            type: 'Base',
            admin: 'Admin',
            imagesrc: './assets/imgs/maps/bing.png',
            visible: false,
            maxZoom: 22,
            class: 'card card-maps h-100 active',
            token: 'As6ObZ20ZW5SjiHkuUN8nm6WggsdAsLtI6C7IzOVG6TJrJNZLxvfsEtMxbKdSjIT', // This is a basic token generated from microsoft basemaps to get add bing base layer (TOKEN ACCOUNT REGISTERED: Vivesh Naren)
            subdomains: ['t0', 't1', 't2', 't3'],
            maxNativeZoom: 22
        }
    ],
};

export const COMMON_LAYER_LIST: any = {
    [AgricultureMapConstants.LOCATIONS.ALL]: {
        'India Grid': {
            source: 'INDIA',
            displayName: 'India Grid',
            name: 'India Grid',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:grid',
            layer_name: 'India Grid',
            layeroptions_pane: 'WA',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.INDIA].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.INDIA].MAX,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.WMS_LAYER,
            type: LAYER_TYPES.WMS_LAYER,
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL'
        },
    },
    [AgricultureMapConstants.LOCATIONS.ADMIN_LAYERS]: {
        'Country Boundary': {
            source: 'INDIA',
            displayName: 'India Boundaries',
            name: 'India Boundaries',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_india_boundary',
            layer_name: 'India Boundaries',
            layeroptions_pane: 'state',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MAX,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.GEOJSON_LAYER,
            type: LAYER_TYPES.GEOJSON_LAYER,
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            onEachFeature: 'handleAdminPolygons',
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
            layeroptions_protocol: 'WFS'
        },
        'State Boundary': {
            source: 'INDIA',
            displayName: 'State Boundary',
            name: 'State Boundary',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_states',
            layer_name: 'State Boundary',
            layeroptions_pane: 'state',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.STATE].MIN - 2,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.STATE].MAX,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.VECTOR_LAYER,
            type: LAYER_TYPES.VECTOR_LAYER,
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        },
        'District Boundary': {
            source: 'INDIA',
            displayName: 'District Boundary',
            name: 'District Boundary',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_districts',
            layer_name: 'District Boundary',
            layeroptions_pane: 'state',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.DISTRICT].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.DISTRICT].MAX,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.VECTOR_LAYER,
            type: LAYER_TYPES.VECTOR_LAYER,
            cql_filter_value: 'state_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL'
        },
        'Block Boundary': {
            source: 'INDIA',
            displayName: 'Block Boundary',
            name: 'Block Boundary',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_blocks',
            layer_name: 'Block Boundary',
            layeroptions_pane: 'district',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.BLOCK].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.BLOCK].MAX,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.VECTOR_LAYER,
            type: LAYER_TYPES.VECTOR_LAYER,
            cql_filter_value: 'district_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        },
        'Village Micada Boundary': {
            source: 'INDIA',
            displayName: 'Village Micada Boundary',
            name: 'Village Micada Boundary',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_village_micada',
            layer_name: 'Village Micada Boundary',
            layeroptions_pane: 'block',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MAX + 4,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.VECTOR_LAYER,
            type: LAYER_TYPES.VECTOR_LAYER,
            cql_filter_value: 'block_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        },
        'Village Boundary': {
            source: 'INDIA',
            displayName: 'Village Boundary',
            name: 'Village Boundary',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_villages',
            layer_name: 'Village Boundary',
            layeroptions_pane: 'block',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MAX + 4,
            group: 'boundaries',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.VECTOR_LAYER,
            type: LAYER_TYPES.VECTOR_LAYER,
            cql_filter_value: 'block_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        }
    },
    [AgricultureMapConstants.LOCATIONS.FARM]: {
        'Village Labels': {
            source: 'INDIA',
            displayName: 'Village Labels',
            name: 'Village Labels',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_villages',
            layer_name: 'Village Labels',
            layeroptions_pane: 'block',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MAX + 4,
            group: 'Labels',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.WMS_LAYER,
            type: LAYER_TYPES.WMS_LAYER,
            cql_filter_value: 'village_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        },
        'Village Micada Labels': {
            source: 'INDIA',
            displayName: 'Village Micada Labels',
            name: 'Village Micada Labels',
            visible: true,
            view: AgricultureMapConstants.VIEWS.ADMIN,
            dashboardView: AgricultureMapConstants.LOCATIONS.INDIA,
            layerptions_show_on_selector: false,
            layeroptions_name: 'krishidss:agri_all_india_village_micada',
            layer_name: 'Village Micada Labels',
            layeroptions_pane: 'depth',
            layeroptions_min_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MIN,
            layeroptions_max_zoom: LOCATIONS_ZOOM_RANGE[AgricultureMapConstants.LOCATIONS.VILLAGE].MAX + 4,
            group: 'Labels',
            group_type: 'radio-deselect',
            layerServiceType: LAYER_TYPES.WMS_LAYER,
            type: LAYER_TYPES.WMS_LAYER,
            cql_filter_value: 'village_uuid',
            cql_filter: null,
            layerFrom: AgricultureMapConstants.SOURCES.GEOSERVER,
            environment_server_url: 'KRISHI_DSS_GEOSERVER_URL',
        }
    }

}