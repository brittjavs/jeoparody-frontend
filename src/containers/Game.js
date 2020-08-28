import React from 'react'
// import {Route, Switch, NavLink} from 'react-router-dom';
import './game.css'
import CategoriesContainer from './CategoriesContainer';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';
// import Categories from '../components/Categories';
import CluesContainer from './CluesContainer';

class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            started: false,
            display: ""
        }
    }

    startSlides = ()=>{
        let components = [<CategoriesContainer/>, <CluesContainer/>]
        let index = 0;
        let timer = setInterval(() => {
            console.log("start")
            this.setState({ 
                display: components[index]
            });
            if(index === components.length-1){
                clearInterval(timer)
            console.log("end")
            }
            index++
        }, 2000)
    }

    handleOnClick = () => {
        this.setState({
            started: true
        })
        this.startSlides()
    }
  
    render(){
        return(
            this.state.started === false ?
            <div className="game-start">
                <button onClick={this.handleOnClick}>Start Game</button>
            </div>
            :
            <div className="game-content">
                {this.state.display}
            </div>
                
      
        )
    }
}
export default connect(null, {fetchCategories})(Game)