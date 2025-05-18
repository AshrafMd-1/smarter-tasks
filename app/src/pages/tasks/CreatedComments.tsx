import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../context/comment/context.tsx";
import { addComment } from "../../context/comment/actions.ts";
import { CommentsPayload } from "../../context/comment/types.ts";

export default function CreatedComments() {
  const commentsDispatch = useCommentsDispatch(); // Changed variable name
  const { register, handleSubmit, reset } = useForm<CommentsPayload>(); // Shortened destructuring

  const { pid, tid } = useParams(); // Changed variable names for clarity

  const submitHandler: SubmitHandler<CommentsPayload> = async (data) => {
    try {
      await addComment(
        commentsDispatch,
        pid ?? "",
        tid ?? "",
        data.description
      ); // Updated function parameters
      reset(); // Reset the form after submission
    } catch (error) {
      console.error("Error while adding comment:", error); // Added error handling
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex items-center"
      >
        <input
          type="text"
          required
          placeholder="Add Comment"
          id="commentBox"
          {...register("description", { required: true })}
          className="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          id="addCommentBtn"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
