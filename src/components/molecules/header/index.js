import React from "react";
import Heading from "../../atoms/heading";
import { Box} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import ColorMode from "../colormode";
export default function Header() {
  const backgroundColor = useColorModeValue('#38a4ba', '')
  return (
    <Box backgroundColor={backgroundColor}>
      <Heading heading={"TODO-APPLICATION"} style={{fontSize:'36px',padding:'16px'}}/>
      <ColorMode />
    </Box>
  );
}
