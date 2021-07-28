import { FC } from "react";
import { TEST_LOADER_ID } from "../../constants";
import { ILoaderProps } from "../../models";
import "./loader.css";

const CustomLoader: JSX.Element = (
  <div data-testid={TEST_LOADER_ID} className="loader">
    <div className="loading-container" />
  </div>
);

const Loader: FC<ILoaderProps> = ({ children, loading }) =>
  loading ? CustomLoader : <>{children}</>;

export default Loader;
