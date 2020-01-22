import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import { connect } from 'react-redux'

function CategoryShow(props){
    return (
        <div class="container col-md-4">
            {
                !_.isEmpty(props.category) && (
                    <div class="container">
                        <p class="h2">{props.category.name}</p>
                        <Link to='/categories'><button type="button" class="btn btn-secondary">Back</button></Link>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps=(state,props)=> {
    const id=props.match.params.id
    return{
        category:state.categories.find(category => category._id === id)
    }
}

export default connect(mapStateToProps)(CategoryShow)