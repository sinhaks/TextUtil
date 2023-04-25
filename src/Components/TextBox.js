import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    console.log("UpperCase button was clicked");
    setText(text.toUpperCase());
    console.log("text changed to uppercase");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const textBoxClick = () => {
    if (text==="Enter Text Here")
    setText("");
  };

  const textBoxClickChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
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
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mins to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
