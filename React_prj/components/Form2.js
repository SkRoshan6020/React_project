import React , { useState } from 'react';

function Form2() {

   // const[name, setName] = useState("");
   //const[srname, setSrname] = useState("");
    const[names, setNames]=useState("");

    const cng=(event) => {
        const name=event.target.name;
        const value=event.target.value;
        setNames(values=>({...values,[name]:value}))
    }

    const sbmt=(event) => {
        event.preventDefault();
        //alert("${name}"); //check karna hai??
    }

    return (
        <form onSubmit={sbmt}> 

            Enter the Name : 
            <input type="text"name="name" value={names.name} onChange={cng} />
            <br/>
            
            Enter the Surname :
            <input type="text"name="srname" value={names.srname} onChange={cng}/>
            <br/>
            <input type='submit'></input>
            <br/>

            Achaa !! Apka Full Name <b>{names.name} {names.srname}</b> hai? Wow!
        </form>
    );
}
export default Form2;