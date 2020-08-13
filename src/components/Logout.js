import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

const Logout = ({logout}) => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                logout()
                } 
            }>
                <input type="submit" value="Log out"/>
            </form>
        </div>
    )
}

export default connect(null, { logout } )(Logout)
