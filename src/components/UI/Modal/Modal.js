import React from 'react';

import './Modal.less';

const Modal = (props) => {
    return <div className={props.show ? 'modal-visible' : 'modal-hidden'}>
        {props.children}
    </div>;
}

export default Modal;