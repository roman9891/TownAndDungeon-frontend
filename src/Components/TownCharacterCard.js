import React, { Component } from 'react';

class TownCharacterCard extends Component {
    
    clickHandler = (e) => {
        this.props.townHandler(this.props.class.class.toLowerCase())
    }

    skillClickHandler = (e) => {
        console.log(e.target.innerText)
        this.props.skillRemover(e.target.innerText, this.props.class.class.toLowerCase())
    }

    renderSkills = () => this.props.selectedSkills[this.props.class.class.toLowerCase()]
        .map(skill => <button onClick={this.skillClickHandler} skill={skill}>{skill.name}</button>)
    
    render() {
        return (
            <div className='town-character-card'>
                <div onClick={this.clickHandler} className='inner-town-character-card'>
                    <div className='class-name'>{this.props.class.class}</div>
                    <img className='town-character-card-image' src={this.props.class.image} alt=''></img>
                    <div>HP:{this.props.class.hp}</div>
                    <div>Energy:{this.props.class['starting-energy']}/{this.props.class['max-energy']}</div>
                    <div>Roles:{this.props.class.roles}</div>
                    <div>Info:{this.props.class.info}</div>
                    {this.renderSkills()/* <div>skill</div>
                    <div>skill</div>
                    <div>skill</div>
                    <div>skill</div> */}
                </div>
            </div>
        );
    }
}

export default TownCharacterCard;
