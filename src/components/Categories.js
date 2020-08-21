import React from 'react'
import Category from './Category'

const Categories = ({categories}) => {
    const categoryList = categories.map(category => {
        return <Category key={category.id} category={category}/>
    })
    return(
        <div className="categories">
            {categoryList}
        </div>
    )    
}
export default Categories