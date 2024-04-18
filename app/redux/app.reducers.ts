import { SET_USERS_INFO, SET_AUTH_USER, SET_USER_EVENTS } from "./app.actions";

export interface User {
  id: number;
  name: string;
  events: number[];
}
export interface AppState {
  users: User[];
  user: User | null;
}

const initialState: AppState = {
  users: [],
  user: null,
};

export const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_INFO:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_EVENTS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === state.user?.id) {
            return {
              ...user,
              events: action.payload,
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};
