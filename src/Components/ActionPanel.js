import React, { useEffect, useState } from 'react';
import DropDown from './DropDown';
import KeyInput from './KeyInput';
import KeyValue from './KeyValue';
import Message from './Message';

const ActionPanel = (props) => {
    const [tempKey,setTempKey] = useState('');
    const [tempValue,setTempValue] = useState('');
    const [status,setStatus] = useState('')

    useEffect(() => {
        if(status!=='')
            setTimeout(()=>{setStatus('')},3000)
      },[tempKey,tempValue,status]);

    const isNullOrWhitespace = ( input ) => {
        if (typeof input === 'undefined' || input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    const  addToList = () => {
        console.log("Printing selecttion:",props.dropSelect)
        if(props.dropSelect === 'response')
        {
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { "userid":'1',"key":tempKey,"value":tempValue,type:"intercom",product:'opsgenie'}
                let myresp = fetch('http://localhost:3001/response', {
                        method: 'POST',
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        }).then(resp => console.log("You should see the data:",resp))
            console.log("Status Causing Render")
            setStatus('Response Added successfully')
            }
            else
            {
                console.log("Status Causing Render")
                setStatus('Key and value cannot empty')
            }

        }
        else{
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { userid:'1',key:tempKey,value:tempValue,product:'opsgenie'}
                fetch('http://localhost:3001/canned', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        });
                console.log("Status Causing Render")
                setStatus('Canned response Added successfully')
            }
            else{
                console.log("Status Causing Render")
                setStatus('Key and value cannot empty')
            }

        }

    }



    return(
    <div className="ActionPanel">
        <Message status={status} setStatus={setStatus}/>
        <DropDown setdropSelect={props.setdropSelect}/>
        <KeyInput setTempKey={setTempKey}/>
        <KeyValue setTempValue={setTempValue}/>
        <button className="Button" onClick={()=> addToList()}>Add Button</button>
    </div>
    )
}

export default ActionPanel;