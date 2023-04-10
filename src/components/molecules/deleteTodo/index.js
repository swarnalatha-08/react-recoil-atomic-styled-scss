import { todoAtom } from "../../../atoms/todoAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ButtonAtom from "../../atoms/button";

export default function DeleteTodo({ id }) {
  const setTodos = useSetRecoilState(todoAtom);
 
  console.log("prop id", id);
  const todos = useRecoilValue(todoAtom);

  const handleDelete = () => {
    const remainingTodo = todos.filter((item) => {
      return item.id !== id;
    });
    console.log("remaining todos", remainingTodo);
    setTodos(remainingTodo);
  };
  return <ButtonAtom buttonName={'delete'} onClick={handleDelete}/>
}


