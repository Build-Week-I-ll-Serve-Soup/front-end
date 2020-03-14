import React from "react";

//importing components
import AddItemForm from "./AddItemForm";
import InventoryList from "./InventoryList";
import NavBar from "./NavBar";
import EditItem from "./EditItem";

//implementing routing
import { Route } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="protected">
        <NavBar />
        <Route exact path="/protected" render={props => <InventoryList {...props} />} />
        <Route path="/protected/addItem" component={AddItemForm} />
        <Route path="/protected/edititem/:item" component={EditItem} />
      </div>
    );
  }
}

export default HomePage;
