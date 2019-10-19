import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

class EditReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      author:'',
      rating: '',
      review: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.toggle()
    this.props.updateReviews(this.props.id, this.state)
   
}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Review</ModalHeader>
          <ModalBody>
              <div>
              <Form onSubmit={this.handleSubmit}>
                <h4>Change Info Below</h4>
                <label htmlFor='title'>Edit Title:</label>
                <input type='text' name='title' placeholder='Title' onChange={this.handleChange} />
                <br></br>
                <label htmlFor='author'>Edit Author:</label>
                <input type='text' name='author' placeholder='Author' onChange={this.handleChange} />
                <br></br>
                <label htmlFor='rating'>Edit Rating:</label>
                <input type="text" name='rating' placeholder='Rating' onChange={this.handleChange}></input>
                <br></br>
                <label htmlFor='review'>Edit Review:</label>
                <input type="text" name='review' placeholder="Edit Review" onChange={this.handleChange}></input>
                <Button color="secondary" type='submit'>Edit Review</Button>
            </Form>
              </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditReviews;