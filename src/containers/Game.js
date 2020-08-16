import React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom';
import './game.css'
import Categories from './Categories';

class Game extends React.Component{
    render(){
        return(
            <div className="game-content">
            
                <NavLink to="/categories">Start</NavLink>
                <Switch>
                <Route exact path='/categories' component={Categories}/>
                </Switch>
                
            </div>
    
    
                    

        )
    }
}
export default Game