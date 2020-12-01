import React from 'react'
import styles from './Button.module.css';

import dogImage from '../../assets/images/dog.png';

const Button = ({children, href}) => {
    return (
    <a href={href} className={styles.button}>
        <img src={dogImage} alt="button" className={styles.buttonImage}/>
        {children}
    </a>
    )
}

export default Button

