import React from 'react'
import {Link} from 'react-router-dom'
import CategoryForm from './Form'
import { connect } from 'react-redux'
import {startRemoveCategory} from '../../actions/categories' 
import {startAddCategory} from '../../actions/categories'
 
function CategoryList(props){
    
    const handleRemove=(id)=>{
        props.dispatch(startRemoveCategory(id))
    }
    const handleSubmit=(formData)=>{
        props.dispatch(startAddCategory(formData, props))
    }
    return(
        <div class="container " >
            <div class="container col-md-6">
                <p class="h3 text-center">Categories-{props.categories.length}</p>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Show</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           props.categories.map((category)=>{
                                return<tr key={category._id}>
                                        <td>{category.name}</td>
                                        <td><Link to={`categories/${category._id}`}><button type="submit" className="btn btn-primary">Show</button></Link></td>
                                        <td><Link to={`categories/edit/${category._id}`}><button type="button" class="btn btn-primary">Edit</button></Link></td>
                                        <td><button type="submit" className="btn btn-danger"
                                        onClick={()=>{                                            
                                        const confirmRemove=window.confirm("Are you sure?")
                                            if(confirmRemove){
                                                handleRemove(category._id)
                                            }
                                        }} >Remove</button></td></tr>
                            })
                        }
                    </tbody>
                </table><hr/>
                <CategoryForm handleSubmit={handleSubmit}/>
            </div>
        </div>

        )
}

const mapStateToProps=(state)=>{
    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)(CategoryList)