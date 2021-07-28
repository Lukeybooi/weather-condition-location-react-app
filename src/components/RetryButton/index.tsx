import { FC } from "react";
import { DENY_ERR_MSG, TEST_RETRY_BTN_ID } from "../../constants";
import { IRetryOptionProps } from "../../models";
import Alert from "../Alert";
import "./retryButton.css";

const RetryButton: FC<IRetryOptionProps> = ({ onClick }) => (
  <div data-testid={TEST_RETRY_BTN_ID} className="container">
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
