import { activeUser } from "../atoms/activeUser";
import { todoAtom } from "../atoms/todoAtom";
import { selector, useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todoListFilter";
export const todoSelector = selector({
  key: "todo selector",
  get: ({ get }) => {
    const user = get(activeUser);
    const list = get(todoAtom);
    const filter = get(todoListFilterState);

    switch (filter) {
        case "Completed":
          return list.filter((item) => item.isComplete);
        case "Not Completed":
          return list.filter((item) => !item.isComplete);
        default:
          return list && list.filter((item) => item.createdBy === user);
      }
  },
});
