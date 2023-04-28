import React from "react";

const OrderHistory = (props) => {
  const { orders } = props;

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orders.map((order) => (
        <div className="order" key={order.id}>
          <div className="order-details">
            <div className="order-number">Order #{order.id}</div>
            <div className="order-date">Date: {order.date}</div>
            <div className="order-total">Total: {order.total}</div>
          </div>
          <div className="order-items">
            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                <div className="item-name">{item.name}</div>
                <div className="item-quantity">Quantity: {item.quantity}</div>
                <div className="item-price">Price: {item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
