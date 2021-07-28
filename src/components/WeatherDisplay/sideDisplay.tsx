import { FC } from "react";
import { TEST_WEATHER_SIDE_DISPLAY_ID } from "../../constants";
import { ISideDisplayProps } from "../../models/sideDisplayProps";
import { divideBy } from "../../utils/app.utils";

const SideDisplay: FC<ISideDisplayProps> = ({ data }) => (
  <div data-testid={TEST_WEATHER_SIDE_DISPLAY_ID} className="side-display">
    <ul className="side-display-un-list">
      <li className="side-display-li-list">
        <div className="side-display-list-content-main">
          Today's Weather Condition
        </div>

        <div className="side-display-img">
          <img
            src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-25.png"
            alt="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-22.png"
            width={75}
            height={75}
          />
        </div>
      </li>

      <li className="side-display-li-list">
        <div className="side-display-list-content">
          Humidity: {data?.main?.humidity} %
        </div>
      </li>

      <li className="side-display-li-list">
        <div className="side-display-list-content">
          Pressure: {data?.main?.pressure} hPa
        </div>
      </li>

      <li className="side-display-li-list">
        <div className="side-display-list-content">
          Wind: {data?.wind?.speed} meter/sec
        </div>
      </li>

      <li className="side-display-li-list">
        <div className="side-display-list-content">
          Visibility: {divideBy(data?.visibility, 1000)} km
        </div>
      </li>
    </ul>
  </div>
);

export default SideDisplay;
