import React, { Component } from 'react';

class TownCharacterCard extends Component {
    
    clickHandler = () => {
        console.log(this.props.class.class)
        this.props.townHandler(this.props.class.class.toLowerCase())
    }
    
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
                    <div>skill</div>
                    <div>skill</div>
                    <div>skill</div>
                    <div>skill</div>
                </div>
            </div>
        );
    }
}

export default TownCharacterCard;
