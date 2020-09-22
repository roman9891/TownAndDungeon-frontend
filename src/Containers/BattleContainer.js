import React, { Component } from 'react';

class BattleContainer extends Component {
    render() {
        //pass phase down as props
        //pass actions and targets as props
        //each unit has component did update with functions depending on phase and if targeted
        console.log(this.props)
        return (
            <div>
                BattleContainer
            </div>
        );
    }
}

export default BattleContainer;
