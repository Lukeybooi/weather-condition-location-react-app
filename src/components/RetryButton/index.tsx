import { FC } from "react";
import { DENY_ERR_MSG } from "../../constants";
import Alert from "../Alert";
import "./style.css";

interface IProps {
  readonly onClick: () => void;
}

const RetryButton: FC<IProps> = ({ onClick }) => (
  <div className="container">
    <div className="main-layout">
      <div className="retry-main">
        <Alert message={DENY_ERR_MSG} type="warning" />
        <div className="retry-btn">
          <button onClick={onClick}>Reload Data</button>
        </div>
      </div>
    </div>
  </div>
);

export default RetryButton;
