import React, { Component } from 'react';
import Floor from '../Components/Floor'
import {floors} from '../Data/FloorData'

class FloorList extends Component {

    renderFloors = () => floors.map(floor => <Floor 
        reached= {floor.num <= this.props.user.progress ? false : true}
        key={floor.id} 
        floor={floor}
        dungeonHandler={this.props.dungeonHandler}
        floorHandler={this.props.floorHandler}
        />)

    render() {
        return (
            <div id='floor-list'>
                {this.renderFloors()}
            </div>
        );
    }
}

export default FloorList;
