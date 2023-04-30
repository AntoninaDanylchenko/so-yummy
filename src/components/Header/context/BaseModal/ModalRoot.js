import React from 'react';

import { ModalConsumer } from '../modal';

export const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, hideModal }) =>
      Component ? <Component {...props} onRequestClose={hideModal} /> : null
    }
  </ModalConsumer>
);
