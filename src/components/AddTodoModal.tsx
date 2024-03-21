import { Todo } from "@/lib/Todo";
import { TodoItem } from "@/components/TodoItem";
import { useRef, useState } from "react";

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

  function handleCancel(){
    setOpenModal(false);
    setText("");
  }

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
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-between">
        <button
          className="modal-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="modal-add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};
