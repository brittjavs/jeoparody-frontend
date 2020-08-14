import React from 'react';
import './App.css';
import NavBar from "./containers/NavBar"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'


class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render (){
    return(
      <div className="App">
        <header className="App-header">
          <h5>JeoParody Test</h5>
          <NavBar />
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/logout' component={Logout}/>
          </Switch>
        </header>
      </div>
    )
    
  }
}

export default connect(null, {getCurrentUser})(App)
