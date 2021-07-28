import { FC } from "react";
import { Weather } from "../../models/weather";
import MainDisplay from "./mainDisplay";
import SideDisplay from "./sideDisplay";
import "./style.css";

export interface IWeatherDisplayProps {
  readonly data: Weather;
  readonly onRefresh: () => void;
}

const WeatherDisplay: FC<IWeatherDisplayProps> = ({ data, onRefresh }) => (
  <div className="container">
    <div className="main-layout">
      <MainDisplay data={data} onRefresh={onRefresh} />
      <SideDisplay data={data} />
    </div>
  </div>
);

export default WeatherDisplay;
