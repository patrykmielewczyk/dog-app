import React, {useState} from 'react';
import Modal from '../Modal/Modal';

function ModalHandler( {children} ) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={()=> setIsOpen(true)}>Open Modal</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                {children}
            </Modal>
        </div>
    )
}

export default ModalHandler
