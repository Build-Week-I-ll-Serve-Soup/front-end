import React from 'react';

//importing reactstrap components
import { Table, Badge } from 'reactstrap';

//importing connect
import { connect } from 'react-redux';

//Importing deleteitem from actions
import { deleteItem, getItems } from '../actions';

//importing link from react-router-dom to redirect when the edit button is pressed
import { Link } from 'react-router-dom';

class InventoryList extends React.Component {
  state = {
    inventoryItems: []
  };

  deleteHandler = item => {
    console.log('Index to delete:', item);
    this.props.deleteItem(item, { ...this.props });
  };

  componentDidMount() {
    this.props.getItems(localStorage.getItem('username'));
    this.setState({
      inventoryItems: this.props.inventoryItems
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.inventoryItems === prevProps.inventoryItems) {
      this.props.getItems(localStorage.getItem('username'));
    }
  }

  render() {
    return (
      <div className="inventory-list-container ">
        <h2>Inventory List</h2>
        <Table>
          <thead>
            <tr>
              <th>
                <strong>Quantity</strong>
              </th>
              <th>
                <strong>Item Name</strong>
              </th>
              <th>
                <strong>Category</strong>
              </th>
              <th>
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          {this.props.inventoryItems.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">
                  <Badge
                    pill
                    /* This will color the quantity pill based on the
                    current ammount if is less than 5 will show color yellow and if less than 3 red
                     */
                    color={`${
                      item.quantity > 3
                        ? item.quantity > 5
                          ? ' '
                          : 'warning'
                        : 'danger'
                    }`}
                  >
                    {item.quantity}
                  </Badge>
                </th>
                <td>{item.item}</td>
                <td>{item.units}</td>
                <td>
                  {/* When click edit the index will be pass in the url */}
                  <Link to={`/protected/edititem/${item.id}`}>
                    <i className="far fa-edit" />
                  </Link>
                  <i
                    onClick={() => this.deleteHandler(item)}
                    className="far fa-trash-alt"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <Link
          to="/protected/addItem"
          className="PageSwitcher__Item__Button"
        >
          + Add item
        </Link>
      </div>
    );
  }
}

//create mapStateToProps
const mapStateToProps = state => {
  return {
    inventoryItems: state.inventoryItems
  };
};

//Remember to use connect
export default connect(
  mapStateToProps,
  { deleteItem, getItems }
)(InventoryList);
