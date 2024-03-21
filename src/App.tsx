import { useState } from "react";

import { SearchInput } from "@/components/SearchInput";
// import { Todo } from "@/lib/Todo";
import { useTodos } from "@/hooks/useTodos";
import { TodoList } from "@/components/TodoList";
import { AddTodoModal } from "@/components/AddTodoModal"

function App() {
  const [search, setSearch] = useState("");
  const { todos, addTodo, markCompleted } = useTodos();
  const [openModal, setOpenModal] = useState(false);

  function handleButton() {
    setOpenModal(!openModal);
  }

  return (
    <div className="app">
      <main>
        <div className="flex flex-col gap-4 card p-6">
          <h1 className="text-5xl font-bold text-center">TODOs</h1>
            <SearchInput value={search} setSearch={setSearch} />
        </div>
          <TodoList
            todos={todos}
            markCompleted={markCompleted}
            search={search}
          />
      </main>
      

      <button className="add-button text-2xl" onClick={handleButton}>Add Todo</button>
      <AddTodoModal addTodo={addTodo} openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default App;
