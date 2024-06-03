/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation().pathname.includes("edit-products");

  const getClassNames = ({ isActive }) => (isActive ? "active" : "inactive");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-gray-600 h-screen overflow-hidden">
      <div className="flex relative" bis_skin_checked="1">
        <div className="lg:w-1/5 border">
          <div
            className={`h-screen w-full sm:w-[300px] lg:w-auto shadow-2xl lg:shadow-none text-gray-700 bg-white duration-500 absolute lg:relative top-0 z-50 ${
              sidebarOpen ? "left-0" : "-left-[670px]"
            }`}
          >
            <div className="px-5 py-6 border-b flex items-center justify-between">
              <Link to="/">
                <span className="text-xl font-bold">WorkNest</span>
              </Link>
              <button
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <RxCross1 className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col">
              <NavLink
                to="/"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard/all-jobs"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                All Jobs
              </NavLink>
              <NavLink
                to="/dashboard/add-jobs"
                className={getClassNames}
                onClick={() => setSidebarOpen(false)}
              >
                Add Jobs
              </NavLink>
              {location && (
                <NavLink
                  to="/dashboard/edit-jobs"
                  className={getClassNames}
                  onClick={() => setSidebarOpen(false)}
                >
                  Edit Jobs
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5" bis_skin_checked="1">
          <div
            className="flex flex-wrap p-5 items-center justify-between border-b lg:hidden"
            bis_skin_checked="1"
          >
            <Link to="/">
              <span className="text-2xl font-bold">WorkNest</span>
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <HiOutlineBars3 className="text-2xl" />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
