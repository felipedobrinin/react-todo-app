import React from 'react'
import { Button } from "@/components/ui/button";
import { CardStackPlusIcon } from "@radix-ui/react-icons";



/*
When cicking button a modal opens, while the modal is open, 
*/
interface Props {
    openModal : () => void
}

export const AddTodoButton : React.FC<Props> = ({openModal}) => {
  return (
    <Button onClick={openModal} className="flex gap-1 w-1/4">
        <CardStackPlusIcon />
        Add
    </Button>
  )
}

