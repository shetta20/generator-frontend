import React from 'react';

const VertItem = (props) =>{
    const setTray = () => {
        console.log(props.item)
        if(props.item === 'Build')
            props.changeTray('buildScreen')
        else if(props.item === "Add button")  
            props.changeTray('addButton')
        else
            props.changeTray('canned')
    }
    return(
    <div className='VertItem' onClick={()=>setTray()}>
        <p>{props.name}</p>
    </div>
    );
}

export default VertItem;
