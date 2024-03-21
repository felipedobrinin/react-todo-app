import { useState } from "react";

import { SearchInput } from "@/components/SearchInput";
import { Todo } from "@/lib/Todo";
import { useTodos } from "@/hooks/useTodos";
import { TodoList } from "@/components/TodoList";

function App() {
  const [search, setSearch] = useState("");
  const { todos, addTodo, markCompleted } = useTodos();
  // const [openModal, setOpenModal] = useState(false);

  function handleButton() {
    addTodo({
      id: Date.now().toString(),
      text: "Algo",
      completed: false,
    } as Todo);
  }

  return (
    <div className="app">
      <div className="card p-6">
        <h1 className="text-5xl font-bold text-center">TODOs</h1>
        <SearchInput value={search} setSearch={setSearch} />
        <p>Filtering by : {search}</p>
        <button onClick={handleButton}>Add Todo</button>
      </div>
      <main>
        <TodoList
          todos={todos}
          addTodo={addTodo}
          markCompleted={markCompleted}
          search={search}
        />
      </main>
    </div>
  );
}

export default App;
