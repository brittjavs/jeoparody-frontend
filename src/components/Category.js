import React from 'react'

class Category extends React.Component {

    render(){
        const { category } = this.props;
        
        return(
            <div className="category">
                <h2 id={category.id}>{category.title}</h2>
            </div>
        )
    }
}

export default Category