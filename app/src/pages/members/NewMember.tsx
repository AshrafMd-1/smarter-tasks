import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";

import { addNewUser } from "../../context/members/actions.ts";
import { useUsersDispatch } from "../../context/members/context.tsx";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const NewMember = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatchUsers = useUsersDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const toggleDialog = () => setIsOpen(!isOpen);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, password } = data;

    const response = await addNewUser(dispatchUsers, {
      name: name,
      email: email,
      password: password,
    });

    if (response.ok) {
      toggleDialog();
    } else {
      setError(response.error as string | null);
    }
  };

  return (
    <>
      <button
        type="button"
        id="new-member-btn"
        onClick={toggleDialog}
        className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-white text-sm font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        + New Member
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-10"
          onClose={toggleDialog}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl my-2 font-medium leading-6 text-gray-900"
                >
                  Create new user
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-2 space-y-4"
                >
                  <div className="flex items-center gap-2 justify-between">
                    {error && <span>{error}</span>}
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      autoFocus
                      {...register("name", { required: true })}
                      className={`w-full p-2  border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.name ? "error-field" : ""
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      autoFocus
                      {...register("email", { required: true })}
                      className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        
                    input-field ${errors.email ? "error-field" : ""}`}
                    />
                  </div>

                  <div className="flex items-center gap-2 justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      autoFocus
                      {...register("password", { required: true })}
                      className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                     input-field ${errors.password ? "error-field" : ""}`}
                    />
                  </div>
                  <button
                    type="submit"
                    id="create-member-btn"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={toggleDialog}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewMember;
