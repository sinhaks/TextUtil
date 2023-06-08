import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    // console.log("UpperCase button was clicked");
    setText(text.toUpperCase());
    // console.log("text changed to uppercase");
    props.showAlert('Text is converted to UpperCase', 'success')
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Text is converted to LowerCase', 'success')
  };

  const textBoxClick = () => {
    if (text === "Enter Text Here") setText("");
  };

  const textBoxClickChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert('Textbox is Empty', 'warning')
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text is Copied', 'success')
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            onClick={textBoxClick}
            onChange={textBoxClickChange}
            value={text}
            rows="7"
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length-1} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} mins to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
