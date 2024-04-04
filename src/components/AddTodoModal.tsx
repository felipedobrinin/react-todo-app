import { Todo } from "@/lib/Todo";

import { useState, useRef, useEffect } from "react";

interface Props {
  addTodo: (todo: Todo) => void;
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
}

export const AddTodoModal: React.FC<Props> = ({
  addTodo,
  openModal,
  setOpenModal,
}) => {
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function closeModal() {
    setOpenModal(false);
    setText("");
  }

  function handleAddTodo() {
    if (!text) return;
    addTodo({
      id: Date.now().toString(),
      text: text,
      completed: false,
    } as Todo);

    closeModal();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      handleAddTodo();
    }
  };

  useEffect(() => {
    // Focus on input field when modal opens
    if (openModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openModal, inputRef]);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.altKey && event.key === "c") {
      console.log("You just pressed Alt + C for closing the modal!");
      closeModal();
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
      className={`${
        openModal ? "visible opacity-100" : "invisible opacity-0"
      } modal transition-[opacity] duration-300`}
    >
      <input
        type="text"
        placeholder="Todo text"
        className="modal-input text-input"
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        ref={inputRef}
      />
      <div className="grid grid-flow-row grid-cols-[40%,auto,40%]">
        <button className="modal-button bg-danger" onClick={closeModal}>
          <span>Cancel</span>
        </button>
        <div></div>
        <button className="modal-button bg-accent" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};
