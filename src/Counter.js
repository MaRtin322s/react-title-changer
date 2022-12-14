import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);
    const [title, setTitle] = useState("Click (1)");

    useEffect(() => {
        setTitle(title => `Click ${count}`);
    }, [count]);

    const clickHandler = () => {
        setCount(state => state + 1);
    }

    return (
        <>
            <h1>Count ({count})</h1>
            <button onClick={clickHandler}>Click ({count})</button>
        </>
    );
}

export default Counter;