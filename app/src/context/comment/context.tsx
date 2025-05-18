import {createContext, useContext, useReducer} from "react";
import {CommentsActions, CommentsState} from "./types";
import {initialState, reducer} from "./reducer";

type CommentsDispatchType = React.Dispatch<CommentsActions>;
const CommentsStateContext = createContext<CommentsState>(initialState);
const CommentsDispatchContext = createContext<CommentsDispatchType>(() => {
});

export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
                                                                      children,
                                                                    }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <CommentsStateContext.Provider value={state}>
        <CommentsDispatchContext.Provider value={dispatch}>
          {children}
        </CommentsDispatchContext.Provider>
      </CommentsStateContext.Provider>
  );
};
