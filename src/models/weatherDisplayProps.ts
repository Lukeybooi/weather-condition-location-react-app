import { Weather } from ".";

export interface IWeatherDisplayProps {
  readonly data: Weather;
  readonly onRefresh: () => void;
}
