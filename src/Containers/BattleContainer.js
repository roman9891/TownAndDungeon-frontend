import React, { Component } from 'react';
import BattleHeroContainer from './BattleHeroContainer'
import BattleEnemyContainer from './BattleEnemyContainer'

class BattleContainer extends Component {
    state = {
        heroes: this.props.participants.heroes,
        enemies: this.props.participants.enemies,
        turn: 0, 
        show: true,
        info: ``,
        currentAction: {},
        currentTarget: {},
        actionEffects: {},
        actionsUsed: 0,
        actionsAgainst: 'enemies',
    }

    actionHandler = (action, heroIndex) => {
        const hero = this.state.heroes[heroIndex]
        console.log(`actionHandler`, hero, action.cost)
        hero['starting-energy'] = hero['starting-energy'] - action.cost
        
        this.setState({
          currentAction: [action, hero], 
          show: false,
          actionsUsed: this.state.actionsUsed + 1
        }, () => this.chooseTarget(action))
        // this.chooseTarget(action))
    }

    chooseTarget = (action) => {
        console.log(`choose target`)
        if (action.target === 'single enemy') {
          this.setState({targeting: 'enemy'})
        }
        if (action.target === 'all enemy') {
          this.state.enemies.forEach(enemy => this.actionByType(this.state.currentAction[0], enemy, this.state.currentAction[1]))
          setTimeout(() => {if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}}, 1000)
        }
        if (action.target === 'self') {
          this.actionOnTarget(this.state.currentAction[0], this.state.currentAction[1], this.state.currentAction[1])
        }
        if (action.target === 'single ally') {
            console.log('targeting ally')
            this.setState({targeting: 'ally'})
        }
        if (action.target === 'all allies') {}
    }

    targetHandler = (enemyIndex) => {
        this.setState({
          currentTarget: [this.state.enemies[enemyIndex], enemyIndex], 
          targeting: null
        }
        , () => this.actionOnTarget(this.state.currentAction[0], this.state.currentTarget[0], this.state.currentAction[1]))
    }

    allyHandler = (heroIndex) => {
        console.log(heroIndex)
        this.setState({
            currentTarget: [this.state.heroes[heroIndex], heroIndex], 
            targeting: null
        }
        , () => this.actionOnTarget(this.state.currentAction[0], this.state.currentTarget[0], this.state.currentAction[1]))
    }

    actionOnTarget = (action, target, user) => {
        console.log('ActionOnTarget')
        this.actionByType(action, target, user)
    
        this.setState({},() => setTimeout(() => {if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}}, 1000))
    }

    actionByType = (action, target, user) => {
        console.log('ABT: ',action, target, user)
        
        if (action.type === 'B') {
          if (target.buff) {
            target.buff[0].forEach(effect => {
              target[effect[0]] = target[effect[0]] / effect[1]
            })
            action.beforeEffect.forEach(effect => {
              target[effect[0]] = target[effect[0]] * effect[1]
            })
            target.buff = [action.beforeEffect, action.name]
          } else {
            action.beforeEffect.forEach(effect => {
              target[effect[0]] = target[effect[0]] * effect[1]
            })
            target.buff = [action.beforeEffect, action.name]
          }
        }
    
        if (action.type === 'S') {
          if (target.stance) {
            target.stance[0].forEach(effect => {
              target[effect[0]] = target[effect[0]] / effect[1]
            })
            action.beforeEffect.forEach(effect => {
              target[effect[0]] = target[effect[0]] * effect[1]
            })
            target.stance = [action.beforeEffect, action.name]
          } else {
            action.beforeEffect.forEach(effect => {
              target[effect[0]] = target[effect[0]] * effect[1]
            })
            target.stance = [action.beforeEffect, action.name]
          }
        }
        
        if (action.type === 'P') {
            target.hp = target.hp - (action.power * user.pAtk / target.pDef)
            // this.setState({[this.state.actionsAgainst]: this.state[this.state.actionsAgainst].filter(unit => unit.hp > 0)})
        }
    
        if (action.type === 'M') {
            target.hp = target.hp - (action.power * user.mAtk / target.mDef)
            // this.setState({[this.state.actionsAgainst]: this.state[this.state.actionsAgainst].filter(unit => unit.hp > 0)})
        }

        if (action.type === 'D') {
            const damage = action.damage(user, target)

            target.hp = target.hp - damage
            // this.setState({[this.state.actionsAgainst]: this.state[this.state.actionsAgainst]})
        }

        if (action.type === 'E') {
            console.log('using effect')
            action.effect(user, target)
        }
        this.setState({[this.state.actionsAgainst]: this.state[this.state.actionsAgainst].filter(unit => unit.hp > 0)})
    }

    checkVictory = () => {
        this.state.actionsAgainst === 'enemies' ? this.enemiesTurn() : this.endTurn()
    }

    enemiesTurn = () => {
        this.setState({actionsAgainst: 'heroes'}, () => {
          this.state.enemies.forEach(enemy => this.enemyTurn(enemy))
          setTimeout(this.checkVictory, 500)
        })
    }
    
    enemyTurn = (enemy) => {
        const index = (this.state.turn < enemy.actions.length) ? this.state.turn : (this.state.turn % enemy.actions.length)
        const action = enemy.chooseAction(enemy)//enemy.actions[index]
        // const heroIndex = Math.floor(Math.random() * this.state.heroes.length)
        // const targetHero = this.state.heroes[heroIndex]
        // this.setState({currentTarget: [targetHero, heroIndex]}, this.actionByType(action, targetHero, enemy))
        const target = this.enemyChooseTarget()
        this.setState({currentTarget: [target[0], target[1]]}, this.actionByType(action, target[0], enemy))
    }

    enemyChooseTarget = () => {
        if (this.state.heroes.find(hero => hero.provoke)) {
            console.log('found provoke')
            if (Math.random() > .5) {
                const provokedHeroes = this.state.heroes.filter(hero => hero.provoke)
                const index = Math.floor(Math.random() * provokedHeroes.length)
                const target = provokedHeroes[index]
                console.log('provoked:', target)
                return [target, index]
            }
        }
        let seenHeroes = this.state.heroes
        if (this.state.heroes.find(hero => hero.hide) && !this.state.heroes.every(hero => hero.hide)) {
            console.log('found hide')
            if (Math.random() > .5) {
                seenHeroes = this.state.heroes.filter(hero => !hero.hide)
                console.log('hid heroes: ', this.state.heroes.filter(hero => hero.hide))
            }
        }
        const index = Math.floor(Math.random() * seenHeroes.length)
        const target = seenHeroes[index]
        return [target, index]
    }

    endTurn = () => {
        this.state.heroes.forEach(hero => {
            if (hero['starting-energy'] + 20 > 100) {
                hero['starting-energy'] = 100
            } else {
                hero['starting-energy'] = hero['starting-energy'] + 20
            }
        })
        this.state.enemies.forEach(enemy => {
            if (enemy.nrg + 20 > enemy.mNrg) {
                enemy.nrg = enemy.mNrg
            } else {
                enemy.nrg = enemy.nrg + 20
            }
        })
        
        this.setState({
          turn: this.state.turn + 1,
        //   userCost: (this.state.userCost - 20) < 0 ? 0 : (this.state.userCost - 20),
          show: true,
          actionsUsed: 0,
          actionsAgainst: 'enemies',
        }, () => console.log('EoT:',this.state))
    }

    componentDidUpdate() {
        if (this.state.heroes.length === 0) {
            console.log('defeat')
            this.props.victoryHandler(false)
        } 
        else if (this.state.enemies.length === 0) {
            console.log('victory')
            this.props.victoryHandler(true)
        }
    }
    
    render() {
        // console.log(this.state.heroes)
        return (
            <div id='battle-container'>
                <BattleEnemyContainer 
                    enemies={this.state.enemies}
                    targeting={(this.state.targeting === 'enemy') ? true : false}
                    targetHandler={this.targetHandler}
                    currentTarget={this.state.currentTarget}
                />
                <BattleHeroContainer 
                    heroes={this.state.heroes}
                    actionHandler={this.actionHandler}
                    show={this.state.show}
                    targeting={this.state.targeting}
                    allyHandler={this.allyHandler}
                />
            </div>
        );
    }
}

export default BattleContainer;