import { Todo } from "@/lib/Todo";

import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  todo: Todo;
  markCompleted: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  markCompleted,
  removeTodo,
}) => {
  return (
    // <div className="todo-item card py-4 ">
    <div className="todo-item card pl-4 [&>*]:py-4 md:pl-6">
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
        } text-xl break-all `}
      >
        {todo.text}
      </span>
      <button
        className="remove-todo-button bg-danger"
        onClick={() => removeTodo(todo.id)}
      >
        <FaRegTrashAlt className="text-neutral-800 text-2xl" />
      </button>
    </div>
  );
};
