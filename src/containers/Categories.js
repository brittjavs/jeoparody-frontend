import React from 'react'

const API = 'https://jservice.io/api/random?count=2'

class Categories extends React.Component {
    constructor() {
        super()
        this.fetchAPI();
        this.state = {  
            category1: [{
                id: '',
                title: ''
            }],
            category2: [{
                id: '',
                title: ''
            }]
        }
    }
    
    fetchAPI = () => {  
         fetch(API)
            .then(resp => resp.json())
            .then(data => {
                // console.log("First random: ", data[0].category.id, data[0].category.title)
                // console.log("Second random", data[1].category.id, data[1].category.title)
         
                this.setState({  
                    category1: [{
                        id: data[0].category.id,
                        title: data[0].category.title
                    }],
                    category2: [{
                        id: data[1].category.id,
                        title: data[1].category.title
                    }]
                })          
            }) 
    }

    render(){
        console.log(this.state)
        return(
            <div className="categories-container">
                <h2>Categories go here</h2>
                <button>Category 1: {this.state.category1[0].title}</button>
                <button>Category 2: {this.state.category2[0].title}</button>
            </div>
        )
    }
}

export default Categories
