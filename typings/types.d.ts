import {Data} from './data';
import {Images} from './images';
import {Languages} from './languages';

export * from './data';
export * from './images';
export * from './languages';

export declare const country: Countries;
export declare const data: Data;
export declare const imageDataX384: Images;
export declare const imageData: Images;
export declare const imageBaseUrl: string;
export declare const imageBaseUrlDev: string;
export declare const languages: Languages;
export declare const network: Network;
export declare const networkPreClient: Network;

///region Country
export interface Countries {
    versionNo: number,
    deployTime: number,
    AR: Country,
    ARAB: Country,
    ASIA: Country,
    AU: Country,
    BR: Country,
    CN: Country,
    DE: Country,
    DK: Country,
    ES: Country,
    FI: Country,
    FR: Country,
    GB: Country,
    GR: Country,
    HISP: Country,
    ID: Country,
    IN: Country,
    IT: Country,
    JP: Country,
    KR: Country,
    MX: Country,
    NL: Country,
    NO: Country,
    PH: Country,
    PL: Country,
    PT: Country,
    RU: Country,
    SE: Country,
    TR: Country,
    US: Country,
    XX: Country,
    AE: Country,
    HANT: Country,
}

export interface Country {
    default?: 0 | 1,
    country: string,
    lang: string,
    flashCode: string,
    timezoneStart: number,
    timezoneEnd: number,
    browserCodes: string,
    geoIpCodes: string,
    np: string,
}

///endregion

///region Network
export interface Network {
    versionNo: number,
    deployTime: number,
    is_approval: boolean,
    instances: NetworkInstance[],
    "test-instances": NetworkInstance[],
    general: {
        defaultinstance: number,
        allowedfullscreen: boolean,
        networkname: string,
        usekeybaselogin: boolean,
        networkbuddies: boolean,
        enablefeedmessages: boolean,
        enablelonelycow: boolean,
        requestpaybyjs: boolean,
        earncredits: number,
        useexternallinks: boolean,
        invitefriends: boolean,
        maxusernamelength: number,
        usepayment: boolean,
        showversion: boolean,
        replaceUrlPatternForWebSocket: boolean,
        useWebSocket: boolean,
        webSocketProtocol: string
    }
}

export interface NetworkInstance {
    value: number,
    server: string,
    port: number,
    zone: string
    zoneId: number,
    instanceName: number,
    isFavorite: 0 | 1,
    instanceLocaId: string,
    isPriority: 0 | 1,
    isInternational: 0 | 1,
    countries: string[],
    defaultcountry?: string,
}

///endregion