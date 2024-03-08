import { ThemeProvider } from "@/components/theme-provider";


// import { useEffect, useState } from "react";
import { FilterInput } from "./components/FilterInput";
import { useState, useEffect } from "react";
import { AddTodoButton } from "./components/AddTodoButton";
import { AddTodoModal } from "./components/AddTodoModal";

function App() {
  const [filter, setFilter] = useState("");
  const [ openModal, setOpenModal ] = useState(true);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-[500px] grid gap-2">

        <FilterInput filter={filter} setFilter={setFilter} />
        <AddTodoButton openModal={() => setOpenModal(!openModal)}/>


        <AddTodoModal isOpen={openModal} closeModal={() => setOpenModal(false)}/>    

      </main>
    </ThemeProvider>
  );
}

export default App;
