// import React, { useEffect } from "react";
// import { useRecoilValue } from "recoil";
// import { activeUser } from "../../../atoms/activeUser";
// import { todoSelector } from "../../../selectors/todoSelector";
// import TodoInput from "../../molecules/todoInput";
// import { Heading } from "@chakra-ui/react";
// import TodoItem from "../../molecules/todoItem/todoItem";
// import Dropdown from "../../molecules/dropdown";
// import Filter from "../filter";
// import {
//   StyledTodoItem,
//   StylesTodoList,
//   StyledTodoInput,
//   StyledTodo,
// } from "./styles";
// export default function TodoBlock() {
//   const name = useRecoilValue(activeUser);
//   console.log("check", name);
//   const todoList = useRecoilValue(todoSelector);
//   console.log("todolist", todoList);
//   return (
//     <div style={{ width: "100%", border: "1px solid grey" }}>
//       <Filter />
//       <StyledTodo>
//         {todoList.map((eachTodo, index) => {
//           return (
//             <StylesTodoList key={index}>
//               {name === eachTodo.createdBy ? (
//                 <StyledTodoItem>
//                   <p>{eachTodo.content}</p> <TodoItem item={eachTodo} />
//                 </StyledTodoItem>
//               ) : (
//                 ""
//               )}
//             </StylesTodoList>
//           );
//         })}
//       </StyledTodo>
//       <div>
//         <StyledTodoInput />
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../../atoms/activeUser";
import { todoSelector } from "../../../selectors/todoSelector";
import TodoItem from "../../molecules/todoItem/todoItem";
import Filter from "../filter";
import "./styling.scss";
import {
  StyledTodoItem,
  StylesTodoList,
  StyledTodoInput,
  StyledTodo,
} from "./styles";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
export default function TodoBlock() {
  const name = useRecoilValue(activeUser);
  const backgroundColor = useColorModeValue('#e9f1f2','')
  console.log("check", name);
  const todoList = useRecoilValue(todoSelector);
  console.log("todolist", todoList);
  return (
    <div style={{ width: "100%", border: "1px solid grey" ,backgroundColor:{backgroundColor}}}>
      <Filter />
      <div className="StyledTodo">
        {todoList.map((eachTodo, index) => {
          return (
            <div key={index} className="StylesTodoList">
              {name === eachTodo.createdBy ? (
                <div className="StyledTodoItem">
                  <p>
                    Created on : {new Date().getDate()}/{new Date().getMonth()}/
                    {new Date().getFullYear()} - {new Date().getHours()%12} :
                    {new Date().getMinutes()}:{new Date().getSeconds()}
                  </p>
                  <p>{eachTodo.content}</p> <TodoItem item={eachTodo} />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div>
        <StyledTodoInput />
      </div>
    </div>
  );
}
