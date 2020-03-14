import React from 'react';
import { connect } from 'react-redux';

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
// import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { addItem } from '../actions';

class AddItemForm extends React.Component {
  state = {
    //create local state
    itemName: '',
    category: '',
    quantity: 0,
    username: ''
    //add a successfull message when an item is added
  };

  componentDidMount() {
    this.setState({
      username: localStorage.getItem('username')
    });
  }

  //handler for input fields
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    console.log('Fetching status: ', this.props.isFetching);
    e.preventDefault();
    // console.log("Category:", this.state.category);
    this.props.addItem({
      item: this.state.itemName,
      units: this.state.category,
      quantity: this.state.quantity,
      username: this.state.username
    });
    this.setState({
      itemName: '',
      category: '',
      quantity: 0
    });
  };

  render() {
    // if (this.props.addingItem) {
    //   return <Alert color="success">New item added successfully!</Alert>;
    // }
    return (
      <div className="add-item-container">
        <h2>Add item</h2>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label for="Item Name">Item Name</Label>
            <Input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={this.state.itemName}
              onChange={this.changeHandler}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="select"
              name="category"
              value={this.state.category}
              onChange={this.changeHandler}
              required
            >
              <option hidden>Select</option>
              <option>Canned goods</option>
              <option>Dairy</option>
              <option>Dry Goods</option>
              <option>Spices/Herbs</option>
              <option>Produce</option>
              <option>Beverage</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input
              type="select"
              name="quantity"
              value={this.state.quantity}
              onChange={this.changeHandler}
            >
              <option hidden>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </FormGroup>

          {/* Display a successful message if item was created or the button */}
          {this.props.addingItem ? (
            <Alert color="success">New item added successfully!</Alert>
          ) : (
            <Button>Submit</Button>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    addingItem: state.addingItem
  };
};

//use connect
export default connect(
  mapStateToProps,
  { addItem }
)(AddItemForm);
