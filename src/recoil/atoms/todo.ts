import { atom } from "recoil";

export const todoAtom = atom({
    key: "todoList",
    default: ["Hello World!"]
})