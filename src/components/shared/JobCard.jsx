/* eslint-disable react/prop-types */

import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    image,
    location,
    start_date,
    ctc_annual,
    experience_required,
    posted_days_ago,
    type,
  } = job;

  return (
    <div className=" shadow-lg p-5 rounded-md border">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-xl mb-3">{title}</h1>
          <h2 className="font-semibold">{company}</h2>
        </div>
        <img src={image} alt="logo" className="w-10" />
      </div>
      <div className="flex items-center gap-2 my-4">
        <span>
          {location === "Remote" || location === "Hybrid" ? (
            <IoHomeOutline />
          ) : (
            <HiOutlineBuildingOffice />
          )}
        </span>
        <p className="font-medium">{location}</p>
      </div>

      <div className="flex items-center gap-5 mb-3">
        <div>
          <div>
            <p className="font-medium text-sm">START DATE</p>
          </div>
          <p className="text-[15px]">{start_date}</p>
        </div>
        <div>
          <div>
            <p className="font-medium text-sm">CTC (ANNUAL)</p>
          </div>
          <p className="text-[15px]">{ctc_annual}</p>
        </div>
        <div>
          <div>
            <p className="font-medium text-sm">EXPERIENCE</p>
          </div>
          <p className="text-[15px]">{experience_required}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-xs">{posted_days_ago} Days ago</p>
        <p>{type}</p>
      </div>

      <hr className="mt-3 mb-5" />
      <div className="flex gap-5">
        <button className="text-indigo-500 font-semibold">Details</button>
        <button className="px-5 py-1 rounded bg-indigo-500 text-white font-semibold">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
