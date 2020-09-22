import React, { Component } from 'react';
import Floor from '../Components/Floor'
import {floors} from '../FloorData'

class FloorList extends Component {

    renderFloors = () => floors.filter(floor => floor.num <= this.props.user.progress).map(floor => <Floor 
        key={floor.id} 
        floor={floor}
        dungeonHandler={this.props.dungeonHandler}
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
