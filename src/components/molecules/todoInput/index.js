import { useState } from "react";
import { todoAtom } from "../../../atoms/todoAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeUser } from "../../../atoms/activeUser";
import { Input } from "@chakra-ui/react";
import { AddButton } from "./styles";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const setTodoList = useSetRecoilState(todoAtom);
  const totaltodos = useRecoilValue(todoAtom);
  console.log("total todos", totaltodos);
  const user = useRecoilValue(activeUser);

  const handleChange = (e) => {
    console.log("event", e.target.value);
    setTodo(e.target.value);
  };
  const handleAdd = () => {
    const newTodo = {
      id: new Date().getTime(),
      content: todo,
      createdBy: user,
      isComplete: false,
    };
    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
  };
  return (
    <div style={{ display: "flex", justifyContent: "end", paddingTop: "16px" }}>
      <Input
        placeholder="add new todo"
        onChange={handleChange}
        border="1px solid #000"
        focusBorderColor="#000"
      />
      <AddButton onClick={handleAdd} disabled={todo.length > 0 ? false : true} >
        add
      </AddButton>
    </div>
  );
}
