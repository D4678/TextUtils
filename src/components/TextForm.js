import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard", "success")
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');  //  This is Array Destructring

    // text = "new text" // wrong way to change the stste
    // setText ("new text") // Correct way to change the state

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} id="myBox" rows="9"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}> Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}> Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}  Minutes Read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}