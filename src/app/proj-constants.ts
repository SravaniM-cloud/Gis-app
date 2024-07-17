export const AgriProjConstants: any = {
    HIE_ORDER: {
        'COUNTRY': 'COUNTRY',
        'STATE': 'STATE',
        'DISTRICT': 'DISTRICT',
        'BLOCK': 'BLOCK',
        'VILLAGE': 'VILLAGE',
        'FARM': 'FARM'
    },
    LOCATION_FILTER_HIE: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VILLAGE', 'FARM'],
    BREADCRUMB_HIE: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VLLAGE'],
    ADMIN_BOUNDARIES_HIE: ['STATE', 'DISTRICT', 'BLOCK', 'VILLAGE', 'FARM'],
    DROUGHT_BOUNDARY_HIE: ['STATE', 'DISTRICT', 'BLOCK', 'VILLAGE', 'FARM'],
    BOUNDARY_MANAGEMENT_ADMIN_BOUNDARIES_HIE: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VILLAGE', 'FARM'],
    MICADA_HIE: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VILLAGE_MICADA', 'FARM'],
    CROP_LIBRARY_MANAGEMENT: {
        CROP_NAME_HIE: ['All', 'CROP', 'STAGES']
    },
    PROJ_DETAILS: {
        'AGRIWISE': {
            projName: 'AGRIWISE',
            projUUID: 'fdb83be9-8034-4b8e-9037-35f0802605dd',
            hie: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VILLAGE', 'FARM'],
            layerNamesMap: {
                'COUNTRY': 'krishidss:agri_india_boundary',
                'STATE': 'krishidss:agri_all_india_states',
                'DISTRICT': 'krishidss:agri_all_india_districts',
                'BLOCK': 'krishidss:agri_all_india_blocks',
                'VILLAGE': 'krishidss:agri_all_india_villages'
            }
        },
        'MICADA': {
            projName: 'MICADA',
            projUUID: 'd6b37905-d2d3-4275-9317-d9b6f47cd783',
            hie: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'VILLAGE_MICADA', 'FARM'],
            layerNamesMap: {
                'COUNTRY': 'krishidss:agri_india_boundary',
                'STATE': 'krishidss:agri_all_india_states',
                'DISTRICT': 'krishidss:agri_all_india_districts',
                'BLOCK': 'krishidss:agri_all_india_blocks',
                'VILLAGE': 'krishidss:agri_all_india_village_micada'
            }
        },
        // 'KERALA_KRISHIDSS': {
        //     projName: 'KERALA_KRISHIDSS',
        //     projUUID: '489043ad-4ed5-429d-9c81-64c14a40e38b',
        //     hie: ['COUNTRY', 'STATE', 'DISTRICT', 'BLOCK', 'PANCHAYAT', 'VILLAGE'],
        //     layerNamesMap: {
        //         'COUNTRY': 'krishidss:agri_india_boundary',
        //         'STATE': 'krishidss:agri_all_india_states',
        //         'DISTRICT': 'krishidss:agri_all_india_districts',
        //         'BLOCK': 'krishidss:agri_all_india_blocks',
        //         'VILLAGE': 'krishidss:agri_all_india_villages'
        //     }
        // }
    },
    GEOSERVER_WORKSPACES: {
        'KRISHIDSS': 'krishidss'
    },
    DOWNLOAD_URLs: {
        'PRE': 'ows?service=WFS&version=1.0.0&request=GetFeature&typeName=',
        'POST': '&maxFeatures=5000000&outputFormat=SHAPE-ZIP'
    },
    VIEWS: {
        'ADMIN': 'ADMIN',
        'BASIN': 'BASIN'
    },
    COMMON_APIS_MAPPING: {
        'COMM_GETLOCTYPES': 'api/comm/getLocTypes'
    },
    SRC_UUID: {
        'DEFAULT': '19b2f145-3e52-4c48-a1c5-0ded52369cfa'
    },
    COUNTRY_UUID_MAPPING: {
        'INDIA': 'd6b37905-d2d3-4275-9317-d9b6f47cd783'
    },
    COUNTRY_WISE_UUID_MAPPING: [
        {
            locName: 'India',
            locUUID: 'd6b37905-d2d3-4275-9317-d9b6f47cd783'
        }
    ],
    ENTITY_TYPES: {
        'AGRO_CLIMATIC_ZONE': 'AGRO_CLIMATIC_ZONE'
    }
}