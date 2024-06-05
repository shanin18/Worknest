import { useEffect, useState } from "react";
import googleImage from "../../assets/images/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  useToast,
} from "@chakra-ui/react";

const SignUpForm = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, updateUserProfile, user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const image = null;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirm_password = data.confirm_password;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    if (password === confirm_password) {
      try {
        await createUser(email, password);
        await updateUserProfile(name, image);
        toast({
          title: "Account created successfully!",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title:  "Please check your email and password!",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleLogin();
      toast({
        title: "Account created successfully!",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      navigate(from, { replace: true });
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

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              {...register("name", { required: true })}
              className="block w-full rounded-md py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              {...register("email", { required: true })}
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              {...register("password", { required: true })}
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              {...register("confirm_password", { required: true })}
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
            />
            {errors.confirm_password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        {!passMatch && (
          <div className="my-2">
            <p className="text-red-500 text-sm">Passwords do not match!</p>
          </div>
        )}
        <Button
          colorScheme=""
          color="white"
          type="submit"
          className=" bg-indigo-500 py-2 px-6 hover:bg-indigo-600 w-full"
        >
          Sign up
        </Button>
      </form>

      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter
          className="dark:bg-[#1a202c] bg-white rounded-full"
          px="4"
        >
          OR
        </AbsoluteCenter>
      </Box>
      <Button onClick={handleGoogleSignIn} className="border py-2 px-6 w-full">
        <img src={googleImage} alt="google logo" className="p-2" />
        Sign up with Google
      </Button>
    </div>
  );
};

export default SignUpForm;
