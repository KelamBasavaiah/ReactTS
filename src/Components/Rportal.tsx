import React ,{useEffect}from 'react';
import { render, createPortal } from 'react-dom';

function RPortal(props:any){
    const modalRoot = document.getElementById("Portal") as HTMLElement;
     let el = document.createElement('div');
     useEffect(() => {
        modalRoot.appendChild(el)
        return () => {
           modalRoot.removeChild(el);
        }
      }, []);
    return createPortal(      
     props.children,
       el,
      );
}
export default RPortal;
