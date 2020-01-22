import React from 'react'
 
export default class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        //console.log(formData)
        this.props.handleSubmit(formData)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div class="container">
                {/* <p class="h3 text-center">Add Category</p> */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input className="form-control" type="text" id="name" placeholder={"type here..."} name="name" value={this.state.title} onChange={this.handleChange}/>
                    </div><button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}