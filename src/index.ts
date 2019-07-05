import express, { Request, Response } from 'express';
import 'dotenv/config';

import { ApixuAPI } from './apixu-api';

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.APIXU_KEY || '';

const apixu = new ApixuAPI(API_KEY);

const app = express();

app.use([express.urlencoded({ extended: true }), express.json()]);

app.get(
  '/api/weather/current',
  (req: Request, res: Response): void => {
    apixu.query(ApixuAPI.RequestType.Current, req.query);

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
  }
);

app.get(
  '/api/weather/forcast',
  async (req: Request, res: Response): Promise<void> => {
    try {
      apixu.query(ApixuAPI.RequestType.Forcast, req.query);

      const search = await apixu.search();

      if (search.forecast) {
        console.log(search.forecast.forecastday);
      }

      res.status(200).json(search);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('failed');
    } finally {
      console.log('request finished');
    }
  }
);

app.get(
  '*',
  (req: Request, res: Response): void => {
    res.status(404).send("Route doesn't exist");
  }
);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}/`);
});
