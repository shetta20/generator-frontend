import React, { useState } from 'react';
import Button from './Button';
import { useEffect } from 'react';
import { data } from 'browserslist';

const Canned = (props) => {

    const [Loading,setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3001/canned').then(data => data.json()).then(data => {props.setcannedList(data);setLoading(false)})
        console.log("Running use effect:",data)
      },[]);

    return(
    <div className='ButtonHolder'>
        {console.log("Rendering Canned:")}

        {Loading === true?<div><p className="loading">Your resposes are Loading....</p></div>:
        props.cannedList.length !== 0? 
        props.cannedList.map((item,key) => {
            return(<Button Response={props.Response} SetResponse={props.SetResponse} buttonName={item.key} buttonValue={item.value} key={key} tray={props.tray}/>)
        }):<div><p className="info">Looks like there are no Canned responses, Click on the 'Add Button' option on the vertical nav bar to add a response</p></div>
        }
    </div>
    )
}

export default Canned;