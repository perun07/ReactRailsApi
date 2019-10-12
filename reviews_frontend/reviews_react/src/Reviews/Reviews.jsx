import React, { Component } from 'react';

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

    deleteReviews = async (id) () => {
        console.log(id);
        try{
            const deleteReview = await fetch (`http://localhost:4000/googlereviews/${id}`, {
                method: 'DELETE'
            })
        }
    }

    getReviews (){
        fetch('http://localhost:4000/googlereviews')
        .then(response => response.json())
        .then(json=>console.log(json))
    .catch(error=> console.error(error))
    }
    render (){
        return(
            <h1>Google Algorithm Reviews</h1>
        )
    }
}

export default Reviews;