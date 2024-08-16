import {useState} from "react";


function Counter(){
    const [count, setCount] = useState(0);

    return(
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>
                THE COUNT IS:{count}
            </h1>
        </>
    )
}

export default Counter