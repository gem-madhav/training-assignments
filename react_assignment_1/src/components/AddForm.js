import React, { useState } from "react";

const AddForm = ({handleAddItem}) => {
  const [textInput, setTextInput] = useState("");

  const textInputChangeHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (textInput.trim() == 0) {
      alert("Enter Something!");
      return;
    }

    handleAddItem(textInput);
    setTextInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="text"
        onChange={textInputChangeHandler}
        value={textInput}
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddForm;
