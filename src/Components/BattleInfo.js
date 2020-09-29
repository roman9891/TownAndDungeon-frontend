import React, { Component } from 'react';

class BattleInfo extends Component {
    
    renderInfo = (infoObject) => {
        if (Object.keys(infoObject).includes('cost')) {
            console.log('this worked')
            return <div id='inner-battle-info'>
                <div>Name: {infoObject.name}</div>
                <div>Cost: {infoObject.cost}</div>
                <div>Target: {infoObject.target}</div>
                <div>Info: {infoObject.info}</div>
            </div>
        }
    }
    
    render() {
        return (
            <div id='battle-info'>
                {this.renderInfo(this.props.info)}
            </div>
        );
    }
}

export default BattleInfo;
