import React from 'react';
import { connect } from 'react-redux';

class LargeSizeView extends React.Component {
    render() {
        const { largeDogs } = this.props;
        const DogList = (largeDogs) => (
            <li>
                <p>{largeDogs.name}</p>
                <p>{largeDogs.weight_min}</p>
                <p>{largeDogs.weight_max}</p>
                <p>{largeDogs.diet}</p>
            </li>
        );
        return (
            <ul>
                {largeDogs.map(({name, weight_min, weight_max, diet}) => 
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
        largeDogs: state.largeDogs
    }
}

export default connect(mapStateToProps) (LargeSizeView);
