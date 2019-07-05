export declare class ApixuAPI {
    private key;
    private baseUrl;
    private url;
    requestType: ApixuAPI.RequestType;
    constructor(key: string);
    query(requestType: ApixuAPI.RequestType, query: ApixuAPI.Query): void;
    search(): Promise<ApixuAPI.Response>;
}
export declare namespace ApixuAPI {
    interface StandardQuery {
        q: string;
        days?: number;
        hour?: number;
        lang?: Langauge;
    }
    enum Langauge {
        Arabic = "ar",
        Bengali = "bn",
        Bulgarian = "bg",
        ChineseSimplified = "zh",
        ChineseTraditional = "zh_tw",
        Czech = "cs",
        Danish = "da",
        Dutch = "nl",
        Finnish = "fi",
        French = "fr",
        German = "de",
        GreeK = "el",
        Hindi = "hi",
        Hungarian = "hu",
        Italian = "it",
        Japanese = "ja",
        Javanese = "jv",
        Korean = "ko",
        Mandarin = "zh_cmn",
        Marathi = "mr",
        Polish = "pl",
        Portuguese = "pt",
        Punjabi = "pa",
        Romanian = "ro",
        Russian = "ru",
        Serbian = "sr",
        Sinhalese = "si",
        Slovak = "sk",
        Spanish = "es",
        Swedish = "sv",
        Tamil = "ta",
        Telugu = "te",
        Turkish = "tr",
        Ukrainian = "uk",
        Urdu = "ur",
        Vietnamese = "vi",
        Wu = "zh_wuu",
        Xiang = "zh_yue",
        Zulu = "zu"
    }
    interface QueryWithDT extends StandardQuery {
        dt: number;
        end_dt?: number;
    }
    interface QueryWithUnixDT extends StandardQuery {
        unix_dt: number;
        unixend_dt?: number;
    }
    type Query = StandardQuery | QueryWithDT | QueryWithUnixDT;
    enum RequestType {
        Forcast = "forecast.json",
        Current = "current.json",
        Search = "search.json",
        History = "history.json"
    }
    interface Condition {
        text: string;
        icon: string;
        code: number;
    }
    enum IsDay {
        Yes = 0,
        No = 1
    }
    interface Location {
        lat: number;
        lon: number;
        name: string;
        region: string;
        country: string;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    }
    interface Current {
        last_updated: string;
        last_updated_epoch: number;
        temp_c: number;
        temp_f: number;
        feelslike_c: number;
        feelslike_f: number;
        condition: Condition;
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        pressure_mb: number;
        pressure_in: number;
        pressure_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        is_day: IsDay;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    }
    interface Response {
        location: Location;
        current: Current;
        forecast?: Forecast;
    }
    interface Day {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        condition: Condition;
        uv: number;
    }
    enum MoonPhase {
        NewMoon = "New Moon",
        WaxingCresent = "Waxing Cresent",
        FirstQuarter = "First Quarter",
        WaxingGibbous = "Waxing Gibbous",
        FullMoon = "Full Moon",
        LastQuarter = "Last Quarter",
        WaningCrescent = "Waning Crescent"
    }
    interface Astro {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: MoonPhase;
        moon_illumination: number;
    }
    interface ForecastDay {
        date: string;
        date_epoch: number;
        day: Day;
        astro: Astro;
    }
    interface Forecast {
        forecastday: ForecastDay[];
    }
}
