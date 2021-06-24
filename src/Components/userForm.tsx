import React, { useState } from 'react';
import '../CssModules/form.css'
import formModel from '../models/formModel'


const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
];

const UserForm =()=>{
  
 const [form ,setForm]=useState<formModel>();
 let uform=new formModel();
 

 function inputChange(e:React.ChangeEvent<HTMLInputElement>){
    const { name, value, checked } = e.target;    
    switch(name)    {
        case "name":
            uform.name=value;
            break;
        case "mobile":
             uform.mobile=+value;
             break;
        case "mail":
            uform.mail=value;
             break; 
        case "language":
           // console.log(name,value,checked)
            if(checked){uform.language?.push(value)}
            else {uform.language?.filter(x=> x!==value)}
            break;
        case "gender":
            if(checked){uform.gender=value}
            break;
        default:
            break;
    }
    
 }
 
 const submitForm=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
     console.log(uform)
     alert(JSON.stringify(uform))
     setForm(uform);      
     //document.getElementById("iform").reset();
 }

    return (        
        <div id='deatilsForm'>
            <p>Deatils Form</p>
            <form id="iform" onSubmit={submitForm}>
            <ul>
                <li>
                    <label>Name : </label>
                    <input type="text" name="name" value={uform.name} onChange={inputChange} />
                </li>
                <li>
                    <label>mobile: </label>
                    <input type="number" name="mobile" value={uform.mobile}  onChange={inputChange} />
                </li>
                <li>
                    <label>mail: </label>
                    <input type="text" name="mail" value={uform.mail} onChange={inputChange}/>
                </li>
                <li>
                <label>Language : </label>
                    {languageList.map((x, i) => {
                        return (
                            <label key={i} >
                                <input
                                    type="checkbox"
                                    name="language"
                                    value={x.value}
                                    checked={uform.language?.includes(x.value)}
                                    onChange={inputChange}
                                />{" "}
                                {x.label}
                            </label>
                        );
                    })}
                </li>

                <li>
                    <label>city : </label>
                    <select name="city" id="city"  onChange={(e)=>uform.city=e.target.value} >
                        <option >None</option>
                        <option value="HYD">HYD</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </li>
                <li>
                    <label>Gender : </label>
                    <input type="radio" id="male" value="male" name="gender" onChange={inputChange}/>
                    <label htmlFor="male" >Male</label>
                    <input type="radio" id="female" value="female" name="gender" onChange={inputChange}/>
                    <label htmlFor="female" >Female</label>
                </li>
            </ul>
            <button value="Submit" >Submit</button>
            </form>
        </div>
    );
}

export default UserForm;