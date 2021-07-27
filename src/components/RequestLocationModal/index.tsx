import { FC } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface IProps {
  readonly show: boolean;
  readonly onAllow: () => void;
  readonly onDeny: () => void;
  readonly onToggle: () => void;
}

const RequestLocationModal: FC<IProps> = ({
  show,
  onAllow,
  onDeny,
  onToggle,
}) => (
  <Modal isOpen={show} toggle={onToggle}>
    <ModalHeader toggle={onToggle}>Allow Access to Location</ModalHeader>
    <ModalBody>
      The application would like to get your current location, to process click
      Allow and then allow again on the browser.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onAllow}>
        Allow
      </Button>
      <Button color="secondary" onClick={onDeny}>
        Deny
      </Button>
    </ModalFooter>
  </Modal>
);

export default RequestLocationModal;
