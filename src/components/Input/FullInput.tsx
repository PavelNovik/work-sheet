import React, {ChangeEvent, FC, useState} from 'react';

type InputPropsType = {
    inputClickHandler: (val: string) => void
}
export const FullInput: FC<InputPropsType> = ({inputClickHandler}) => {
    const [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        inputClickHandler(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

