import { FC } from "react";
import { Weather } from "../../models/weather";
import MainDisplay from "./mainDisplay";
import "./style.css";

export interface IWeatherDisplayProps {
  readonly data: Weather;
  readonly onRefresh: () => void;
}

const WeatherDisplay: FC<IWeatherDisplayProps> = ({ data, onRefresh }) => (
  <div className="container">
    <div className="display-wrapper">
      <MainDisplay data={data} onRefresh={onRefresh} />
      <img
        src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
        alt="https://static.thenounproject.com/png/967229-200.png"
        width={100}
        height={100}
      />
    </div>
  </div>
);

export default WeatherDisplay;
