import React, { useEffect, useState } from 'react';

const ActionPanel = (props) => {
    const [tempKey,setTempKey] = useState('');
    const [tempValue,setTempValue] = useState('');
    const [status,setStatus] = useState('')

    useEffect(() => {
        setTimeout(() => setStatus(''), 7000);
      });

    const changebuttonName = (event) => {
        setTempKey(event.target.value)
    }

    const changebuttonContent = (event) => {
        setTempValue(event.target.value)
    }

    const isNullOrWhitespace = ( input ) => {
        if (typeof input === 'undefined' || input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    const  addToList = async () => {
        console.log("Printing selecttion:",props.dropSelect)
        if(props.dropSelect === 'response')
        {
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { userid:'1',key:tempKey,value:tempValue,type:'intercom',product:'opsgenie'}
                await fetch('http://localhost:3001/response', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        });
            setStatus('Response Added successfully')
            // response = await response.json();
            // console.log("rETURNED")
            // props.buildList.push(data)
            // props.setbuildList(props.buildList)
            }
            else
            {
                setStatus('Key and value cannot empty')
            }

        }
        else{
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { userid:'1',key:tempKey,value:tempValue,product:'opsgenie'}
                await fetch('http://localhost:3001/canned', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        });
                setStatus('Canned response Added successfully')
                // response = await response.json();
                // console.log("rETURNED")
                // props.buildList.push(data)
                // props.setbuildList(props.buildList)
            }
            else{
                setStatus('Key and value cannot empty')
            }

        }

    }

    const  handledropSelect = (event) => {
        props.setdropSelect(event.target.value)
    }

    return(
    <div className="ActionPanel">
        {console.log("Rendering ActionPanel")}
        {status === ""? null :status === "Key and value cannot empty"?<p className="error">{status}</p>:<p className="success">{status}</p>}

            <label>Select the type of response you wish to add:</label>
            <select className="select" defaultValue="response" onChange={handledropSelect}>
                <option value="response">Response</option>
                <option value="canned">Canned</option>
            </select>

            <label>Enter the name of the button to be created:</label>
            <input className="input" id='key' type='text' placeholder="Enter button name" onChange={changebuttonName} />

            <label>Enter the value of the button:</label>
            <textarea className="textarea" cols="50" rows="30" id='value' type='text' placeholder="Enter button value" onChange={changebuttonContent} />
            <button className="Button" onClick={()=> addToList()}>Add Button</button>
        
    </div>
    )
}

export default ActionPanel;