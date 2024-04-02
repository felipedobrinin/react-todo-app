import { Todo } from "@/lib/Todo";
import { TodoItem } from "@/components/TodoItem";

import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  todos: Todo[];
  markCompleted: (id: string) => void;
  removeTodo: (id: string) => void;
  search: string;
  showCompleted: boolean;
}

export const TodoList: React.FC<Props> = ({
  todos,
  markCompleted,
  removeTodo,
  search,
  showCompleted,
}) => {
  const [parent] = useAutoAnimate();

  return (
    <div className="todo-list mb-10" ref={parent}>
      {todos.length ? (
        todos.map((todo: Todo) => {
          if (!todo.text.toLowerCase().includes(search.toLowerCase())) return;
          if (!showCompleted && todo.completed) return;
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              markCompleted={markCompleted}
              removeTodo={removeTodo}
            />
          );
        })
      ) : (
        <span className="text-2xl text-center">There is no Todos</span>
      )}
    </div>
  );
};
