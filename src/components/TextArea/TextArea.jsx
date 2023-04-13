import { useState } from 'react';
import React from 'react';
import './TextArea.scss'

const TextArea = ({handleText}) => {
  // const [text,setText]=useState("");
  // console.log(text.split(/\b\w+\b/g).length-1);
  // console.log(text.length);
  return <textarea className="text-area" placeholder="Paste your text here..." onChange={(e)=>handleText(e.target.value)} autoFocus/>
}

export default TextArea
