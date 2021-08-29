import React from 'react'

const KeyValue = (props) => {

    const changebuttonContent = (event) => {
        console.log("changebuttonContent Causing Render")
         props.setTempValue(event.target.value)
    }

    return (<div className="KeyValue">
            <label>Enter the value of the button:</label>
            <textarea className="textarea" cols="50" rows="30" id='value' type='text' placeholder="Enter button value" onChange={changebuttonContent} />
    </div>)
}

export default KeyValue;