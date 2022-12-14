import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        document.title = `Click (${count})`;
    }, [count]);

    const clickHandler = () => {
        setCount(state => state + 1);
    }

    return (
        <div className="App">
            <section className="hero">
                <div className="hero-body">
                    <p className="title">A React Task</p>
                    <p className="subtitle">by Boom.dev</p>
                </div>
            </section>
            <div className="container is-fullhd">
                <div className="notification">
                    Edit the <code>./src</code> folder to add components.
                </div>
            </div>
            <button onClick={clickHandler}>Click ({count})</button>
        </div>
    );
}

export default App;
