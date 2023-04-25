import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    console.log("UpperCase button was clicked");
    setText(text.toUpperCase());
    console.log("text changed to uppercase");
  };

  const textBoxClick = () => {
    if (text==="Enter Text Here")
    setText("");
  };

  const textBoxClickChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textBox"
          onClick={textBoxClick}
          onChange={textBoxClickChange}
          value={text}
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
