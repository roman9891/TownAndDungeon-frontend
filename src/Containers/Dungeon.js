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
        // this.props.floorHandler(this.state.selectedFloor)
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                 <div id='dungeon'>
                    <FloorList user={this.props.user} dungeonHandler={this.dungeonHandler} floorHandler={this.props.floorHandler}/>
                    {/* <FloorInfo floor={this.state.selectedFloor}/>   */}
                </div>
                {/* <div>
                    <img id='dungeon-image'src='https://i.pinimg.com/originals/20/f0/56/20f0562c04c9a047679132d8c29677c0.jpg'></img>
                    {this.state.selectedFloor ? <button onClick={this.clickHandler}>To Battle!</button> : null}
                </div>  */}
            </div>
           
            
        );
    }
}

export default Dungeon;
