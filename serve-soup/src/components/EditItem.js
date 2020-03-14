import React from 'react';
import { connect } from 'react-redux';

import { updateItem } from '../actions';

//ReactBootStrap
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditItem extends React.Component {
  state = {
    //create local state
    item: '',
    units: '',
    quantity: 0,
    username: '',
    id: 0

    //add a successfull message when an item is added
  };

  componentDidMount() {
    //set variables for simplicity
    const selectedItem = this.props.match.params.item;
    const products = this.props.inventoryItems;

    //mapping over the itmes to set state
    products.map(item => {
      // console.log('Component did mount', item.id, selectedItem);
      //check if the item id from the URL match the id from the items
      //convert the items.id to string
      if (`${item.id}` === selectedItem) {
        console.log('Inside IF', item.username);
        this.setState({
          item: item.item,
          units: item.units,
          quantity: item.quantity,
          // set item id to the id from the url to pass to the endpoint in actions
          id: selectedItem,
          //set user from the local storage to pass to the endpoint in actions
          username: localStorage.getItem('username')
        });
      }
      return null;
    });
  }

  //handler for input fields
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateHandler = e => {
    e.preventDefault();
    this.props.updateItem(
      {
        ...this.state
      },
      { ...this.props }
    );
    this.setState({
      item: '',
      units: '',
      quantity: 0
    });
  };

  render() {
    return (
      <div className="add-item-container">
        <h2>Edit item</h2>
        <Form onSubmit={this.updateHandler}>
          <FormGroup>
            <Label for="Item Name">Item Name</Label>
            <Input
              type="text"
              name="item"
              placeholder="Item Name"
              value={this.state.item}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="select"
              name="units"
              value={this.state.units}
              onChange={this.changeHandler}
            >
              <option hidden>{`${this.state.units}`}</option>
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
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
//create mapStateToProps
const mapStateToProps = state => {
  return {
    inventoryItems: state.inventoryItems,
    userName: state.userName
  };
};

//use connect
export default connect(
  mapStateToProps,
  { updateItem }
)(EditItem);
