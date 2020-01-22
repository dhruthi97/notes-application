import React from 'react'
import Axios from 'axios'

export default class NoteForm extends React.Component{
    constructor(props){
        super(props)
            this.state ={
                title:props.title ? props.title : '',
                body:props.body ? props.body : '',
                category:props.category ? props.category: '',
                categories:props.categories ? props.categories : []
            }
        }

        handleSubmit = (e) => {
            e.preventDefault()
            const formData = {
                title: this.state.title,
                body: this.state.body,
                category: this.state.category
            }
            console.log(formData)
            this.props.handleSubmit(formData)
        }
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        componentDidMount(){
            Axios.get('http://localhost:3025/categories',{
                headers : {
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                const categories = response.data
                this.setState({categories})
                // console.log(categories)
            })
        }

        render(){
            return(
                <div className="container text-center col-md-6">
                    <form onSubmit={this.handleSubmit}>
                    
                        <div className="form-group">
                            <label htmlFor="title"></label>
                            <input type="text" className="form-control" id="" placeholder="type title..." name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body"></label>
                            <textarea type="text" className="form-control" id="body" placeholder="type body..." name="body" value={this.state.body} onChange={this.handleChange} />
                            </div>
                        <div className="form-group">
                            <label htmlFor="category"></label>
                                <select className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleChange } >
                                    <option>{this.state.category.name}</option>
                                    {
                                    this.state.categories.map(category=> {
                                        return (<option key={category._id} value={category._id} > {category.name}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>  
                </div>
            )
        }
    }
