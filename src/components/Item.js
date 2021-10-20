import React from "react";
import "./Item.css";

function Item(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="item-wrapper" key={props.id} value={props.id}>
      <div className="left">
        <p>
          <strong>{month}</strong>
        </p>
        <p>{date}</p>
        <p>{year}</p>
      </div>
      <div className="mid">
        <p className="mid-content">{props.title}</p>
      </div>
      <div className="right">
        <p>
          <strong>${props.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Item;
