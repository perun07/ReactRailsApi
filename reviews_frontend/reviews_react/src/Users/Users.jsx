// import React, { Component } from 'react';
// import UsersList from './ReviewsList/ReviewList'
// import UsersReviews from "./AddReviews/AddReviews"
// // import { Card, CardGroup, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

// class Users extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             users: []
//         }
//     }
//     componentDidMount(){
//         this.getUsers()
//         console.log('Component Did Mount');
//     }

//     deleteUsers = async (id) => {
//         console.log(id);
//         try{
//             const deleteUsers = await fetch (`http://localhost:4000/googlereviews/${id}`,{
//             method: 'DELETE'
//         })
//         const usersParsed = await deleteUsers.json()
//         if(usersParsed.status.code === 200){
//             this.setState({
//                 users:this.state.users.filter(function(users){
//                     if(users._id === id){
//                         return false;
//                     }else{
//                         return true
//                     }
//                 })
//             })
//         }
//         } catch(err){
//             console.log(err)
            
//         }
        
//     }

//     createUsers = async (formData) => {
//         console.log(formData);
        
//         try{
//             const addUsers = await fetch('http://localhost:4000/googlereviews', {
//                 method: "POST",
//                 body: JSON.stringify(formData), 
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             })
//             const usersParsed = await addUsers.json()
//             // console.log(reviewsParsed);
//             console.log(usersParsed.status.code );
            
//             if(usersParsed.status.code === 200){    
//                 console.log('check 200');
                
//                 this.setState({
//                     users:[...this.state.users, usersParsed.data]
//             })
//         }
//         } catch(err){

//         }
        
//     }

//     getUsers = async ()=>{
//         try {
//             // console.log('before request')
//             const response = await fetch ('http://localhost:4000/googlereviews')
//             // console.log('after request')
//             console.log(response)
//             if (response.status !== 200){
//                 throw Error (response.statusText)
//             }
//             const usersParsed = await response.json()
//             this.setState({
//                 users: usersParsed
//             })
//         } catch(err){
//             console.log('errored')
//             console.log(err);
//             return err
            
//         }
//     }


//     updateUsers = async (id, formData) => {
//         const updatedUsers = await fetch(`http://localhost:4000/googlereviews/${id}`, {
//             method: "PUT",
//             body: JSON.stringify(formData),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })

//         const parsedResponse = await updatedUsers.json();
        
//         if(parsedResponse === parsedResponse){
//             this.setState({
//                 users: this.state.users.map(function(users){
//                     if(users._id === id){
//                         return parsedResponse
//                     }else{
//                         return users
//                     }
//                 })
//             })
//         }
//         console.log(parsedResponse)
//     }

//     render (){
//         return(
//             <div>
//             <h1>Google Algorithm Reviews</h1>
//             <AddUsers createUsers = {this.createUsers}/>
//             <UsersList users = {this.state.users} deleteUsers = {this.deleteReviews} updateReviews = {this.updateReviews}/>
//             </div>
//         )
//     }
// }

// export default Users;