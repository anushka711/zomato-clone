import React from "react";
import "./deliveryitem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.cover}
          alt={item.title}
          className="delivery-item-image"
        />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
};

const OrderAgainItem = ({ item }) => {
  return (
    <div>
      <div className="orderagain-item-cover">
        <img
          src={item.cover}
          alt={item.title}
          className="orderagain-item-image"
        />
      </div>
      <div className="orderagain-item-title">{item.title}</div>
    </div>
  );
};

const CollectionItems = ({ item }) => {
  return (
    <div>
      <div className="collectionitem-item-cover">
        <img
          src={item.cover}
          alt={item.title}
          className="collectionitem-item-image"
        />
      </div>
      <div className="collectionitem-item-title">{item.title}</div>
    </div>
  );
};

export { DeliveryItem, OrderAgainItem, CollectionItems };
