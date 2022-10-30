import React, {FC} from 'react';
import {ADD_TODO, COMPLETE_TODO, IN_PROGRESS_TODO} from "../../constants/styleConstants";
import {Routes} from "react-router-dom";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    types :  'add' | 'done' | 'progress'
    content? : React.ReactNode
}

const Button:FC<ButtonProps> = ({children,types,onClick,content}) => {

    return (
        <button
            data-testid ={types}
            role={types}
            type="button"
            className={types === 'add' ? ADD_TODO : types === 'done' ? COMPLETE_TODO : types === 'progress' ? IN_PROGRESS_TODO : '' }
            onClick={onClick}
        >
            {
                content ? content: types
            }
        </button>
    );
};

export default Button;
