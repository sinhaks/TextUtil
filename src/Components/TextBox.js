import React from 'react'

export default function TextBox(props){
    return(
        <div>
            <h2>{props.heading}</h2>
        <div className="mb-3">
  <textarea className="form-control" id="textBox" rows="7"></textarea>
</div>
</div>
    )
}
