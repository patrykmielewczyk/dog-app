import React from 'react';
import { connect } from 'react-redux';

class GiantSizeView extends React.Component {
    render() {
        const { giantDogs } = this.props;
        const DogList = (giantDogs) => (
            <li>
                <p>{giantDogs.name}</p>
                <p>{giantDogs.weight_min}</p>
                <p>{giantDogs.weight_max}</p>
                <p>{giantDogs.diet}</p>
            </li>
        );
        return (
            <ul>
                {giantDogs.map(({name, weight_min, weight_max, diet}) => 
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
       giantDogs: state.giantDogs
    }
}

export default connect(mapStateToProps) (GiantSizeView);
