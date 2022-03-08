import { OPEN_NAV, COLOR_CHANGE, OPEN_SEARCH, OPEN_NAV_SEARCH } from "./types.js";


// SIDE MENU

export const openNavAction = (set) => ({
  type: OPEN_NAV,
  payload: set,
});

export const colorChangeAction = (set) => ({
  type: COLOR_CHANGE,
  payload: set,
});

export const openSearchAction = (set) => ({
  type: OPEN_SEARCH,
  payload: set,
});

export const openSearchNavAction = (set) => ({
  type: OPEN_NAV_SEARCH,
  payload: set,
});

// export const searchHistory = () => ({
//   type: SEARCH_HISTORY,
//   payload: set,
// });
