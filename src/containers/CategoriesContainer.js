import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'

class CategoriesContainer extends React.Component {
    
  
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
       
        return(
            <div className="categories-container">
                <h2>Categories</h2>
                <Categories categories={this.props.categories}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(CategoriesContainer)
