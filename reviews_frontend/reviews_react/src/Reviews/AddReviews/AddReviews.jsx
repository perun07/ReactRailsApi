import React, { Component } from  'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AddReviews extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            author: "",
            review: "",
            rating: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(this.props.createReviews))
        this.props.createReviews(this.state)
        window.location.reload(false);
      
    }

    render(){
        return(
            <div>
            <Card body inverse color="warning">
            <Container>
            <Form onSubmit={this.handleSubmit}>
                <h2>Please Enter Your Review of Your Google Algo Review Below</h2>
                <FormGroup row>
                <Label for= "title">Title:</Label>
                <Input type = "text" name = "title" placeholder="title" onChange = {this.handleChange}/>
                </FormGroup>
                <FormGroup row>
                <Label for= "author">Author:</Label>
                <Input type = "text" name = "author" placeholder="author" onChange = {this.handleChange}/>
                </FormGroup>
                <FormGroup row>
                <Label for="rating">Rating:</Label>
                <Input type = "text" name = "rating" placeholder="rating" onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup row>
                <Label for = "review">Algo Review:</Label>
                <Input type = 'text' name = 'review' placeholder="Review" onChange = {this.handleChange}></Input>
                <Button type="submit" color="primary">Add your Review</Button>
                </FormGroup>
            </Form>
            </Container>
            </Card>
            </div>
        )
    }
}

export default AddReviews