import { useUsersState as useMembersState } from "../../context/members/context";
import { useCommentsState } from "../../context/comment/context";

const ListOfComments = () => {
  const membersState = useMembersState(); // Changed variable name
  const commentsState = useCommentsState(); // Changed variable name

  const { comments, isLoading, isError, errorMessage } = commentsState;

  const getUsername = (uid: number) => {
    const user = membersState?.users?.find((member) => member.id === uid); // Changed variable name
    return user?.name || "Unknown";
  };

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">{errorMessage}</div>;
  }

  const formatDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Comments:</h1>
        {comments.map((comment) => (
            <div
                key={comment.createdAt}
                className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <h5 className="text-lg font-semibold text-gray-800">
                {getUsername(comment.owner)}
              </h5>
              <h5 className="text-gray-600">{formatDate(comment.createdAt)}</h5>
              <p className="text-gray-800">{comment.description}</p>
            </div>
        ))}
      </div>
  );
};

export default ListOfComments;
