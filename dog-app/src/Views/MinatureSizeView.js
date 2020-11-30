import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

class MinatureSizeView extends React.Component {
    render() {
        const { miniatureDogs } = this.props;
        const DogList = (miniatureDogs) => (
            <li>
                <p>{miniatureDogs.name}</p>
                <p>Waga minimalna: {miniatureDogs.weight_min}</p>
                <p>Waga Maksymalna: {miniatureDogs.weight_max}</p>
            </li>
        );
        return (
            <ul>
                {miniatureDogs.map(({name, weight_min, weight_max}) => 
                    <DogList
                        name={name}
                        weight_min={weight_min}
                        weight_max={weight_max}
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
