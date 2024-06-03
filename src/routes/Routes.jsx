import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import AllJobs from "../pages/AllJobs";
import AddJobs from "../pages/AddJobs";
import EditJobs from "../pages/EditJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "add-jobs",
        element: <AddJobs />,
      },
      {
        path: "edit-jobs/:id",
        element: <EditJobs />,
      },
    ],
  },
]);

export default router;
