import { IErrorProps } from "./errorProps";
import { Weather } from "./weather";

export interface IStateProps {
  readonly showRequest: boolean;
  readonly data?: Weather;
  readonly loading: boolean;
  readonly isDenied: boolean;
  readonly error: IErrorProps;
}
