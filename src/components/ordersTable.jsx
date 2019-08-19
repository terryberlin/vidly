import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
//import Like from "./common/like";

class OrdersTable extends Component {
  columns = [
    {
      path: "purchaseItem",
      label: "Item",
      content: order => (
        <Link to={`/orders/${order._id}`}>{order.purchaseItem}</Link>
      )
    },
    { path: "purchaseItemDescription", label: "Description" },
    { path: "build", label: "Order Build" },
    { path: "estimatedOnHand", label: "Est On Hand" }
  ];

  deleteColumn = {
    key: "delete",
    content: order => (
      <button
        onClick={() => this.props.onDelete(order)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { orders, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={orders}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default OrdersTable;
