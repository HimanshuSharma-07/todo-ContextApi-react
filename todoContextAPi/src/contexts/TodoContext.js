import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            compeleted: false,
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompelete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider= TodoContext.Provider
