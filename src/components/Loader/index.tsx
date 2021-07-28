import { FC } from "react";
import "./style.css";

interface IProps {
  readonly loading: boolean;
}

const CustomLoader: JSX.Element = (
  <div className="loader">
    <div className="loading-container" />
  </div>
);

const Loader: FC<IProps> = ({ children, loading }) =>
  loading ? CustomLoader : <>{children}</>;

export default Loader;
