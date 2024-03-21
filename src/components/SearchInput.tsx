import { Input } from "@/components/base/Input";
import { FaSearch } from "react-icons/fa";

interface Props {
  value: string;
  setSearch: (search: string) => void;
}

export const SearchInput: React.FC<Props> = ({ value, setSearch }) => {
  return (
    <div className="search-input">
      <FaSearch className="accent-color icon" />
      <Input
        value={value}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};