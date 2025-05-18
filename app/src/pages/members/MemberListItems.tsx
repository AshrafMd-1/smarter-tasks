import {
  useUsersDispatch,
  useUsersState,
} from "../../context/members/context.tsx";
import { deleteSpecificUser } from "../../context/members/actions.ts";

export default function MemberListItems() {
  let state: any = useUsersState();
  const dispatchUsers = useUsersDispatch();
  const handleUserDelete = (id: number) => {
    deleteSpecificUser(dispatchUsers, id);
  };
  const { users, isLoading, isError, errorMessage } = state;
  console.log(users);

  if (users.length === 0 && isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 10 border-blue-700"></div>
      </div>
    );
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  if (users.length === 0) {
    return <span>No users</span>;
  }

  return (
    <>
      {users.map((user: any) => (
        <div
          className="bg-white shadow-lg  rounded-lg px-4 py-6 w-80 m-5 member"
          key={user.id}
        >
          <div className="flex justify-between mb-3   items-center">
            <h1 className="text-xl font-bold text-gray-800 break-words">
              {user.name}
            </h1>
            <div className="flex justify-between items-center gap-2">
              <button
                className="bg-red-400 hover:bg-red-500 text-white font-semibold px-2 py-1 rounded-md"
                onClick={() => handleUserDelete(user.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="mt-2 text-gray-600 break-word">{user.email}</p>
          <p className="mt-2 text-gray-600 break-word">
            Created on:{" "}
            <span className="text-violet-500 font-bold">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p className="mt-2 text-gray-600 break-word">
            Updated on:{" "}
            <span className="text-violet-500 font-bold">
              {new Date(user.updatedAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      ))}
    </>
  );
}
