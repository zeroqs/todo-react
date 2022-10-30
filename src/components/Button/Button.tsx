import React, {FC} from 'react';
import {ADD_TODO, COMPLETE_TODO} from "../../constants/styleConstants";

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    types :  'add' | 'done'
    content? : React.ReactNode
}

const Button:FC<ButtonProps> = ({children,types,onClick,content}) => {
    return (
        <button
            type="button"
            className={types === 'add' ? ADD_TODO : types === 'done' ? COMPLETE_TODO : "" }
            onClick={onClick}
        >
            {
                content ? content : types
            }
        </button>
    );
};

export default Button;
