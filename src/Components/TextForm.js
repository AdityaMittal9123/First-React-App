import React , {useState} from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor: 'black'
    });
    const handleUpClick = () => {
        //console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const [btnText, setBtnText] = useState("Enable Light Mode")
    const toggleMode = () => {
        if(myStyle.color=='white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }
    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value);// this is basically used to handle the event 
    }
    const [text, setText] = useState('Enter text here');
    //text="new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter the text here</label> */}
        <textarea className="form-control my-2" style={myStyle} value ={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary " onClick={toggleMode}>{btnText}</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>
    </>
  )
}
