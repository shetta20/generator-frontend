import React from 'react';
import Editor from './Editor';

const Right = (props) =>{

    return(
    <div className='Right'>
        {console.log("Rendering Right")}
        <Editor Response={props.Response} SetResponse={props.SetResponse}/>
        <button className="Button" onClick={()=>props.SetResponse("")}>Clear</button>
    </div>
    );
}

export default Right;
