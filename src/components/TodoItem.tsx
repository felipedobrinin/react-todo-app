import { Todo } from "@/lib/Todo";

import { FaRegTrashAlt } from "react-icons/fa";


interface Props {
  todo: Todo;
  markCompleted: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, markCompleted }) => {
  return (
    <div className="todo-item card p-4">
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
      <button className="remove-todo-button">
        <FaRegTrashAlt className="text-neutral-800 text-2xl"/>
      </button>
    </div>
  );
};
