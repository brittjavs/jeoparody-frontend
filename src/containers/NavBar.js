
import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    render(){
        return(
            <div>
            <button><NavLink exact activeClassName="active" to="/login">Login</NavLink></button>
            <NavLink exact activeClassName="active"to="/signup">Signup</NavLink>

            {/* Show only log out when current user is logged in */}
            <NavLink exact activeClassName="active" to="/logout">Logout</NavLink>



            </div>
            
        )
    }
}

export default NavBar
// Do we need to add withRouter here?