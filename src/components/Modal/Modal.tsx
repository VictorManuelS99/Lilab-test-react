import { Component } from "react";
import { StyledModal } from "./Modal.style";

type PropsModal = { isOpen: boolean };

export class Modal extends Component<PropsModal> {
  render() {
    const { isOpen } = this.props;

    return <StyledModal isOpen={isOpen}>{this.props.children}</StyledModal>;
  }
}
