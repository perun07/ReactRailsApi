import React, { Component } from 'react';

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    componentDidMount(){
        this.getReviews()
        console.log('Component Did Mount');
    }
    getReviews (){
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then(json=>console.log(json))
    .catch(error=> console.error(error))
    }
    render (){
        return(
            <h1>Login Page</h1>
        )
    }
}

export default Users;