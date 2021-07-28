import { FC } from "react";
import { TEST_WEATHER_DISPLAY_ID } from "../../constants";
import { IWeatherDisplayProps } from "../../models";
import MainDisplay from "./mainDisplay";
import SideDisplay from "./sideDisplay";
import "./weatherDisplay.css";

const WeatherDisplay: FC<IWeatherDisplayProps> = ({ data, onRefresh }) => (
  <div data-testid={TEST_WEATHER_DISPLAY_ID} className="container">
    <div className="main-layout">
      <MainDisplay data={data} onRefresh={onRefresh} />
      <SideDisplay data={data} />
    </div>
  </div>
);

export default WeatherDisplay;
