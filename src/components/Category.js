import React from 'react'

class Category extends React.Component {
    
    render(){
        const { category } = this.props;
        
        return(
            <div className="category">
                <button id={category.id}>{category.title}</button>
            </div>
        )
    }
}

export default Category