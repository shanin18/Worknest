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
import Jobs from "../pages/Jobs";
import MyApplications from "../pages/MyApplications";
import JobDetails from "../pages/JobDetails";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
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
    errorElement: <Error />,
    children: [
      {
        path: "all-jobs",
        element: (
          <PrivateRoute>
            <AllJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "add-jobs",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-jobs/:id",
        element: (
          <PrivateRoute>
            <EditJobs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
