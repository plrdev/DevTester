import { storage } from "@/app";
import { atom } from "jotai";

const baseAtom = atom(storage.getNumber("count") || 0);
export const countAtom = atom(
  (get) => get(baseAtom),
  (_get, set, value: number) => {
    if (value < 0) {
      return;
    }
    set(baseAtom, value);
    storage.set("count", value);
  },
);
