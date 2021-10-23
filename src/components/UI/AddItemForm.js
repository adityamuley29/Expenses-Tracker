import React, { useState } from "react";
import "./AddItemForm.css";

function AddItemForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandeler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ItemData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveItemData(ItemData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="AddItem-Controls">
        <div className="inputBoxs">
          <div className="AddItem-contral">
            <label>Title</label>
            <input
              type="text"
              required
              value={enteredTitle}
              placeholder="Enter Title..."
              onChange={titleChangeHandeler}
            />
          </div>
          <div className="AddItem-contral">
            <label>Amount</label>
            <input
              placeholder="Enter Amount.."
              type="number"
              required
              min="0.1"
              step="0.1"
              value={enteredAmount}
              onChange={amountChangeHandeler}
            />
          </div>
          <div className="AddItem-contral">
            <label>Date</label>
            <input
              type="date"
              required
              value={enteredDate}
              onChange={dateChangeHandeler}
            />
          </div>
        </div>
        <div className="AddItem-actions">
          <button type="submit">Add Item</button>
        </div>
      </div>
    </form>
  );
}

export default AddItemForm;
