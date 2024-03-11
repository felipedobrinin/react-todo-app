import { Input } from "@/components/ui/input";

interface Props {
  todoName : string,
  setTodoName : (filter : string) => void
}

export const TodoInput : React.FC<Props> =  ({todoName, setTodoName}) => {
  return (
    <Input value={todoName} onChange={(e) => { setTodoName(e.target.value) }} type="text" placeholder="Todo name" />
  )
}

