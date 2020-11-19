import { ActionsTypes, SidebarType } from "./state";

const sidebarReducer = (state: SidebarType, action: ActionsTypes) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default sidebarReducer
