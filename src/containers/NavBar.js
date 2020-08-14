import React from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
=======
import Login from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'
>>>>>>> 3464844fa7c38de8c09bf7b8f7e21dc48ade60b9

class NavBar extends React.Component {
    render(){
        return(
<<<<<<< HEAD
            <div>
            <button><NavLink exact activeClassName="active" to="/login">Login</NavLink></button>
            <NavLink exact activeClassName="active"to="/signup">Signup</NavLink>

            {/* Show only log out when current user is logged in */}
            <NavLink exact activeClassName="active" to="/logout">Logout</NavLink>



=======
            this.props.currentUser ? 
            <div className="logged-in-nav">
                <NavLink to = "/logout">Log Out</NavLink>
                    <div>
                        {/* <Logout /> */}
                        <Switch>
                        <Route exact path='/logout' component={Logout}/>
                        </Switch>
                        
                    </div>
            </div>
            :
            <div className="auth-nav">
            <NavLink to = "/login">Log In</NavLink>
            <span> or</span>
            <NavLink to="/signup">Sign Up</NavLink>
            <span>to keep track of your results</span>
                <div>
                <Switch>
                {/* <Login /> */}
                <Route exact path='/login' component={Login}/>
                {/* <Signup /> */}
                <Route exact path='/signup' component={Signup}/>
                </Switch>
                </div>
>>>>>>> 3464844fa7c38de8c09bf7b8f7e21dc48ade60b9
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
}

export default connect(mapStateToProps,)(NavBar)
// Do we need to add withRouter here?