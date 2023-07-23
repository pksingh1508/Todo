import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddTodo = () => {

  const gradientStyle = {
    background: 'linear-gradient(117.95deg, #833AB4, #FD1D1D, #FCB045)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

    const [todo, setTodo] = useState("");
    const { handleTodo } = useTodos(); 

    const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleTodo(todo);
        setTodo("");
    }

  return (
    <form onSubmit={handleAddTodo} className="flex flex-col gap-4 items-center">
        <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} 
        className="bg-transparent w-full border-[2px] border-gray-400 text-white font-semibold py-1 px-1 rounded-md"
        />
        <button type="submit"
        className="border-[1px] border-white w-fit px-8 py-2 rounded-md font-bold text-xl hover:scale-x-110 transition-all duration-200 scale"
        style={gradientStyle}
        >Add</button>
    </form>
  )
}

export default AddTodo;