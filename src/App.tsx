import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(event)
    // }
    const onClickHandler = (name: string) => {
console.log(name)
    }
    return (
        <div className="App">
            {/*<NewComponent/>*/}
            <button onClick={() => onClickHandler("name")}>First btn</button>
            {/*<button onClick={myFirstSubscriber}>Second btn</button>*/}
            {/*<button onClick={(event) => {console.log("hello")}}>Second btn</button>*/}
        </div>
    );
}

export default App;
