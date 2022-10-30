import React, {FC} from 'react';
import './test.css';
import TodoItem from "../TodoItem/TodoItem";
import {Todo} from "../../App";
import Button from "../Button/Button";
import {Link, Route, Routes} from "react-router-dom";


interface TodoListProps {
    todos: Todo[];
    switchTodo : (id : Todo['id']) => void;
}

const TodoList:FC<TodoListProps> = ({todos,switchTodo}) => {
    return (
            todos.length > 1 ? (
                <div  data-testid='todo-list' className="col-span-12 flex items-center justify-center bg-gray-900">
                    <div className="overflow-auto lg:overflow-visible flex flex-col items-center justify-center">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                        <tr>
                            <th className="p-3"><Button types={'add'} content={<Link className="px-4 px-4 py-2" to='/'>All</Link>}/></th>
                            <th className="p-3"><Button types={'progress'} content={<Link className="px-4 px-4 py-2" to='/progress'>In progress</Link>}/></th>
                            <th className="p-3"><Button types={'done'} content={<Link className="px-4 px-4 py-2" to='/done'>Done</Link>}/></th>
                        </tr>
                        </thead>
                    </table>
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                        <tr>
                            <th className="p-3">Task</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <Routes>
                            <Route path='/' element={todos.slice(1).map(item => <TodoItem key={item.id} {...item} switchTodo={switchTodo}/>)}/>
                            <Route path='/progress' element={todos.slice(1).map(item => !item.isCompleted ? <TodoItem key={item.id} {...item} switchTodo={switchTodo}/> : null)}/>
                            <Route path='/done' element={todos.slice(1).map(item => item.isCompleted ? <TodoItem key={item.id} {...item} switchTodo={switchTodo}/> : null)}/>
                        </Routes>

                        </tbody>
                    </table>
                </div>
            </div>) : null
    );
};

export default TodoList;
