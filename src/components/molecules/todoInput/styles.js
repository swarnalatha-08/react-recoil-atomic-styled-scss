import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export const AddButton = styled(Button)`
  color: ${({ disabled }) => (disabled ? "#67899e" : "#000")};
  background-color: ${({ disabled }) => (disabled ? "#d0d4d6" : "#8db2c9")};
  border: ${({ disabled }) => (disabled ? "#d0d4d6" : "#8db2c9")};
`;
