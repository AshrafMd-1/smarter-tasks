import React, {createContext, useContext, useReducer} from "react";
import {initialState, reducer, UsersActions, UsersState} from "./reducer";

const UsersStateContext = createContext<UsersState | undefined>(undefined);
const UsersDispatchContext = createContext<
    React.Dispatch<UsersActions> | undefined
>(undefined);

export const UsersProvider: React.FC<React.PropsWithChildren<{}>> = ({
                                                                       children,
                                                                     }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <UsersStateContext.Provider value={state}>
        <UsersDispatchContext.Provider value={dispatch}>
          {children}
        </UsersDispatchContext.Provider>
      </UsersStateContext.Provider>
  );
};

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);
