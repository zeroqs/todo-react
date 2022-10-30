import React, {FC} from 'react';
import {Todo} from "../../App";
import {DONE_TODO, PROGRESS_TODO} from "../../constants/styleConstants";
import Button from "../Button/Button";

export interface TodoItemProps {
    id? : number,
    isCompleted : boolean,
    todo: string,
    switchTodo : (id : Todo['id']) => void;
}

const TodoItem:FC<TodoItemProps> = ({id,isCompleted,todo,switchTodo}) => {
    return (
        todo ? <tr className="bg-gray-800">
            <td className="p-3 font-bold max-w-xs">
                <span>{todo}</span>
            </td>
            <td className="p-3">
                {
                    isCompleted ? (<span className={DONE_TODO}>done</span>) : <span className={PROGRESS_TODO}>in progress</span>
                }
            </td>
            <td className="p-3 flex flex-col">
                <Button onClick={() => {switchTodo(id)}} types={isCompleted ? "progress" : "done"}/>
            </td>
        </tr> : null
    );
};

export default TodoItem;
