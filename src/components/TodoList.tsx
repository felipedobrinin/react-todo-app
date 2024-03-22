import { Todo } from "@/lib/Todo";
import { TodoItem } from "@/components/TodoItem";
interface Props {
  todos: Todo[];
  markCompleted: (id: string) => void;
  search: string;
  showCompleted : boolean;
}

export const TodoList: React.FC<Props> = ({
  todos,
  markCompleted,
  search,
  showCompleted,
}) => {
  return (
    <div className="todo-list mb-10">
      {todos.length ? (
        todos.map((todo: Todo) => {
          if (!todo.text.toLowerCase().includes(search.toLowerCase())) return;
          if (!showCompleted && todo.completed ) return;
          return <TodoItem todo={todo} markCompleted={markCompleted} />;
        })
      ) : (
        <span className="text-2xl text-center">There is no Todos</span>
      )}
    </div>
  );
};
