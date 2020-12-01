import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';

class MediumSizeView extends React.Component {
    render() {
        const { mediumDogs } = this.props;
        const DogList = (mediumDogs) => (
            <a href="#">
            <li>
                <p>{mediumDogs.name}</p>
                <p>{mediumDogs.weight_min}</p>
                <p>{mediumDogs.weight_max}</p>
                <p>{mediumDogs.diet}</p>
            </li>
            </a>
        );
        return (
            <ul>
                {mediumDogs.map(({name, weight_min, weight_max, diet}) => 
                    <DogList
                        name={name}
                        weight_min={weight_min}
                        weight_max={weight_max}
                        diet={diet}
                    />
                )}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        mediumDogs: state.mediumDogs
    }
}

export default connect(mapStateToProps) (MediumSizeView);
