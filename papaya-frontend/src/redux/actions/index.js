import { OPEN_NAV, COLOR_CHANGE } from "./types.js";


// SIDE MENU

export const openNavAction = (set) => ({
  type: OPEN_NAV,
  payload: set,
});

export const colorChangeAction = (set) => ({
  type: COLOR_CHANGE,
  payload: set,
});
