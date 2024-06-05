/* eslint-disable react/no-unknown-property */
import { IconButton, useColorMode, useToast } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import logoDark from "/logoDark.png";
import logoWhite from "/logoWhite.png";
import useAuth from "../../hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout, user } = useAuth();
  const toast = useToast();
  console.log(location);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = async () => {
    try {
      await logout();
      toast({
        title: "Logout successfully!",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong. Please try again!",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-5 xl:px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button onClick={() => setMobileMenuOpen(true)} type="button">
              <HiMiniBars3BottomLeft className="text-xl" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            <div className="flex flex-shrink-0 items-center gap-1">
              <img
                className="h-10 w-auto mb-1"
                src={colorMode === "dark" ? logoWhite : logoDark}
                alt="Your Company"
              />
              <p className="font-semibold text-xl">WorkNest</p>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex space-x-2 gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  aria-current="page"
                >
                  Jobs
                </NavLink>
                {user?.email && (
                  <NavLink
                    to="/my-applications"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    aria-current="page"
                  >
                    Applications
                  </NavLink>
                )}
                {user?.email && (
                  <NavLink
                    to="/dashboard/all-jobs"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    aria-current="page"
                  >
                    Dashboard
                  </NavLink>
                )}
                {!user?.email && (
                  <NavLink
                    to={location.pathname === "/signup" ? "/signup" : "/login"}
                    className={({ isActive }) =>
                      isActive ? "active w-full" : "inactive w-full"
                    }
                    aria-current="page"
                  >
                    {location.pathname === "/signup" ? "Sign Up" : "Login"}
                  </NavLink>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto sm:pr-0">
              <IconButton
                onClick={toggleColorMode}
                isRound={true}
                variant="ghost"
                colorScheme="gray"
                aria-label="Done"
                fontSize="20px"
                _hover="none"
                icon={
                  colorMode === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />
                }
              />

              {/* <!-- Profile dropdown --> */}
              {user?.email && (
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={toggleMenu}
                      ref={buttonRef}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        alt="profile image"
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-3"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      ref={menuRef}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        role="menuitem"
                        id="user-menu-item-0"
                      >
                        View Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        role="menuitem"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <p
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md"
                        role="menuitem"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`h-screen w-full md:hidden absolute top-0 duration-300 z-50 ${
          colorMode === "dark" ? "bg-[#1a202c]" : "bg-white"
        } ${mobileMenuOpen ? "left-0" : "-left-[770px]"}`}
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b px-5 py-3">
          <p className="font-semibold text-xl">WorkNest</p>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            isRound={true}
            variant="ghost"
            colorScheme="gray"
            aria-label="Done"
            fontSize="20px"
            _hover="none"
            icon={<RxCross1 />}
          />
        </div>
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active w-full" : "inactive w-full"
            }
            onClick={() => setMobileMenuOpen(false)}
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            onClick={() => setMobileMenuOpen(false)}
            aria-current="page"
          >
            Jobs
          </NavLink>
          {user?.email && (
            <NavLink
              to="/my-applications"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              onClick={() => setMobileMenuOpen(false)}
              aria-current="page"
            >
              Applications
            </NavLink>
          )}
          {user?.email && (
            <NavLink
              to="/dashboard/all-jobs"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              onClick={() => setMobileMenuOpen(false)}
              aria-current="page"
            >
              Dashboard
            </NavLink>
          )}

          {!user?.email && (
            <NavLink
              to={location.pathname === "/signup" ? "/signup" : "/login"}
              className={({ isActive }) =>
                isActive ? "active w-full" : "inactive w-full"
              }
              onClick={() => setMobileMenuOpen(false)}
              aria-current="page"
            >
              {location.pathname === "/signup" ? "Sign Up" : "Login"}
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
