import React from 'react';

const Button = (props) => {
    const changeDefault = (SetResponse) => {
        if(props.buttonName === 'Clear')
        {
            SetResponse("")
        }
        else
        {
            console.log("Here:",props.changeTray)
            if(props.tray === "buildScreen")
                SetResponse(props.Response + props.buttonValue)
            else    
                SetResponse(props.buttonValue)
        }        
    }

    return(
        <div className='Button' onClick={()=>changeDefault(props.SetResponse)}>
            {props.buttonName}
        </div>

    )
}

export default Button;