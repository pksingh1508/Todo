import { Todo, useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom"

const Todos = () => {

  const gradientStyle = {
    background: 'linear-gradient(117.95deg, #833AB4, #FD1D1D, #FCB045)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    const [searchParams] = useSearchParams();
    let todosData = searchParams.get('todos');

  let filterData = todos;

  if(todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if(todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="w-full mt-3">
      {filterData.map((todo: Todo) => {
        return (
          <li key={todo.id} className="flex gap-3 lg:justify-between items-baseline w-full">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              
            />
            
              
                <label htmlFor={`todo-${todo.id}`}
                  className="text-white font-bold text-2xl w-[500px]"
                  style={gradientStyle}
                  >{todo.task}
                </label>
              
            
            <div>
            {
                todo.completed && (
                    <button type="button" onClick={() => handleDeleteTodo(todo.id)}
                    className="bg-black border-[1px] border-white w-fit px-5 py-[2px] rounded-md font-bold text-xl hover:scale-x-110 transition-all duration-200 "
                    style={gradientStyle}
                    >Delete</button>
                )
            }
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
