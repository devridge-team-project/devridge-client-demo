import { Dispatch, SetStateAction } from "react";

export type Size = "sm" | "md" | "lg" | "full" | "auto";
export type State<T> = [T, Dispatch<SetStateAction<T>>];
