import React from "react";
import AddItemForm from "./AddItemForm";
import "./AddItem.css"

function AddItem(props) {
    const SaveDataHandler = (enteredItemData)=>{
        const respondItemData = {
            ...enteredItemData,
            id:Math.random().toString()
        };
        // console.log(respondItemData);
        props.DataToArray(respondItemData);
    };
  return (
    <div className="Add-Item-Wrapper">
      <AddItemForm onSaveItemData={SaveDataHandler} />
    </div>
  );
}

export default AddItem;
