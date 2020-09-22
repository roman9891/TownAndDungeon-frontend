import React, { Component } from 'react';

class Floor extends Component {
    
    clickHandler = () => {
        this.props.dungeonHandler(this.props.floor)
    }

    render() {
        return (
            <div className='floor'>
                <button onClick={this.clickHandler}>{this.props.floor.num}</button>
            </div>
        );
    }
}

export default Floor;
