// import { useState } from "react";

import { SearchInput } from "@/components/SearchInput";

function App() {
  // const [filter, setFilter] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <h1 className="text-5xl font-bold text-center">TODOs</h1>
      <SearchInput />
    </div>
  );
}

export default App;
