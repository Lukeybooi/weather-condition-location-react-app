import { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Weather } from "../../models/weather";

interface IProps {
  readonly data: Weather;
  readonly onRefresh: () => void;
}

const WeatherDisplay: FC<IProps> = ({ data, onRefresh }) => (
  <Card>
    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Card title</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        <p>
          Feels like {data?.main?.feels_like}°C.{" "}
          {data?.weather?.[0]?.description}. {data?.weather?.[0]?.main}
        </p>
      </CardSubtitle>
      <CardText>
        <p>Humidity: {data?.main?.humidity} %</p>

        <p>Pressure: {data?.weather?.[0]?.description} hPa</p>

        <p>Visibility: {data?.visibility / 1000} km</p>

        <p>Wind: {data?.wind?.speed} meter/sec</p>
      </CardText>
      <Button onClick={onRefresh}>Refresh</Button>
    </CardBody>
  </Card>
);

export default WeatherDisplay;
