import React, { useState, useEffect } from 'react';

function useGetListCount(){
    const [count ,setCount]=useState(0);

    useEffect(() => {        
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                result => {
                    setCount(result.length)
                }
        )
    }, []);
   return count;
}
export default useGetListCount;
