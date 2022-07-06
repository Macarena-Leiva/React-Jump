import React, {useState} from 'react';


export function App(){
  const [count, setCount] = useState(0);


  return (
      <div className="btnMasMenos">

          <button onClick={() => setCount(count-1)}>-</button>

          <span>{count}</span>

          <button onClick={() => setCount(count+1)}>+</button>
      </div>
  )
}

