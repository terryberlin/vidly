import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
//import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getOrder, saveOrder } from "../services/orderService";
//import { getGenres } from "../services/fakeGenreService";
//import { getGenres } from "../services/genreService";

class OrderForm extends Form {
  state = {
    data: {
      purchaseItem: "",
      purchaseItemDescription: "",
      build: "",
      estimatedOnHand: ""
    },
    //genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    purchaseItem: Joi.string()
      .required()
      .label("PurchaseItem"),
    purchaseItemDescription: Joi.string()
      .required()
      .label("PurchaseItemDescription"),
    build: Joi.number()
      .required()
      .min(0)
      .max(500)
      .label("Build"),
    estimatedOnHand: Joi.number()
      .required()
      .min(0)
      .max(500)
      .label("EstimatedOnHand")
  };

  // async populateGenres() {
  //   const { data: genres } = await getGenres();
  //   this.setState({ genres });
  // }

  async populateOrder() {
    try {
      const orderId = this.props.match.params.id;
      if (orderId === "new") return;

      const { data: order } = await getOrder(orderId);
      this.setState({ data: this.mapToViewModel(order) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    //await this.populateGenres();
    await this.populateOrder();
  }

  mapToViewModel(order) {
    return {
      _id: order._id,
      purchaseItem: order.purchaseItem,
      purchaseItemDescription: order.purchaseItemDescription,
      build: order.build,
      estmatedOnHand: order.estmatedOnHand
    };
  }

  doSubmit = async () => {
    await saveOrder(this.state.data);

    this.props.history.push("/orders");
  };

  render() {
    return (
      <div>
        <h1>Order Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("purchaseItem", "Item")}
          {this.renderInput("purchaseItemDescription", "Description")}
          {this.renderInput("build", "Build")}
          {this.renderInput("estimatedOnHand", "Estimated On Hand")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default OrderForm;
////{this.renderSelect("genreId", "Genre", this.state.genres)}
