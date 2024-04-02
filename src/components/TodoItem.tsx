import { Todo } from "@/lib/Todo";

import { FaRegTrashAlt } from "react-icons/fa";


interface Props {
  todo: Todo;
  markCompleted: (id: string) => void;
  removeTodo : (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, markCompleted, removeTodo }) => {
  return (
    <div className="todo-item card px-4 py-4 md:px-6">
      <input
        type="checkbox"
        name=""
        id=""
        className="checkbox"
        checked={todo.completed}
        onChange={() => markCompleted(todo.id)}
      />
      <span
        className={`${
          todo.completed ? "line-through text-zinc-400" : ""
        } text-xl `}
      >
        {todo.text}
      </span>
      <button className="remove-todo-button hover:scale-105 transition-transform active:scale-100" onClick={() => removeTodo(todo.id)}>
        <FaRegTrashAlt className="text-neutral-800 text-2xl"/>
      </button>
    </div>
  );
};
