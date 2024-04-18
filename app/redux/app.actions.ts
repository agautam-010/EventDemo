import {User} from './app.reducers';

export const SET_USERS_INFO = 'SET_USERS_INFO';
export const SET_AUTH_USER = 'SET_AUTH_USER';
export const SET_USER_EVENTS = 'SET_USER_EVENTS';

export const setUsersInfo = (user: User) => ({
  type: SET_USERS_INFO,
  payload: user,
});

export const setAuthUser = (user: User) => ({
  type: SET_AUTH_USER,
  payload: user,
});

export const setUserEvent = (eventIds: number[]) => ({
  type: SET_USER_EVENTS,
  payload: eventIds || [],
});
