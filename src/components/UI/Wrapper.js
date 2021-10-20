import React from "react";
import Item from "../Item";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <>
      <div className="wrapper" key={props.id} value={props.id}>
        {props.data.map((result) => {
          return (
            <Item
              key={props.id}
              value={props.id}
              date={result.date}
              title={result.title}
              price={result.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Wrapper;
