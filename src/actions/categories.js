export const getCategories = categories => {
    return{
        type: "GET_CATEGORIES",
        categories
    }
}

//async functions

export const fetchCategories = () => {
    return dispatch => {
        return fetch ('https://jservice.io/api/random?count=2')
        .then(resp => resp.json())
        .then(data => {
            if (data.error){
                alert(data.error)
            }
            else {
                for(let i = 0; i < data.length; i++) {
                    let obj = data[i];
                    dispatch(getCategories(obj.category))
                }
            }
        })
    }
}