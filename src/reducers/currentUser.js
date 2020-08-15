export default function currentUser (state = null, action){
    switch(action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
            // this needs to be null because the state has user when logged in
        default:
            return state
    }
}