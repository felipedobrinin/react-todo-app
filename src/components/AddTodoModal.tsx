import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export const AddTodoModal: React.FC<Props> = ({ isOpen, closeModal }) => {

  return ( 
    <div className={`${isOpen ? 'show-modal' : ''} modal w-[500px] `}>
      <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <button onClick={closeModal}>X</button>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    </div>
    
  );
};
