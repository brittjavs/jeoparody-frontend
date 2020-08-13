//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

//asynchronous action creators
export const login = userInfo => {
    return dispatch => {
        
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            //credentials aren't working yet
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(user => {
            if(user.error){
                alert(user.error)
            }
            else{
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}


export const getCurrentUser = () => {
    // console.log("get current user")
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }
            else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

// logout actions
export const clearCurrentUser = () => {
        return {
        type: "CLEAR_CURRENT_USER"
        }
    }

export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())
      return fetch('http://localhost:3001/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
      })
    }
  }