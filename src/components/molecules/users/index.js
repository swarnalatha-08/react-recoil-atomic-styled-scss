import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "../../../atoms/usersAtom";
import { activeUser } from "../../../atoms/activeUser";
import "./stylings.scss";
import { useColorModeValue } from "@chakra-ui/react";

export default function Users() {
  const [users, setUsers] = useRecoilState(userAtom);
  console.log("users", users);
  const setActiveUser = useSetRecoilState(activeUser);
  const bgColor = useColorModeValue("#abd7e0", "#000");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const handleClick = (name) => {
    console.log("name", name);
    setActiveUser(name);
  };

  return (
    <div
      style={{
        border: "1px solid #abd7e0",
        width: "30%",
        backgroundColor: { bgColor },
      }}
    >
      {users.map((eachUser, index) => {
        return (
          <div
            style={{ padding: "18px", border: "1px solid grey" }}
            onClick={() => handleClick(eachUser.name)}
            key={index}
            className="eachuser-div"
          >
            <ul>
              <li style={{ textAlign: "start" }} className="eachuser">
                {eachUser.name}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
