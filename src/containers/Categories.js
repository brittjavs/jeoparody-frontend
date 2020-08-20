import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
// const API = 'https://jservice.io/api/random?count=2'

class Categories extends React.Component {
    componentDidMount(){
        this.props.fetchCategories()
    }
    // fetchAPI = () => {  
    //      fetch(API)
    //         .then(resp => resp.json())
    //         .then(data => {
                // console.log("First random: ", data[0].category.id, data[0].category.title)
                // console.log("Second random", data[1].category.id, data[1].category.title)
         
    //             this.setState({  
    //                 category1: [{
    //                     id: data[0].category.id,
    //                     title: data[0].category.title
    //                 }],
    //                 category2: [{
    //                     id: data[1].category.id,
    //                     title: data[1].category.title
    //                 }]
    //             })          
    //         }) 
    // }

    render(){
        // console.log(this.state)
        return(
            <div className="categories-container">
                <h2>Categories</h2>
                <button>Category 1</button>
                <button>Category 2</button>
            </div>
        )
    }
}

export default connect(null, {fetchCategories})(Categories)
