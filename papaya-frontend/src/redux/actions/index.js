import { 
  OPEN_NAV, 
 } from './types.js'


import UserAuth from "../../services/user/user-auth.js";

// SIDE MENU

export const openNavAction = (set) => ({
    type: OPEN_NAV,
    payload: set,
  });


