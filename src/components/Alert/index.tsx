import { FC, ReactNode } from "react";
import "./style.css";

type AlertType = "info" | "success" | "error" | "warning";

type ThemeType = "dark" | "light";

interface IProps {
  readonly message: string | ReactNode;
  readonly type: AlertType;
  readonly theme?: ThemeType;
}

const Alert: FC<IProps> = ({ message, type, theme = "dark" }) => (
  <div className={`alert-main alert-main-${type} alert-main-${theme}`}>
    {message}
  </div>
);

export default Alert;
