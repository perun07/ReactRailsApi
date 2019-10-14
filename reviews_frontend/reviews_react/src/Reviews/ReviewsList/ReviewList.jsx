import React from 'react'
import EditReviews from './EditReviews/EditReviews'
import { Card, CardGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function ReviewsList(props){
    const reviews = props.reviews.map(function(review){
        // console.log(review.review);
        
        return(
            <div>
            <CardGroup>
            <Card body inverse color="primary">
            <div key={review.id}>
            <h3>ID: {review.id}, Title: {review.title}, Author: {review.author}, Rating: {review.rating}</h3>
            <p>review:{review.review}</p>
            <Button color="warning" onClick={()=>{
                props.deleteReviews(review.id)
            }}>Delete</Button>
            <EditReviews id={review.id} updateReviews = {props.updateReviews} />
            </div>
            </Card>
            </CardGroup>
            </div>
        )
    })
    return(
        <ul>
            {reviews}
        </ul>
    )
}

export default ReviewsList