interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UsersActions =
    | { type: "GET_ALL_USERS" }
    | { type: "GET_ALL_USERS_SUCCESS"; payload: User[] }
    | { type: "GET_ALL_USERS_FAILURE"; payload: string }
    | { type: "ADD_USER"; payload: User }
    | { type: "DELETE_USER"; payload: number };

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
    state: UsersState = initialState,
    action: UsersActions,
): UsersState => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "GET_ALL_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_USER":
      return {...state, users: [...state.users, action.payload]};
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
