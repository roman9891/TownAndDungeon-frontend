import React, { Component } from 'react';
import FloorList from './FloorList'
import FloorInfo from '../Components/FloorInfo'

class Dungeon extends Component {
    state = {
        selectedFloor: null
    }
    
    dungeonHandler = (floor) => {
        this.setState({selectedFloor: floor}, () => console.log(this.state))
    }

    clickHandler = () => {
        this.props.floorHandler(this.state.selectedFloor)
    }
    
    render() {
        // console.log(this.props)
        return (
            <div id='dungeon'>
                <FloorList user={this.props.user} dungeonHandler={this.dungeonHandler}/>
                <FloorInfo floor={this.state.selectedFloor}/>
                {this.state.selectedFloor ? <button onClick={this.clickHandler}>To Battle!</button> : null}
            </div>
        );
    }
}

export default Dungeon;
