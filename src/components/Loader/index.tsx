import { FC } from "react";
import { Spinner } from "reactstrap";

interface IProps {
  readonly loading: boolean;
}

const Loader: FC<IProps> = ({ children, loading }) =>
  loading ? (
    <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
  ) : (
    <>{children}</>
  );

export default Loader;
