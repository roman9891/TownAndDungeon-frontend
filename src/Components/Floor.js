import React, { Component } from 'react';
import FloorInfo from './FloorInfo'

class Floor extends Component {
    state = {
        clicked: false
    }
    
    clickHandler = () => {
        if (!this.props.reached) {
            this.props.dungeonHandler(this.props.floor)
            console.log('reached')
            this.setState({clicked: true})
        }
        if (this.state.clicked) {
            this.props.floorHandler(this.props.floor)
        }
    }

    render() {
        const reached = {opacity: .5}
        return (
            <div className='floor'>
                <button style={this.props.reached ? reached : null} onClick={this.clickHandler}>{this.state.clicked ? `To Battle!` : this.props.floor.num}</button>
                {this.state.clicked ? <FloorInfo floor={this.props.floor}/> : null}
            </div>
        );
    }
}

export default Floor;
