import { useRecoilState } from "recoil";
import DeleteTodo from "../deleteTodo";
import { todoAtom } from "../../../atoms/todoAtom";
export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoAtom);

  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem === item);

    const replaceItemAtIndex = (arr, index, newValue) => {
      return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  return (
    <div style={{display:'flex',gap:6,justifyContent:'end',}}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <DeleteTodo id={item.id} />
    </div>
  );
}
