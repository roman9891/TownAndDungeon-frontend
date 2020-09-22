import React, { Component } from 'react';

class FloorInfo extends Component {
    render() {
        return (
            <div id='floor-info'>
                Floor Info
                {!this.props.selectedFloor ? null : 
                    <button>To Battle!</button>
                }
            </div>
        );
    }
}

export default FloorInfo;
