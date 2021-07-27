import { FC } from "react";
import "./style.css";

interface IProps {
  readonly show: boolean;
  readonly onAllow: () => void;
  readonly onDeny: () => void;
}

const BG_ID = "bg-modal";

const RequestLocationModal: FC<IProps> = ({ show, onAllow, onDeny }) => {
  const onToggleModal = () => {
    window.onclick = function (event) {
      if ((event.target as any).id === BG_ID) {
        onDeny();
      }
    };
  };

  return show ? (
    <div id={BG_ID} className="modal" onClick={onToggleModal}>
      <div className="modal-content">
        <span className="modal-close" onClick={onDeny}>
          &times;
        </span>
        <div className="modal-title">Allow Access to Location</div>
        <div className="modal-icon">
          <input
            type="image"
            src="https://www.freeiconspng.com/thumbs/address-icon/map-location-address-flat-icons--free-flat-icons--all-shapes--12.png"
            alt="https://image.flaticon.com/icons/png/128/2948/2948253.png"
            width={50}
            height={50}
          />
        </div>
        <div className="modal-main-text">
          The application would like to get your current location, to process
          click Allow and then allow again on the browser.
        </div>
        <div className="modal-button-section">
          <button className="btn-allow" onClick={onAllow}>
            Allow
          </button>
          <button className="btn-deny" onClick={onDeny}>
            Deny
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default RequestLocationModal;
