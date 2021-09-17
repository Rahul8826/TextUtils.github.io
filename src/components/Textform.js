import React,  {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        //console.log("clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = ()=>{
        //console.log("clicked" + text);
        let newText ='';
        setText(newText);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success");
    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnchange = (event)=>{
        //console.log("changed");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
             <div className="mb-3">
               <h2>{props.heading}</h2>
                  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="7"></textarea>
                    </div>
                    <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Changed to uppercase</button>
                    <button className = "btn btn-primary mx-2" onClick={handleLoClick}>Changed to lowercase</button>
                    <button className = "btn btn-primary mx-2" onClick={handleclearClick}>ClearText</button>
                    <button className = "btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className = "btn btn-primary mx-2" onClick={handleSpaces}>Remove extra spaces</button>
                    
                      </div>
         <div className="container my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
             <h3>Your text summary</h3>
             <p>{text.split(" ").length} words and {text.length} characters.</p>
             <p>{0.008 * text.split(" ").length} Minutes to read</p>
             <h5>Preview</h5>
             <p>{text}</p>

         </div>
         </>
    )
}
