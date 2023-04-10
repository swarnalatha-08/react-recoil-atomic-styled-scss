import ButtonAtom from "../../atoms/button";
import { Button, useColorMode ,useColorModeValue} from "@chakra-ui/react";
import { StyledColorMode } from "./styles";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <span style={{ display: "flex", justifyContent: "end" }}>
      <ButtonAtom
        buttonName={`${colorMode === "light" ? "Toggle Dark" : "Toggle Light"}`}
        onClick={toggleColorMode}
        style={{margin:'16px',padding:'8px',backgroundColor:'#8ddff0',borderRadius:'15px'}}
      />
    </span>
  );
}
