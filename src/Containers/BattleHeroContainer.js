import React, { Component } from 'react';
import BattleHeroCard from '../Components/BattleHeroCard'

class BattleHeroContainer extends Component {
    renderHeroes = () => this.props.heroes.map((hero,i) => <BattleHeroCard
        key={hero.id}
        hero={hero}
        index={i} 
        actionHandler={this.props.actionHandler}
        show={this.props.show}
        targeting={this.props.targeting}
        allyHandler={this.props.allyHandler}
    />)
    
    render() {
        // console.log(this.props)
        return (
            <div id='battle-hero-container'>
                {this.renderHeroes()}
            </div>
        );
    }
}

export default BattleHeroContainer;
