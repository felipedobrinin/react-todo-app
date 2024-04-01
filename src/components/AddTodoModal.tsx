import { Todo } from "@/lib/Todo";
// import { TodoItem } from "@/components/TodoItem";
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

  function handleAddTodo() {
    if (!text) return;
    addTodo({
      id: Date.now().toString(),
      text: text,
      completed: false,
    } as Todo);

    setOpenModal(false);
    setText("");
  }

  function handleCancel() {
    setOpenModal(false);
    setText("");
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      handleAddTodo();
    }
  };

  useEffect(() => {
    // Focus on input field when modal opens

    if (openModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openModal, inputRef]);

  return (
    <div
      className={`${
        openModal ? "visible" : "invisible"
      } modal flex flex-col gap-4`}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Todo text"
        className="modal-input"
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        ref={inputRef}
      />
      <div className="flex justify-between">
        <button className="modal-cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="modal-add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};
