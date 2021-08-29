import React from 'react';

const VertItem = (props) =>{
    const setTray = () => {
        console.log(props.item)
        if(props.item === 'Build')
            props.changeTray('buildScreen')
        else if(props.item === "Add button")  
            props.changeTray('addButton')
        else if(props.item === 'Canned')
            props.changeTray('canned')
        else if(props.item === 'noteHolder')
            props.changeTray('noteHolder')
    }
    
    return(
    <div className='VertItem' onClick={()=>setTray()}>
        <p>{props.name}</p>
    </div>
    );
}

export default VertItem;
