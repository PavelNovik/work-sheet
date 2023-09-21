import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}


const Button = (props: ButtonPropsType) => {
    const buttonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={buttonHandler}>{props.name}</button>
    );
};

export default Button;