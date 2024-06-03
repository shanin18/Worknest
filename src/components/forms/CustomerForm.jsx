/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import { CiCalendarDate } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import { v4 as uuidv4 } from "uuid";

const CustomerForm = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const calendarRef = useRef();
  const { orders, setOrders } = useAuth();

  // const { id, status, name, price, date, time } = order;

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (calendarRef.current && !calendarRef.current.contains(e.target)) {
          setShowCalender(false);
        }
      },
      true
    );
  }, []);

  // get the selected date
  const handleDate = (date) => {
    setSelectedDate(
      `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getFullYear()}`
    );
    setShowCalender(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    const currentTime = new Date();
    data.id = uuidv4().slice(0, 3);
    data.date = selectedDate;
    data.time = currentTime.toLocaleTimeString();
    const newOrders = [...orders, data];
    setOrders(newOrders);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="lg:flex gap-5">
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.email && <span>This field is required</span>}
        </div>
      </div>

      <div className="lg:flex gap-5">
        <div className="relative lg:w-full mb-5 lg:mb-0">
          <label>Date</label>
          <div
            onClick={() => setShowCalender(!showCalender)}
            className="w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent flex justify-between cursor-pointer"
          >
            <p>{selectedDate}</p>
            <CiCalendarDate className="text-xl" />
          </div>

          <div
            ref={calendarRef}
            className={`absolute z-50 ${
              !showCalender
                ? "invisible opacity-0 top-0 duration-150"
                : "block opacity-100 ease-in duration-300 top-12"
            }`}
          >
            <Calendar
              color="#6366f1"
              className="rounded-lg shadow-xl"
              date={new Date()}
              onChange={handleDate}
            />
          </div>
        </div>
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Pincode</label>
          <input
            {...register("pincode", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.pincode && <span>This field is required</span>}
        </div>
      </div>

      <div className="lg:flex gap-5">
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Location</label>
          <input
            {...register("location_name", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.location_name && <span>This field is required</span>}
        </div>
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Type</label>
          <input
            {...register("type", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.type && <span>This field is required</span>}
        </div>
      </div>

      <div className="lg:flex gap-5">
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
          {errors.price && <span>This field is required</span>}
        </div>
        <div className="lg:w-full mb-5 lg:mb-0">
          <label>GST</label>
          <input
            {...register("gst")}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-transparent"
          />
        </div>
      </div>

      <Button
        colorScheme=""
        color="white"
        type="submit"
        className=" bg-indigo-500 py-2 px-6 hover:bg-indigo-600 w-full"
      >
        Submit
      </Button>
    </form>
  );
};

export default CustomerForm;
