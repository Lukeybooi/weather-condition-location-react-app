import { Weather } from "../models/weather";

export interface IStateProps {
  readonly showRequest: boolean;
  readonly data?: Weather;
  readonly loading: boolean;
  readonly isDenied: boolean;
  readonly error: IErrorProps;
}

export interface IErrorProps {
  readonly generalError?: string | null;
  readonly locationError?: string | null;
  readonly callError?: string | null;
}

export const INIT_STATE: IStateProps = {
  showRequest: true,
  loading: false,
  isDenied: false,
  error: {},
};

export const BLOCK_LOCATION_ERR_MSG =
  "Unable to get geolocation, you may have blocked the permission. Please try and reset the grant permission for the location.";

export const CALL_ERR_MSG =
  "Something went wrong while trying to fetch the data.";

export const GENERAL_ERROR =
  "Oops! Something went wrong, please try again or contact an administrator.";

export const LOCATION_ERR_MSG =
  "Unable to get geolocation, please try again later.";
