import React,{useRef,useEffect} from 'react';
import ExContext from './ExContext';

const EContext = React.createContext(3);
function Home() {
    const [text, setText] = React.useState('');
    const [text1, setText1] = React.useState('');
    //console.log('Render:Home ');
    const handleText = (event:any) => {setText(event.target.value);};
    const handleText1 = (event:any) => {setText1(event.target.value);};

    const addSignature=React.useCallback(()=>{return text+' KB';},[text]);
    const inputRef = useRef();
   // useEffect(() => {inputRef.current.focus();}, []);
   interface sign {
    bio: string,
    open: boolean,
  }
    return (
        <EContext.Provider value={6}>
            <p>Home Page</p>
            <div >
                <input type="text"  value={text} onChange={handleText} placeholder='memo ex' />
                <input type="text" value={text1} onChange={handleText1} placeholder='call back support' />
            </div>
            <ExContext />
            
        </EContext.Provider>

    );
}
export default Home;
