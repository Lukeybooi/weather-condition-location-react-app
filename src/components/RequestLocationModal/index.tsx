import { FC } from "react";
import { TEST_LOCATION_MODAL_ID } from "../../constants";
import { ILocationModalProps } from "../../models";
import "./requestLocationMoal.css";

const BG_ID = "bg-modal";

const RequestLocationModal: FC<ILocationModalProps> = ({
  show,
  onAllow,
  onDeny,
}) => {
  const onToggleModal = () => {
    window.onclick = function (event) {
      if ((event.target as any).id === BG_ID) {
        onDeny();
      }
    };
  };

  return show ? (
    <div
      id={BG_ID}
      data-testid={TEST_LOCATION_MODAL_ID}
      className="modal"
      onClick={onToggleModal}
    >
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
