import { Input } from "@/components/ui/input";

interface Props {
  filter : string,
  setFilter : (filter : string) => void
}

export const FilterInput : React.FC<Props> =  ({filter, setFilter}) => {
  return (
    <Input value={filter} onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="Filter tasks..." />
  )
}


