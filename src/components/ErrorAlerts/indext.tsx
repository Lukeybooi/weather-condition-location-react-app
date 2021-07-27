import { FC } from "react";
import { Alert } from "reactstrap";
import { IErrorProps } from "../../utils/app.utils";

interface IProps {
  readonly errors: IErrorProps;
}

const ErrorAlert: FC<IProps> = ({ errors }) => {
  const err = Object.values(errors).filter(Boolean);

  return (
    <>
      {err.map((msg) => (
        <Alert key={msg} color="danger">
          {msg}
        </Alert>
      ))}
    </>
  );
};

export default ErrorAlert;
