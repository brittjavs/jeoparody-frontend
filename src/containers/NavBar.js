
import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import { Route, Switch } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
            <div>
            <Switch>
                {/* <Login /> */}
                <Route exact path='/login' component={Login}/>
                {/* <Signup /> */}
                <Route exact path='/signup' component={Signup}/>
                {/* <Logout /> */}
                <Route exact path='/logout' component={Logout}/>
            </Switch>
            </div>
            
        )
    }
}

export default NavBar
// Do we need to add withRouter here?