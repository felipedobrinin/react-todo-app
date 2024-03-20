import { Todo } from "@/lib/Todo";
import { TodoItem} from "@/components/TodoItem"; 
interface Props {
    todos : Todo[];
    markCompleted : (id : string ) => void;
    search : string,
    addTodo : (todo : Todo) => void;
}

export const TodoList: React.FC<Props> = ({ todos, addTodo, markCompleted, search }) => {
    return (
      <div className="todo-list">
        {todos.map( (todo : Todo) => {
          return (
            <TodoItem todo={todo} markCompleted={markCompleted}/>
          )
        })}
      </div>
    );
  };