import React from 'react'

const Editor = (props) => {
    const handleChange = (event) => {
        props.SetResponse(event.target.value);
    }

// return(<textarea className='Response' defaultValue={props.Response} value={props.Response} onChange={handleChange}/>);
return(<textarea className='Response' value={props.Response} onChange={handleChange}/>);
}

export default Editor;
