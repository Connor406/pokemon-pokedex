import { atom } from "jotai"

export const paginationAtom = atom({
  limit: 30,
  low: 1,
  high: 30,
})
