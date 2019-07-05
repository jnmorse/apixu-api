"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ApixuAPI {
    constructor(key) {
        this.key = key;
        this.baseUrl = new URL('http://api.apixu.com/v1/');
        this.url = new URL(this.baseUrl.href);
        this.requestType = ApixuAPI.RequestType.Current;
    }
    query(requestType, query) {
        this.url = new URL(`${requestType}`, this.baseUrl);
        this.url.searchParams.set('key', this.key);
        const entries = Object.entries(query);
        entries.forEach(([name, value]) => {
            this.url.searchParams.set(name, value);
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.url.href);
            return response.data;
        });
    }
}
exports.ApixuAPI = ApixuAPI;
(function (ApixuAPI) {
    let Langauge;
    (function (Langauge) {
        Langauge["Arabic"] = "ar";
        Langauge["Bengali"] = "bn";
        Langauge["Bulgarian"] = "bg";
        Langauge["ChineseSimplified"] = "zh";
        Langauge["ChineseTraditional"] = "zh_tw";
        Langauge["Czech"] = "cs";
        Langauge["Danish"] = "da";
        Langauge["Dutch"] = "nl";
        Langauge["Finnish"] = "fi";
        Langauge["French"] = "fr";
        Langauge["German"] = "de";
        Langauge["GreeK"] = "el";
        Langauge["Hindi"] = "hi";
        Langauge["Hungarian"] = "hu";
        Langauge["Italian"] = "it";
        Langauge["Japanese"] = "ja";
        Langauge["Javanese"] = "jv";
        Langauge["Korean"] = "ko";
        Langauge["Mandarin"] = "zh_cmn";
        Langauge["Marathi"] = "mr";
        Langauge["Polish"] = "pl";
        Langauge["Portuguese"] = "pt";
        Langauge["Punjabi"] = "pa";
        Langauge["Romanian"] = "ro";
        Langauge["Russian"] = "ru";
        Langauge["Serbian"] = "sr";
        Langauge["Sinhalese"] = "si";
        Langauge["Slovak"] = "sk";
        Langauge["Spanish"] = "es";
        Langauge["Swedish"] = "sv";
        Langauge["Tamil"] = "ta";
        Langauge["Telugu"] = "te";
        Langauge["Turkish"] = "tr";
        Langauge["Ukrainian"] = "uk";
        Langauge["Urdu"] = "ur";
        Langauge["Vietnamese"] = "vi";
        Langauge["Wu"] = "zh_wuu";
        Langauge["Xiang"] = "zh_yue";
        Langauge["Zulu"] = "zu";
    })(Langauge = ApixuAPI.Langauge || (ApixuAPI.Langauge = {}));
    let RequestType;
    (function (RequestType) {
        RequestType["Forcast"] = "forecast.json";
        RequestType["Current"] = "current.json";
        RequestType["Search"] = "search.json";
        RequestType["History"] = "history.json";
    })(RequestType = ApixuAPI.RequestType || (ApixuAPI.RequestType = {}));
    let IsDay;
    (function (IsDay) {
        IsDay[IsDay["Yes"] = 0] = "Yes";
        IsDay[IsDay["No"] = 1] = "No";
    })(IsDay = ApixuAPI.IsDay || (ApixuAPI.IsDay = {}));
    let MoonPhase;
    (function (MoonPhase) {
        MoonPhase["NewMoon"] = "New Moon";
        MoonPhase["WaxingCresent"] = "Waxing Cresent";
        MoonPhase["FirstQuarter"] = "First Quarter";
        MoonPhase["WaxingGibbous"] = "Waxing Gibbous";
        MoonPhase["FullMoon"] = "Full Moon";
        MoonPhase["LastQuarter"] = "Last Quarter";
        MoonPhase["WaningCrescent"] = "Waning Crescent";
    })(MoonPhase = ApixuAPI.MoonPhase || (ApixuAPI.MoonPhase = {}));
})(ApixuAPI = exports.ApixuAPI || (exports.ApixuAPI = {}));
