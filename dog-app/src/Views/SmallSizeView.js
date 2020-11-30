import React from 'react';
import { connect } from 'react-redux';

class SmallSizeView extends React.Component {
    render() {
        const { smallDogs } = this.props;
        const DogList = (smallDogs) => (
            <li>
                <p>{smallDogs.name}</p>
                <p>{smallDogs.weight_min}</p>
                <p>{smallDogs.weight_max}</p>
                <p>{smallDogs.diet}</p>
            </li>
        );
        return (
            <ul>
                {smallDogs.map(({name, weight_min, weight_max, diet}) => 
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
        smallDogs: state.smallDogs
    }
}

export default connect(mapStateToProps) (SmallSizeView);
