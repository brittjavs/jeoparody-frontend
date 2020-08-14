import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
            this.props.currentUser ? 
            <div className="logged-in-nav">
                        <Logout />
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