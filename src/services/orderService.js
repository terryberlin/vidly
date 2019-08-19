import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/orders";

function OrderUrl(id) {
  //return apiEndpoint + "/" + id;
  return `${apiEndpoint}/${id}`;
}

export function getOrders() {
  return http.get(apiEndpoint);
}

export function getOrder(orderId) {
  return http.get(OrderUrl(orderId));
}

export function saveOrder(order) {
  if (order._id) {
    const body = { ...order };
    delete body._id;
    return http.put(OrderUrl(order._id), body);
  }

  return http.post(apiEndpoint, order);
}

export function deleteOrder(orderId) {
  return http.delete(OrderUrl(orderId));
}
