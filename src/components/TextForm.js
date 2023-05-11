import React, {useState} from 'react'
export default function TextForm(props) {
    let handleUpOnchange=(event)=>{
        setText(event.target.value);
    }
    let handleUpOnClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        newText===""?props.showAlert('Enter some text','danger'):props.showAlert('Converted To UpperCase','success')
    }
    let handleLoOnClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      newText===""?props.showAlert('Enter some text','danger'):props.showAlert('Converted To LowerCase','success')
  }
    let handleClOnClick=()=>{
     setText('')
  }
  let handleReOnClick=()=>{
    const revArray=[];
    for(let i =text.length-1; i >= 0; i--) {
      revArray.push(text[i]);
  }
    setText(revArray.join(''))
    text===""?props.showAlert('Enter some text','danger'):props.showAlert('Text reversed','success')
}
let handlecopyText=()=>{
  var text=document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert('Text copied to clipboard','success')
}
  
    const [text,setText] =useState("")
  return (
    <>
<div className={`container my-3`}>
<textarea className={`form-control text-${props.mode==='white'?'black':'light'}`} style={{backgroundColor:`transparent`}} value={text} onChange={handleUpOnchange} id="myBox" rows="6" ></textarea>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpOnClick}>Convert to UPPERCASE</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLoOnClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleReOnClick}>Reverse</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClOnClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handlecopyText}>Copy Text</button>
</div>
<div className={`container text-${props.mode==='white'?'black':'light'}`} id='myBox'>
  <h1>Your Text Summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.replace(/ /g,"").length} Charachters</p>
  <p>{0.004*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes requires to read</p>
  <h2>Preview</h2>
  <div className="container">
  <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
</div>
    </>
  )
}
