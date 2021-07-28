import { FC } from "react";
import { TEST_ALERT_ID } from "../../constants";
import { IAlertProps } from "../../models";
import "./alert.css";

const Alert: FC<IAlertProps> = ({ message, type, theme = "dark" }) => (
  <div
    data-testid={TEST_ALERT_ID}
    className={`alert-main alert-main-${type} alert-main-${theme}`}
  >
    {message}
  </div>
);

export default Alert;
