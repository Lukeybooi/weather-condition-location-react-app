import { FC } from "react";
import { IWeatherDisplayProps } from ".";
import { capitalize } from "../../utils/app.utils";

const MainDisplay: FC<IWeatherDisplayProps> = ({ data, onRefresh }) => (
  <div className="main-display">
    <div className="main-display-title">
      <div>
        {data.name}, {data?.sys?.country}
      </div>

      <div className="main-display-img">
        <img
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          alt="https://static.thenounproject.com/png/967229-200.png"
          width={40}
          height={40}
        />
      </div>
    </div>

    <button className="main-display-btn" onClick={onRefresh}>
      Reload Weather Results
    </button>

    <div className="main-display-temperature">
      <span className="main-display-meta-data">Current</span>
      <div className="main-display-bold">
        {data?.main?.temp} <sup>°C</sup>
      </div>

      <div className="main-display-description">
        {capitalize(data?.weather?.[0]?.description as string)}
      </div>

      <span className="main-display-meta-data">Feels like</span>

      <div className="main-display-bold">
        {data?.main?.feels_like} <sup>°C</sup>
      </div>
    </div>
  </div>
);

export default MainDisplay;
