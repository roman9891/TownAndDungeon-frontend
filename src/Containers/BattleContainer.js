import React, { Component } from 'react';
import BattleHeroContainer from './BattleHeroContainer'
import BattleEnemyContainer from './BattleEnemyContainer'
import BattleInfo from '../Components/BattleInfo'

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
        log: [],
        info: {}
    }

    //receives data from BattleSkillCard
    //deducts NRG cost
    //hides appropriate hero's actions for the remainder of the turn
    //persists selected action and the respective hero that used it to state
    actionHandler = (action, heroIndex) => {
        const hero = this.state.heroes[heroIndex]

        hero['starting-energy'] = hero['starting-energy'] - action.cost
        
        this.setState({
          currentAction: [action, hero], 
          show: false,
          actionsUsed: this.state.actionsUsed + 1
        }, () => this.chooseTarget(action))
    }

    //determines which targets are eligible for selected action
    //if the user has to choose a target then it changes state to highlight available targets
    //if no user input is necessary then proceeds directly to ActionByType to resolve action effects
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
        if (action.target === 'all allies') {
            this.state.heroes.forEach(hero => this.actionByType(this.state.currentAction[0], hero, this.state.currentAction[1]))
            setTimeout(() => {if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}}, 1000)
        }
        if (action.target === 'random enemy') {
            for (let i = 0; i < action.hits; i ++) {
                const index = Math.floor(Math.random() * this.state.enemies.length)
                const target = this.state.enemies[index]
                this.actionByType(action, target, this.state.currentAction[1])
            }
            if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}
        }
    }

    //receives data from a clicked target and persists the targets index value to state to allow the action to hit that target specifically
    //TODO combine handlers
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

    //initiates ActionByType and checks to see if the user has expended all their actions for the turn
    actionOnTarget = (action, target, user) => {
        console.log('ActionOnTarget')
        this.actionByType(action, target, user)
    
        this.setState({},() => setTimeout(() => {if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}}, 1000))
    }

    //applies damage or effects to the target according to action type
    actionByType = (action, target, user) => {
        setTimeout(() => {
            this.setState({log: [`${user.class ? user.class : user.name} uses ${action.name} on ${target.class ? target.class : target.name}`,...this.state.log]})
        }, 500)
        
        //if target has buff effect it removes the old one before applying the new one 
        //otherwise it just applies the new one
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
        
        //if target has stance effect it removes the old one before applying the new one 
        //otherwise it just applies the new one
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
        }
    
        if (action.type === 'M') {
            target.hp = target.hp - (action.power * user.mAtk / target.mDef)
        }

        if (action.type === 'D') {
            const damage = action.damage(user, target)

            target.hp = target.hp - damage
        }

        if (action.type === 'E') {
            action.effect(user, target)
        }
        this.setState({[this.state.actionsAgainst]: this.state[this.state.actionsAgainst].filter(unit => unit.hp > 0)})
    }

    //runs after all users actions and all enemy actions and passes the turn to the opposite side
    checkVictory = () => {
        this.state.actionsAgainst === 'enemies' ? this.enemiesTurn() : this.endTurn()
    }

    //iterates through each enemy's turn
    //SetTimeout staggers each enemies turn so it's easier for the user to notice each action
    enemiesTurn = () => {
        this.setState({actionsAgainst: 'heroes'}, () => {
            this.state.enemies.forEach((enemy, i, arr)=> setTimeout(() => {
                this.enemyTurn(enemy)
                if (i + 1 === arr.length) {
                    setTimeout(this.checkVictory, 500)
                }
                console.log('forEachEnemy', i, arr.length)
            }
            , ((i * 600) + 1000)))
        })
    }
    
    enemyTurn = (enemy) => {
        // const index = (this.state.turn < enemy.actions.length) ? this.state.turn : (this.state.turn % enemy.actions.length)
        const action = enemy.chooseAction(enemy)//enemy.actions[index]
        // const heroIndex = Math.floor(Math.random() * this.state.heroes.length)
        // const targetHero = this.state.heroes[heroIndex]
        // this.setState({currentTarget: [targetHero, heroIndex]}, this.actionByType(action, targetHero, enemy))
        console.log(`Enemy Turn`)
        if (action.target === 'single enemy') {
            const target = this.enemyChooseTarget()
            this.setState({currentTarget: [target[0], target[1]]}, this.actionByType(action, target[0], enemy))
        }
        if (action.target === 'all enemy') {
          this.state.heroes.forEach(hero => this.actionByType(action, hero, enemy))
        //   setTimeout(() => {if (this.state.actionsUsed === this.state.heroes.length) {this.checkVictory()}}, 1000)
        }
        if (action.target === 'self') {
          this.actionByType(action, enemy, enemy)
        }
        if (action.target === 'single ally') {
            const target = this.enemyChooseAlly(action)
            this.setState({currentTarget: [target[0], target[1]]}, this.actionByType(action, target[0], enemy))
        }
        if (action.target === 'all allies') {}
        if (action.target === 'random enemy') {
            for (let i = 0; i < action.hits; i ++) {
                const target = this.enemyChooseTarget()
                this.actionByType(action, target[0], enemy)
            }
        }
        // const target = this.enemyChooseTarget()
        // this.setState({currentTarget: [target[0], target[1]]}, this.actionByType(action, target[0], enemy))
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

    enemyChooseAlly = (action) => {
        if (action.type === 'B') {
            const enemiesWithoutBuffs = this.state.enemies.filter(enemy => !enemy.buff)
            const index = Math.floor(Math.random() * enemiesWithoutBuffs.length)
            const target = enemiesWithoutBuffs[index]
            return [target, index]
        } else {
            const index = Math.floor(Math.random() * this.state.enemies.length)
            const target = this.state.enemies[index]
            return [target, index]
        }
    }

    endTurn = () => {
        this.state.heroes.forEach(hero => {
            if (hero['starting-energy'] + 20 > 100) {
                hero['starting-energy'] = 100
            } else {
                hero['starting-energy'] = hero['starting-energy'] + 20
            }
            if (hero.condition) {hero.condition.effect(hero)}
        })
        this.state.enemies.forEach(enemy => {
            if (enemy.nrg + 20 > enemy.mNrg) {
                enemy.nrg = enemy.mNrg
            } else {
                enemy.nrg = enemy.nrg + 20
            }
            if (enemy.condition) {enemy.condition.effect(enemy)}
        })
        
        this.setState({
          turn: this.state.turn + 1,
        //   userCost: (this.state.userCost - 20) < 0 ? 0 : (this.state.userCost - 20),
          show: true,
          actionsUsed: 0,
          actionsAgainst: 'enemies',
          heroes: this.state.heroes.filter(unit => unit.hp > 0),
          enemies: this.state.enemies.filter(unit => unit.hp > 0)
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

    clickHandler = () => {
        this.props.leaveHandler()
    }

    infoHandler = (info) => {
        this.setState({info: info})
    }

    renderLogs = () => this.state.log.map(eachLog => <div>{eachLog}</div>)
    
    
    render() {
        // console.log(this.state.heroes)
        return (
            <div>
                <div id='battle-container'>
                    <button onClick={this.clickHandler}>← Town</button>
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
                        targeting={(this.state.targeting === 'ally') ? true : false}
                        allyHandler={this.allyHandler}
                        infoHandler={this.infoHandler}
                    />
                </div>
                <div id='battle-info-container'>
                    <BattleInfo info={this.state.info}/>
                    <div id='battle-log'>{this.renderLogs()}</div>
                </div>
            </div>
        );
    }
}

export default BattleContainer;
