import React from 'react';
import styles from './Modal.module.css';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';

function Modal( { open, onClose, children } ) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className={styles.overlay}/>
        <div className={styles.wrapper}>
            <button onClick={onClose}>close Modal</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
