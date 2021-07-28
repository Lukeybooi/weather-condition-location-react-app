import { FC } from "react";
import { IErrorProps } from "../../models";
import Alert from "../Alert";

interface IProps {
  readonly errors: IErrorProps;
}

const ErrorAlert: FC<IProps> = ({ errors }) => {
  const err = Object.values(errors).filter(Boolean);

  return (
    <>
      {err.map((msg) => (
        <Alert key={msg} message={msg} type="error" theme="light" />
      ))}
    </>
  );
};

export default ErrorAlert;
