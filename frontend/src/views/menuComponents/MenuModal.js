import React from "react";
import { Modal, Button } from "react-bootstrap";

class MenuModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: this.props.open,
      modalHide: this.props.hide,
    };
  }
  render() {
    return (
      <Modal show={this.state.modalState} onHide={this.state.modalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MenuModal;
