import { useState } from "react";


import {Todo} from "@/lib/Todo";




export function useTodos(){
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(todo : Todo) {
        setTodos(
            [...todos, todo]
        )
    }

    function markCompleted( id : string) {
        const updatedTodos =  todos.map((todo : Todo) => {
            if (todo.id === id ){
                return {...todo, completed : !todo.completed};
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function removeTodo(id : string) {
        setTodos(todos.filter(todo => todo.id != id))
    }

    return {
        todos, 
        addTodo, 
        removeTodo,
        markCompleted,
    }

}