import { useRecoilValue } from "recoil";
import { activeUser } from "../../../atoms/activeUser";
import Dropdown from "../../molecules/dropdown";
import { Heading } from "@chakra-ui/react";

export default function Filter() {
    const name = useRecoilValue(activeUser);
  return (
    <>
      <Heading fontSize="28px" textAlign="start" p="16px" h={"12%"}>
        {name}
      </Heading>
      <div style={{ height: "100px" }}>
        <Dropdown />
      </div>
    </>
  );
}
