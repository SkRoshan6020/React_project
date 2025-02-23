import React, { useEffect, useState } from 'react';

function Hook3() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title= ("You Clicked " +count);
    }
    );

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
            </button>  
        </div>
    );
}

export default Hook3;