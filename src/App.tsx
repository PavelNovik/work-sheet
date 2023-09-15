import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {NewComponent} from "./NewComponent";
// import Button from "./components/Button";
// import button from "./components/Button";
import {NewComponent} from "./components/NewComponent";

export type FilterType = "All" | "Dollars" | "RUBLS"
type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type MoneyData = Array<MoneyType>

function App() {

    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(event)
    // }

    // const foo1 = () => {
    //     console.log("hello from foo 1 - 100200")
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }
    // const onClickHandler1 = (str: string, age: number) => {
    //     console.log(str, ' ', age)
    // }
    // const onClickHandler2 = (str: string) => {
    //     console.log(str)
    // }
    // const onClickHandler3 = () => {
    //     console.log('Im a stupid button')
    // }

    // let currentNumber = 1
    // let [curNum, setCurNum] = useState(1)
    // const addToNum = () => {
    //     // ++currentNumber
    //     setCurNum(++curNum)
    //     console.log(curNum)
    // }
    // const setZero = () => {
    //     setCurNum(0)
    // }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney: MoneyData = money

    if (filter === "Dollars") {
        currentMoney = money.filter((el) => el.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter((el) => el.banknots === "RUBLS")
    }
    const onClickHandler = (currency: FilterType) => {
        setFilter(currency)
    }

    return (
        <div className="App">
            <NewComponent money={currentMoney} onClickHandler={onClickHandler}/>
            {/*<NewComponent money={currentMoney}/>*/}
            {/*<ul>*/}
            {/*    {currentMoney.map((objectFromMoneyArray, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>- {objectFromMoneyArray.banknots} -</span>*/}
            {/*                <span>- {objectFromMoneyArray.value} -</span>*/}
            {/*                <span>- {objectFromMoneyArray.number} -</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<button onClick={() => onClickHandler("All")}>All</button>*/}
            {/*<button onClick={() => onClickHandler("Dollars")}>Dollars</button>*/}
            {/*<button onClick={() => onClickHandler('RUBLS')}>RUBLS</button>*/}
            {/*<Button name={"All"} callBack={resetCurrentMoney}/>*/}
            {/*<Button name={"Dollars"} callBack={() => onClickHandler("Dollars")}/>*/}
            {/*<Button name={"RUBLS"} callBack={() => onClickHandler("RUBLS")}/>*/}
            {/*<h1>{curNum}</h1>*/}
            {/*<Button name={'Add 1'} callBack={addToNum}/>*/}
            {/*<Button name={'Reset'} callBack={setZero}/>*/}
            {/*<NewComponent/>*/}
            {/*<Button name={'My chanel - 1'} callBack={() => onClickHandler1("Pawiel", 21)}/>*/}
            {/*<Button name={'My chanel - 2'} callBack={() => onClickHandler2("Nowik")}/>*/}
            {/*<Button name={'My chanel - 3'} callBack={onClickHandler3}/>*/}
            {/*<button onClick={() => onClickHandler("name")}>First btn</button>*/}
            {/*<button onClick={myFirstSubscriber}>Second btn</button>*/}
            {/*<button onClick={(event) => {console.log("hello")}}>Second btn</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}
        </div>
    );
}

export default App;
