import React, { Component } from 'react';
import ReviewsList from './ReviewsList/ReviewList'
import AddReviews from "./AddReviews/AddReviews"
// import { Card, CardGroup, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Reviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        this.getReviews()
        console.log('Component Did Mount');
    }

    deleteReviews = async (id) => {
        console.log(id);
        try{
            const deleteReviews = await fetch (`http://localhost:4000/googlereviews/${id}`,{
            method: 'DELETE'
        })
        const reviewsParsed = await deleteReviews.json()
        if(reviewsParsed.status.code === 200){
            this.setState({
                reviews:this.state.reviews.filter(function(reviews){
                    if(reviews._id === id){
                        return false;
                    }else{
                        return true
                    }
                })
            })
        }
        } catch(err){
            console.log(err)
            
        }
        
    }

    createReviews = async (formData) => {
        console.log(formData);
        
        try{
            const addReview = await fetch('http://localhost:4000/googlereviews', {
                method: "POST",
                body: JSON.stringify(formData), 
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const reviewsParsed = await addReview.json()
            // console.log(reviewsParsed);
            console.log(reviewsParsed.status.code );
            
            if(reviewsParsed.status.code === 200){    
                console.log('check 200');
                
                this.setState({
                    reviews:[...this.state.reviews, reviewsParsed.data]
            })
        }
        } catch(err){

        }
        
    }

    getReviews = async ()=>{
        try {
            // console.log('before request')
            const response = await fetch ('http://localhost:4000/googlereviews')
            // console.log('after request')
            console.log(response)
            if (response.status !== 200){
                throw Error (response.statusText)
            }
            const reviewsParsed = await response.json()
            this.setState({
                reviews: reviewsParsed
            })
        } catch(err){
            console.log('errored')
            console.log(err);
            return err
            
        }
    }


    updateReviews = async (id, formData) => {
        const updatedReviews = await fetch(`http://localhost:4000/googlereviews/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const parsedResponse = await updatedReviews.json();
        
        if(parsedResponse === parsedResponse){
            this.setState({
                reviews: this.state.reviews.map(function(reviews){
                    if(reviews._id === id){
                        return parsedResponse
                    }else{
                        return reviews
                    }
                })
            })
        }
        console.log(parsedResponse)
    }

    render (){
        return(
            <div>
            <h1>Google Algorithm Reviews</h1>
            <AddReviews createReviews = {this.createReviews}/>
            <ReviewsList reviews = {this.state.reviews} deleteReviews = {this.deleteReviews} updateReviews = {this.updateReviews}/>
            </div>
        )
    }
}

export default Reviews;