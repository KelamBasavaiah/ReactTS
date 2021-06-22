import React, { useContext, useReducer,useMemo } from 'react';

const initialState = { count: 0 };

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ExContext = React.memo(({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = React.useState('intial');
  //console.log('Render:Ex context');
  const memoizedValue = useMemo(() => text+' lol', [state,text]);
  return (
    <>
    <div >
        {/* <button onClick={()=>setText(sign)}>Call</button> */}
        <p>Call bcak text {text} and use memo {memoizedValue}</p>
      </div>
      
      Reducer Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      
    </>
  );
});

export default ExContext;


