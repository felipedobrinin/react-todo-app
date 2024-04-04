import { useState } from "react";

import { SearchInput } from "@/components/SearchInput";
// import { Todo } from "@/lib/Todo";
import { useTodos } from "@/hooks/useTodos";
import { TodoList } from "@/components/TodoList";
import { AddTodoModal } from "@/components/AddTodoModal";

import { GoPlus } from "react-icons/go";

function App() {
  const [search, setSearch] = useState("");
  const { todos, addTodo, removeTodo, markCompleted } = useTodos();
  const [openModal, setOpenModal] = useState(false);
  const [showCompleted, setShowCompleted] = useState(true);

  function handleButton() {
    setOpenModal(!openModal);
  }

  return (
    <div className="app">
      <header>
        <h1 className="text-5xl font-bold text-center">TODOs</h1>
        <SearchInput value={search} setSearch={setSearch} />
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id="show-completed"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          <label htmlFor="show-completed">Show completed todos</label>
        </div>
      </header>

      <main>
        <TodoList
          todos={todos}
          markCompleted={markCompleted}
          search={search}
          showCompleted={showCompleted}
          removeTodo={removeTodo}
        />

        <button
          className={`${openModal ? "bg-danger" : "bg-accent"} add-button`}
          onClick={handleButton}
        >
          <GoPlus
            className={`${
              openModal ? "rotate-45" : "rotate-0"
            } transition-transform`}
          />
        </button>

        <AddTodoModal
          addTodo={addTodo}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
