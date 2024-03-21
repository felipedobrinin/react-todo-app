import { Todo } from "@/lib/Todo";
import { TodoItem } from "@/components/TodoItem";
interface Props {
  todos: Todo[];
  markCompleted: (id: string) => void;
  search: string;
}

export const TodoList: React.FC<Props> = ({
  todos,
  markCompleted,
  search,
}) => {
  return (
    <div className="todo-list mb-10">
      {todos.length ? (
        todos.map((todo: Todo) => {
          if (!todo.text.toLowerCase().includes(search.toLowerCase())) return;

          return <TodoItem todo={todo} markCompleted={markCompleted} />;
        })
      ) : (
        <span className="text-2xl text-center">There is no Todos</span>
      )}
    </div>
  );
};
