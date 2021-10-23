import React from "react";
import Item from "../Item";
import "./Wrapper.css";
import logo from "./no-data.jpg";

function Wrapper(props) {
  return (
    <>
      {props.data.length === 0 ? (
        <div className="error-wrapper">

          <img src={logo} alt="img here" className="logo" />
          <p>No Expense Found! </p>
        </div>
        
      ) : (
        <div className="wrapper">
          {props.data.map((result, index) => {
            return (
              <Item
                key={index}
                date={result.date}
                title={result.title}
                price={result.price}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Wrapper;
