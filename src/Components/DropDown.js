import React from 'react'


const DropDown = (props) => {

    const  handledropSelect = (event) => {
        console.log("handledropSelect Causing Render")
        props.setdropSelect(event.target.value)
    }
    return(    <div className="DropDown">
    <label>Select the type of response you wish to add:</label>
    <select className="select" defaultValue="response" onChange={handledropSelect}>
        <option value="response">Response</option>
        <option value="canned">Canned</option>
    </select>
</div>)

}

export default DropDown;