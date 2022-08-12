import React from 'react'
import ReactDOM from 'react-dom/client';

export default function Modal(props) {
  const {isOpen} = props;

  if(!isOpen) return null;
  
  return ReactDOM.createPortal(
    <div>
      <h1>This is from modal</h1>
     
    </div>, document.getElementById("portal")
  )
}
