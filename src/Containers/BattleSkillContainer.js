import React, { Component } from 'react';
import BattleSkillCard from '../Components/BattleSkillCard'

class BattleSkillContainer extends Component {
    state = {showActions: true}
    
    actionHider = () => {
        this.setState({showActions: false})
    }
    
    renderSkills = () => this.props.skills.map(skill => <BattleSkillCard
        key={skill.id}
        skill={skill}
        actionHandler={this.props.actionHandler} 
        heroId={this.props.heroId}
        energy={this.props.energy} 
        actionHider={this.actionHider}
        infoHandler={this.props.infoHandler}
    />)

    componentDidUpdate(prevProps) {
        if (this.props.show !== prevProps.show && this.props.show === true) {
            this.setState({showActions: true})
        }
    }

    
    
    render() {
        return (
            <div className='battle-skill-container'>
                {this.state.showActions ? this.renderSkills() : null}
            </div>
        );
    }
}

export default BattleSkillContainer;
