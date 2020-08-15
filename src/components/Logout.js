import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'


const Logout = ({logout, history}) => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                logout()
                history.push('/')
                } 
            }>
                <input type="submit" value="Log out"/>
            </form>
        </div>
    )
}

export default withRouter(connect(null, { logout } )(Logout))
