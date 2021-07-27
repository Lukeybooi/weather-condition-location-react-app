import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import ErrorAlert from "./components/ErrorAlerts/indext";
import Loader from "./components/Loader";
import RequestLocationModal from "./components/RequestLocationModal";
import WeatherDisplay from "./components/WeatherDisplay";
import { WEATHER_URL } from "./constants";
import { Weather } from "./models/weather";
import {
  BLOCK_LOCATION_ERR_MSG,
  CALL_ERR_MSG,
  GENERAL_ERROR,
  IErrorProps,
  INIT_STATE,
  LOCATION_ERR_MSG,
} from "./utils/app.utils";

const API_KEY = process.env.REACT_APP_API_KEY;
const PATH = "/data/2.5/weather";

const App = () => {
  const [state, setState] = useState(INIT_STATE);

  const { showRequest, data, loading, isDenied, error } = state;

  //#region Functions
  // GET Geolocation from Navigator object
  const onFindLocation = () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          onLocationSuccess,
          onLocationError
        );
      } else {
        setError("locationError", LOCATION_ERR_MSG);
      }
    } catch (_error) {
      setError("generalError", GENERAL_ERROR);
    }
  };

  // GET Latitude & Longitude if it's Successful from Navigator
  const onLocationSuccess = ({ coords: { latitude, longitude } }: any) =>
    onGetWeather(latitude, longitude);

  // SET Error if it's Unsuccessful from Navigator
  const onLocationError = () =>
    setError("locationError", BLOCK_LOCATION_ERR_MSG);

  // CALL (Openweathermap) Api with Axios
  const onGetWeather = (lat: number, lon: number) => {
    if (typeof lat === "number" && typeof lon === "number") {
      const weatherApiInstance = axios.create({ baseURL: WEATHER_URL });

      setState((s) => ({ ...s, loading: true, showRequest: false }));

      weatherApiInstance
        .get<Weather>(
          `${PATH}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        )
        .then(onDataReceived)
        .catch(onDataError);
    } else {
      setError("locationError", BLOCK_LOCATION_ERR_MSG);
    }
  };

  // GET/SET Data if it's Successful from Axios, Stop Loading, Unset All Errors
  const onDataReceived = ({ data }: AxiosResponse<Weather>) =>
    setState((s) => ({
      ...s,
      data,
      loading: false,
      error: {},
      isDenied: false,
    }));

  // SET Error if it's Unsuccessful from Axios, Stop Loading
  const onDataError = (err: AxiosError) =>
    setState((s) => ({
      ...s,
      loading: false,
      error: {
        ...s.error,
        callError: err?.response?.data?.message || CALL_ERR_MSG,
      },
    }));

  // SET Deny Event on Modal
  const onDeny = () =>
    setState((s) => ({
      ...s,
      showRequest: false,
      isDenied: true,
    }));

  // GENERAL Error Function
  const setError = (key: keyof IErrorProps, message: string) =>
    setState((s) => ({
      ...s,
      error: { ...s.error, [key]: message },
      showRequest: false,
    }));

  //#endregion

  return (
    <Loader loading={loading}>
      <ErrorAlert errors={error} />

      <RequestLocationModal
        show={showRequest}
        onAllow={onFindLocation}
        onDeny={onDeny}
      />

      {data && <WeatherDisplay data={data} onRefresh={onFindLocation} />}
      {isDenied && !data && (
        <button className="button" onClick={onFindLocation}>
          Refresh
        </button>
      )}
    </Loader>
  );
};

export default App;
