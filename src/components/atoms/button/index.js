import { Button } from "@chakra-ui/react";
export default function ButtonAtom({ buttonName, onClick,style }) {
  return <Button onClick={onClick} style={style}>{buttonName}</Button>;
}
