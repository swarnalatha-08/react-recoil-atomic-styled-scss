import { todoListFilterState } from "../../../atoms/todoListFilter";
import { useRecoilState } from "recoil";

export default function Dropdown() {
  const [filter,setFilter] = useRecoilState(todoListFilterState)

  const handleDropdownBtn = ({ target: { value }}) => {
   setFilter(value)
  };

  return (
    <div style={{display:'flex',padding: '16px'}}>
     Filter:
     <select value={filter} onChange={handleDropdownBtn} style={{backgroundColor:'#bad6db',color: '#000',border: '1px solid #bad6db',padding:'4px'}}>
        <option value="All">All</option>
        <option value="Completed">Completed </option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
}
