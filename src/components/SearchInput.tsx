import { Input } from "@/components/base/Input";
import { FaSearch } from "react-icons/fa";

interface Props {

}

export const SearchInput : React.FC<Props> =  () => {
  return (
    <div className="search-input">
        <FaSearch className="accent-color icon"/>
        <Input type="text" placeholder="Search..." />
    </div>
  )
}

// <Input value={} onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="Filter tasks..." />
