
import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'

class NavBar extends React.Component {
    render(){
        return(
            <div>
            <Login />
            <Signup />
            <Logout />
            </div>
            
        )
    }
}

export default NavBar
