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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const apixu_1 = require("./apixu");
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.APIXU_KEY || '';
const apixu = new apixu_1.ApixuAPI(API_KEY);
const app = express_1.default();
app.use([express_1.default.urlencoded({ extended: true }), express_1.default.json()]);
app.get('/api/weather/current', (req, res) => {
    apixu.query(apixu_1.ApixuAPI.RequestType.Current, req.query);
    const search = apixu.search();
    search
        .then(data => {
        res.status(200).json(data);
    })
        .catch(error => {
        res.status(500).send('something went wrong');
        console.log(error.message);
    })
        .finally(() => console.log('request finished'));
});
app.get('/api/weather/forcast', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        apixu.query(apixu_1.ApixuAPI.RequestType.Forcast, req.query);
        const search = yield apixu.search();
        if (search.forecast) {
            console.log(search.forecast.forecastday);
        }
        res.status(200).json(search);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send('failed');
    }
    finally {
        console.log('request finished');
    }
}));
app.get('*', (req, res) => {
    res.status(404).send("Route doesn't exist");
});
app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}/`);
});
