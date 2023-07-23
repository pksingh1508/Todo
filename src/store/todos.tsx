import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo ={
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleTodo: (task: string) => void;  // call signature
    toggleTodoAsCompleted: (task: string) => void;
    handleDeleteTodo: (task: string) => void;
}

// createContext
export const todosContext = createContext<TodosContext | null>(null);

// provider
export const TodosProvider = ({children}: TodosProviderProps) => {
    const[todos, setTodos] = useState<Todo[]>(() => {
        try{
            const newTodo = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodo);
        }catch(err){
            return [];
        }
    });

    const handleTodo = (task: string) => {
        setTodos((prev) => {
            const newTodo: Todo[] = [
                {
                    id:Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodo));
            return newTodo;
        })
    }

    // function for toggle completed
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodo = prev.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
            return newTodo;
        })
    }

    // function for delete todo
    const handleDeleteTodo = (id: string) => {
        let newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
        localStorage.setItem("todos", JSON.stringify(newTodo));
    }

    return <todosContext.Provider value={{todos, handleTodo, toggleTodoAsCompleted, handleDeleteTodo}}>
        {children}
    </todosContext.Provider>
}

// consumer => useContext
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer) {
        throw new Error("useTodo is not available in the context consumer");
    }
    return todosConsumer;
}