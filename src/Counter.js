import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        document.title = `Click (${count})`;
    }, [count]);

    const clickHandler = () => {
        setCount(state => state + 1);
    }

    return (
        <>
            <button onClick={clickHandler}>Click ({count})</button>
        </>
    );
}

export default Counter;