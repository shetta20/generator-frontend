import React from 'react'


const KeyInput = (props) => {

    const changebuttonName = (event) => {
        props.setTempKey(event.target.value)
    }


    return(<div>
            <label>Enter the name of the button to be created:</label>
            <input className="input" id='key' type='text' placeholder="Enter button name" onChange={changebuttonName} />
    </div>)

}

export default KeyInput;