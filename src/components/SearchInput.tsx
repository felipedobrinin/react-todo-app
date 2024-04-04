import { useEffect, useRef } from "react";

import { Input } from "@/components/base/Input";
import { FaSearch } from "react-icons/fa";

interface Props {
  value: string;
  setSearch: (search: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, setSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef?.current?.focus();
  }

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "/") {
      console.log("You just pressed ctrl + / for focusing search!");
      inputRef?.current?.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div
      className="search-input text-input"
      onClick={handleClick}
    >
      <FaSearch className="text-accent" />
      <Input
        value={value}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search..."
        ref={inputRef}
      />
      <span className="text-sm text-zinc-700">
        <kbd>ctrl</kbd>+<kbd>/</kbd>
      </span>
    </div>
  );
};
