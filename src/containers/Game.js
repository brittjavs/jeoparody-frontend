import React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom';
import './game.css'
import CategoriesContainer from './CategoriesContainer';
import { fetchCategories } from '../actions/categories'
import { connect } from 'react-redux'

class Game extends React.Component{
    componentDidMount(){
        this.props.fetchCategories()
    }
    render(){
        return(
            <div className="game-content">
            
                <NavLink to="/categories">Start</NavLink>
                
                <Switch>
                <Route exact path='/categories' component={CategoriesContainer}/>
                </Switch>
                
            </div>

        )
    }
}
export default connect(null, {fetchCategories})(Game)