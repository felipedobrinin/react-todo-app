import { Todo } from "@/lib/Todo";

interface Props {
  todo: Todo;
  markCompleted: (id: string) => void;

}

export const TodoItem: React.FC<Props> = ({ todo, markCompleted }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={() => markCompleted(todo.id)}
      />
    </div>
  );
};
