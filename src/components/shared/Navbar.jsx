/* eslint-disable react/no-unknown-property */
import { IconButton, useColorMode, useToast } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout, user } = useAuth();
  const toast = useToast();

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
        title: { error },
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <p className="font-semibold text-xl">WorkNest</p>
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4 gap-2">
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
                <NavLink
                  to="/my-applications"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  aria-current="page"
                >
                  My Applications
                </NavLink>
                {user?.email && (
                  <NavLink
                    to="/dashboard"
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
                    to={location.pathname === "/login" ? "/login" : "/signup"}
                    className={({ isActive }) =>
                      isActive ? "active w-full" : "inactive w-full"
                    }
                    aria-current="page"
                  >
                    {location.pathname === "/login" ? "Login" : "Sign Up"}
                  </NavLink>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      ref={menuRef}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <p
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 "
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
        className={`sm:hidden absolute w-full top-0 duration-300 h-screen ${
          colorMode === "dark" ? "bg-[#1a202c]" : "bg-white"
        } ${mobileMenuOpen ? "left-0" : "-left-[650px]"}`}
        id="mobile-menu"
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b px-5 py-3">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />

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
            aria-current="page"
          >
            Home
          </NavLink>

          {!user?.email && (
            <NavLink
              to={location.pathname === "/login" ? "/login" : "/signup"}
              className={({ isActive }) =>
                isActive ? "active w-full" : "inactive w-full"
              }
              aria-current="page"
            >
              {location.pathname === "/login" ? "Login" : "Sign Up"}
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
