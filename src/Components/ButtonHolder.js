import React from 'react';
import Button from './Button';
import { useEffect } from 'react';
import { data } from 'browserslist';

const ButtonHolder = (props) => {

    useEffect(() => {
        fetch('http://localhost:3001/response').then(data => data.json()).then(data => {props.setbuildList(data)})
        console.log("Running use effect:",data)
      },[]);

    return(
    <div className='ButtonHolder'>
        {console.log("Rendering Button Holder")}
        {props.buildList.length !== 0?
        props.buildList.map((item,key) => 
            {
                return(<Button 
                            Response={props.Response} 
                            SetResponse={props.SetResponse} 
                            buttonName={item.key} 
                            buttonValue={item.value} 
                            key={key}
                            tray={props.tray}
                            />
                            )
            }
        ):<div><p className="info">Looks like there are no responses, Click on the 'Add Button' option on the vertical nav bar to add a response</p></div>}   
        
    </div>
    )
}

export default ButtonHolder;