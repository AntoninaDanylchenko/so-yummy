import { Overlay } from 'components/Header/Modal/Modal.styled';
import React from 'react';

export class BaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  onClose = e => {
    if (e.target === this.containerRef.current) {
      this.props.onRequestClose();
    }
  };

  render() {
    const { onRequestClose, children, ...restProps } = this.props;
    return (
      <Overlay {...restProps} onClick={this.onClose} ref={this.containerRef}>
        <div> {children}</div>
      </Overlay>
    );
  }
}
