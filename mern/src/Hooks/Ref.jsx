import React, {usestate,useRef,useState } from 'react'; 

const Ref = () => {
    const [count, setCount] = usestate(0);
    const value = useRef(0);
    useEffect(()=> {
        setTimeout(()=>{
            Value.current=value.current+1
        }, 2000);
    });
  return (
        <div>Ref
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <h1>{value.current}</h1>
        </div>
    );
};

export default Ref;
    