import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpclick=()=>{
                // console.log("UpperCase was clicked"+text);
                let newText=text.toUpperCase();
                setText(newText)
                props.showAlert("converted to Upper Case ","success");
    }
    const handleLoclick=()=>{
                // console.log("UpperCase was clicked"+text);
                let newText=text.toLowerCase();
                setText(newText)
                props.showAlert("converted to Lower Case ","success");
    }
    const handleClearclick=()=>{
                // console.log("UpperCase was clicked"+text);
                let newText='';
                setText(newText)
                props.showAlert("Text is clear now ","success");
    }
    const handleonchange=(event)=>{
        console.log("on cahnge");
        setText(event.target.value);
    }
    const [text,setText]= useState("");
  return (
    <>
    <div classname="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
   
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text}  onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox1" rows="6"></textarea>
</div>
<button className="btn btn-primary  mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
    </div>
    <div className="container my-3"  style ={{color: props.mode==='dark'?'white':'#042743'}}>
        <h4>your text updation</h4>
        <p>{text.split(" ").length}words , {text.length}cahracters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
