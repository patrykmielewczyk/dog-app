import React from 'react';
import Button from '../Button/Button';
import {NavLink} from 'react-router-dom';
import styles from './SizeComponent.module.css';

function SizeComponent() {
    return (
        <div className={styles.wrapper}>
            <h1>Select size:</h1>
                <NavLink exact to ="/miniatureSize">
                    <Button>
                        XS
                    </Button>
                </NavLink>
                <NavLink exact to ="/smallSize">
                    <Button>
                        S
                    </Button>
                </NavLink>
                <NavLink exact to ="/mediumSize">
                    <Button>
                        M
                    </Button>
                </NavLink>
                <NavLink exact to ="/largeSize">
                    <Button>
                        L
                    </Button>
                </NavLink>
                <NavLink exact to ="/giantSize">
                    <Button>
                        XL
                    </Button>
                </NavLink>
        </div>
    )
}

export default SizeComponent;
