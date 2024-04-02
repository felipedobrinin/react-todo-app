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
    <div className="app pt-[1%]  md:pt-8">
      <main>
        <div className="flex flex-col gap-4 card p-4 md:p-6">
          <h1 className="text-5xl font-bold text-center">TODOs</h1>
          <SearchInput value={search} setSearch={setSearch} />
          <div className="flex gap-2">
            <input
              className="checkbox"
              type="checkbox"
              name=""
              id="show-completed"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            <label htmlFor="show-completed">Show completed todos</label>
          </div>
        </div>
        <TodoList
          todos={todos}
          markCompleted={markCompleted}
          search={search}
          showCompleted={showCompleted}
          removeTodo={removeTodo}
        />
      </main>

      <button
        className={`${openModal ? "bg-danger" : "bg-accent"}
         add-button p-4 rounded-full md:text-5xl text-7xl`}
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
    </div>
  );
}

export default App;
