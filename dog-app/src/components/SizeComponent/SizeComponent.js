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
                        XS (1 - 7kg)
                    </Button>
                </NavLink>
                <NavLink exact to ="/smallSize">
                    <Button>
                        S (5 - 14kg)
                    </Button>
                </NavLink>
                <NavLink exact to ="/mediumSize">
                    <Button>
                        M (15 - 27kg)
                    </Button>
                </NavLink>
                <NavLink exact to ="/largeSize">
                    <Button>
                        L (20 - 59kg)
                    </Button>
                </NavLink>
                <NavLink exact to ="/giantSize">
                    <Button>
                        XL (34 - 90kg)
                    </Button>
                </NavLink>
        </div>
    )
}

export default SizeComponent;
