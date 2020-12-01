import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, closeModalHandle }) => {
    return (
        <div className={styles.wrapper}
        style={{
            opacity: show ? '1' : '0'
        }}
        >
            <div className={styles.header}>
                <p>Hello im modal hiehie</p>
                <span className={styles.topClose} onClick={closeModalHandle}>x</span>
            </div>
            <div className={styles.content}>
                <div className={styles.body}>
                    <h4>Modal</h4>
                    <p>cosdadasda</p>
                </div>
                <div className={styles.footer}>
                    <button onClick={closeModalHandle} className={styles.close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

