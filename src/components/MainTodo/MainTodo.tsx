import React, {FC} from 'react';
import Button from "../Button/Button";
import {Todo} from "../../App";

const DEFAULT_TODO = {
    todo:  '',
    isCompleted : false,
}

interface TodoProps {
    addTodo : ({todo,isCompleted} : Todo) => void;
}

const MainTodo:FC<TodoProps> = ({addTodo}) => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO)

    const handler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value})
    }

    const onClick = () => {
        addTodo({todo : todo.todo, isCompleted : todo.isCompleted})
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className='h-2/4 flex items-end justify-center'>
            <form className='flex rounded bg-white '>
                <input
                    id = 'todo'
                    value={todo.todo}
                    name= 'todo'
                    type="add-todo"
                    className="border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                    placeholder="task"
                    onChange={handler}
                />
                <Button types={"add"} onClick={onClick}/>
            </form>
        </div>
    );
};

export default MainTodo;
