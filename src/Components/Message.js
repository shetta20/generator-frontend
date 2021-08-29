import React from 'react'
import { useEffect } from 'react';

const Message = (props) => {

return(
    <div className="Message">
        {console.log("Rendering Message")}
        {props.status === ""? null :props.status === "Key and value cannot empty"?<p className="error">{props.status}</p>:<p className="success">{props.status}</p>}
    </div>
)
}

export default Message;