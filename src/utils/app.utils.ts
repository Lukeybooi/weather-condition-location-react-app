import { IStateProps, Weather } from "../models";

export const DUMMY_WEATHER_DATA: Weather = {
  coord: { lon: 28.0473, lat: 26.2041 },
  weather: [
    { id: 802, main: "Clouds", description: "scattered clouds", icon: "03n" },
  ],
  base: "stations",
  main: {
    temp: 27.94,
    feels_like: 26.73,
    temp_min: 27.94,
    temp_max: 27.94,
    pressure: 1010,
    humidity: 21,
    sea_level: 1010,
    grnd_level: 963,
  },
  visibility: 10000,
  wind: { speed: 4.13, deg: 3, gust: 4.54 },
  clouds: { all: 33 },
  dt: 1627505996,
  sys: { country: "EG", sunrise: 1627443077, sunset: 1627491425 },
  timezone: 7200,
  id: 350661,
  name: "Qaşr al Farāfirah",
  cod: 200,
};

export const INIT_STATE: IStateProps = {
  showRequest: true,
  loading: false,
  isDenied: false,
  error: {},
};

export const BLOCK_LOCATION_ERR_MSG =
  "Unable to get geolocation, you may have blocked the permission. Please try and reset the grant permission for the location.";

export const CALL_ERR_MSG =
  "Something went wrong while trying to fetch the data.";

export const GENERAL_ERROR =
  "Oops! Something went wrong, please try again or contact an administrator.";

export const LOCATION_ERR_MSG =
  "Unable to get geolocation, please try again later.";

export const capitalize = (str: string) => {
  if (!str) return "";
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export const divideBy = (num: number | string, divisibleBy: number) => {
  try {
    let value = 0;

    if (typeof num === "number") {
      value = num;
    } else if (typeof num === "string") {
      value = parseInt(num);
    }

    const division = (value / divisibleBy).toFixed(2);

    return isNaN(parseInt(division)) ? 0 : parseFloat(division);
  } catch (error) {
    return 0;
  }
};
