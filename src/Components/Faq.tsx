import React,{useState}from 'react';
import RPortal from './Rportal';

function Faq(){

    const [showP , setP]=useState(false)
    let portal=showP? (<RPortal><div id="notification"> lol</div></RPortal>):null;

    const fshow=()=>{ showP? setP(false):setP(true)};
    const toggle=showP? 'Hide Portal' :'Show Portal';

    return(
        <>
        <p>Faq Page</p>
        
        <button onClick={fshow}>{toggle}</button>        
        {portal}
        </>
        
    );
}
export default Faq;
