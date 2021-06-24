import React, { useState } from 'react';
import '../CssModules/form.css'

export interface details{
   form:{ name:string;
    mobile:number;
    mail:string;
    language:[];
    city:string;
    gender:string},
    errors:{
        name:string;
        mobile:number;
        mail:string;
        language:string;
        city:string;
        gender:string
    }
};
const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
];


function Detailsform() {
    const [Form ,setForm]=useState<details>();
   
  const userInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value, checked } = e.target;
   setForm((prev)=>{
       return prev;
   })
   console.log(name,value,checked,Form)
  }
   const submitForm=()=>{
 alert(Form);
   }
    return (        
        <div id='deatilsForm'>
            <p>Deatils Form</p>
            <ul>
                <li>
                    <label>Name : </label>
                    <input type="text" name="name" value={Form?.form.name} onChange={userInput} />
                </li>
                <li>
                    <label>mobile: </label>
                    <input type="number" value={Form?.form.mobile} />
                </li>
                <li>
                    <label>mail: </label>
                    <input type="text" />
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
                                />{" "}
                                {x.label}
                            </label>
                        );
                    })}
                </li>

                <li>
                    <label>city : </label>
                    <select name="city" id="city" >
                        <option value="HYD">HYD</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </li>
                <li>
                    <label>Gender : </label>
                    <input type="radio" id="male" value="male" name="gender" />
                    <label htmlFor="male" >Male</label>
                    <input type="radio" id="female" value="female" name="gender" />
                    <label htmlFor="female" >Female</label>
                </li>
            </ul>
            <button value="Submit" >Submit</button>
        </div>
    );
}
export default Detailsform;