import React from 'react';
import button from "./Button";

import {FilterType, MoneyData} from "../App";

type NewComponentPropsType = {
    money: MoneyData
    onClickHandler: (value: FilterType)=> void
}
export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.money.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>- {objectFromMoneyArray.banknots} -</span>
                            <span>- {objectFromMoneyArray.value} -</span>
                            <span>- {objectFromMoneyArray.number} -</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickHandler("All")}>All</button>
            <button onClick={() => props.onClickHandler("Dollars")}>Dollars</button>
            <button onClick={() => props.onClickHandler('RUBLS')}>RUBLS</button>
        </>
    );
};

