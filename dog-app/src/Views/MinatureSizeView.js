import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';

class MinatureSizeView extends React.Component {
    render() {
        const { miniatureDogs } = this.props;
        const DogList = (miniatureDogs) => (
        <a href="#">
            <li>
                <p>{miniatureDogs.name}</p>
                <p>Waga minimalna: {miniatureDogs.weight_min}</p>
                <p>Waga Maksymalna: {miniatureDogs.weight_max}</p>
                <img src={miniatureDogs.image}></img>
            </li>
        </a>
        );
        return (
            <ul>
                {miniatureDogs.map(({name, weight_min, weight_max, image}) => 
                    <DogList
                        name={name}
                        weight_min={weight_min}
                        weight_max={weight_max}
                        image={image}
                    />
                )}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        miniatureDogs: state.miniatureDogs
    }
}

export default connect(mapStateToProps) (MinatureSizeView);
