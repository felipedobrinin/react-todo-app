import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Cross1Icon } from "@radix-ui/react-icons";
import { PlusIcon } from "@radix-ui/react-icons";
import { TodoInput } from "./TodoInput";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export const AddTodoModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [todoName, setTodoName] = useState("");

  function resetInput() {
    setTodoName("");
  }

  return (
    <div className={`${isOpen ? "show-modal" : "hide-modal"} modal w-[min(100%,450px)]`}>
      <Card>
        <CardHeader className="grid grid-flow-col grid-cols-[90%,auto] items-center ">
          <h2 className="text-xl">Add Todo</h2>
          <button
            onClick={() => {
              resetInput();
              closeModal();
            }}
            className=" self-start flex justify-end items-center m-0"
          >
            <Cross1Icon />
          </button>
        </CardHeader>

        <CardContent className="grid gap-2">
          <TodoInput todoName={todoName} setTodoName={setTodoName} />
          <Button
            className="ml-auto flex gap-1 w-1/4"
            onClick={() => {
              resetInput();
              //todo Add modal
              closeModal();
            }}
          >
            <PlusIcon />
            Add
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
