import React from 'react';
import MainTodo from "./components/MainTodo/MainTodo";
import TodoList from "./components/TodoList/TodoList";
export const DEFAULT_TODOS = [
    {
        todo: '',
        isCompleted: false,
        id: 0,
    }
]

export interface Todo {
    id?: number,
    isCompleted: boolean,
    todo: string,
}

function App() {
    const [todos, setTodos] = React.useState(DEFAULT_TODOS)

    const addTodo = ({todo, isCompleted}: Todo) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1, todo: todo, isCompleted: isCompleted}])
    }

    const switchTodo = (id: Todo['id']) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo
            })
        )
    }

    return (
        <main className='h-screen bg-gray-900 flex-col'>
            <MainTodo addTodo={addTodo}/>
            <TodoList switchTodo={switchTodo} todos={todos}/>
        </main>

    );
}

export default App;
