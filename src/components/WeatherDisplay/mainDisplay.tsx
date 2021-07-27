import { FC } from "react";
import { IWeatherDisplayProps } from ".";
import { divideBy } from "../../utils/app.utils";

const MainDisplay: FC<IWeatherDisplayProps> = ({ data, onRefresh }) => (
  <div className="display-main">
    <div className="display-name">
      <h1>
        {data.name}, {data?.sys?.country}
      </h1>
    </div>

    <div className="displate-temp">
      <h2>{data?.main?.temp} °C</h2>
      <h3>
        Feels like {data?.main?.feels_like} °C.{" "}
        {data?.weather?.[0]?.description}
      </h3>
      <h4>Humidity: {data?.main?.humidity} %</h4>
      <h4>Pressure: {data?.main?.pressure} hPa</h4>
      <h4>Wind: {data?.wind?.speed} meter/sec</h4>
      <h4>Visibility: {divideBy(data?.visibility, 1000)} km</h4>
    </div>
    <button className="button display-btn" onClick={onRefresh}>
      Refresh
    </button>
  </div>
);

export default MainDisplay;
