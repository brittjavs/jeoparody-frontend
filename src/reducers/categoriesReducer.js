export default function categoriesReducer (state = [], action){
    switch(action.type){
        case "GET_CATEGORIES":
            return [...state, action.categories];
        default:
            return state
    }
}