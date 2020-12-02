import React, {useState} from 'react';
import styles from './InfoButton.module.css';
import Modal from '../Modal/Modal';

function InfoButton() {
    const [show, setShow] = useState(false);

    const closeModalHandle = () => setShow(false);
    return (
        <div className={styles}>
            <button onClick={() => setShow(true)}>open modal</button>
            <Modal show={show} closeModalHandle={closeModalHandle}/>
        </div>
    )
}

export default InfoButton
