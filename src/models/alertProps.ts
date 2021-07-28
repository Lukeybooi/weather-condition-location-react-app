import { ReactNode } from "react";

export type AlertType = "info" | "success" | "error" | "warning";

export type ThemeType = "dark" | "light";

export interface IAlertProps {
  readonly message: string | ReactNode;
  readonly type: AlertType;
  readonly theme?: ThemeType;
}
