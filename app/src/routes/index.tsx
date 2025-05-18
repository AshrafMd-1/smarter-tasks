import { createBrowserRouter, Navigate } from "react-router-dom";
import AccountLayout from "../layouts/account/index.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Signin from "../pages/signin/index.tsx";
import Signup from "../pages/signup/index.tsx";
import Projects from "../pages/projects/index.tsx";
import Members from "../pages/members/index.tsx";
import Logout from "../pages/logout/index.tsx";
import Notfound from "../pages/Notfound.tsx";
// import { Outlet } from "react-router-dom";
import ProjectContainer from "../pages/projects/ProjectContainer.tsx";
import ProjectDetails from "../pages/project_details/index.tsx";
import NewTask from "../pages/tasks/NewTask.tsx";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);

export default router;
