import { useQuery } from "@tanstack/react-query";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiBookmark, CiMoneyBill, CiShare2 } from "react-icons/ci";
import { GiTimeTrap } from "react-icons/gi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiSuitcase } from "react-icons/pi";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const { isPending, data: details } = useQuery({
    queryKey: ["job-details"],
    queryFn: () =>
      fetch(`http://localhost:5000/jobs/details/${id}`).then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";
  console.log(details);

  const {
    title,
    company,
    image,
    location,
    start_date,
    ctc_annual,
    experience_required,
    apply_by,
    posted_days_ago,
    type,
    key_responsibilities,
    behavioral_attributes,
    eligibility_criteria,
    benefits,
    skills_required,
    learn_certifications,
    who_can_apply,
    about_company,
    salary,
    number_of_openings,
  } = details;

  return (
    <section className="max-w-7xl mx-auto rounded-md my-14">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold md:font-bold text-center mb-8">
        {title}
      </h1>

      <div className=" shadow-lg p-5 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl mb-3">{title}</h1>
            <h2 className="font-semibold">{company}</h2>
          </div>
          <img src={image} alt="logo" className="w-10 md:w-20" />
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
        <div className="flex flex-wrap items-center gap-5 md:gap-12 xl:gap-20 mb-3">
          <div>
            <div>
              <p className="font-medium text-sm">
                {" "}
                <AiOutlinePlayCircle className="mr-1 inline mb-1 text-lg" />{" "}
                START DATE
              </p>
            </div>
            <p className="text-[15px]">{start_date}</p>
          </div>
          <div>
            <div>
              <p className="font-medium text-sm">
                <CiMoneyBill className="mr-1 inline mb-1 text-lg" /> CTC
                (ANNUAL)
              </p>
            </div>
            <p className="text-[15px]">{ctc_annual}</p>
          </div>
          <div>
            <div>
              <p className="font-medium text-sm">
                <PiSuitcase className="mr-1 inline mb-1 text-lg" /> EXPERIENCE
              </p>
            </div>
            <p className="text-[15px]">{experience_required}</p>
          </div>
          <div>
            <div>
              <p className="font-medium text-sm">
                <GiTimeTrap className="mr-1 inline mb-1 text-lg" /> Apply By
              </p>
            </div>
            <p className="text-[15px]">{apply_by}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-xs">{posted_days_ago} Days ago</p>
          <p className="px-2 py-1 rounded-md bg-gray-100 text-xs dark:text-gray-800">
            {type}
          </p>
        </div>
        <div className="flex items-center justify-end gap-8">
          <button>
            <CiBookmark className="text-2xl text-indigo-500" />
          </button>
          <button>
            <CiShare2 className="text-2xl text-indigo-500" />
          </button>
        </div>
        <hr className="mt-3 mb-5" />
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">About the Job</h3>
          <p className="font-medium text-gray-600 dark:text-white mb-6">
            Key responsibilities:{" "}
          </p>
          {key_responsibilities?.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-600 dark:text-white text-[15px] mb-1 font-medium"
            >
              {idx + 1}. {item}
            </p>
          ))}
        </div>
        <div className="mb-8">
          <p className="font-medium text-gray-600 dark:text-white mb-6">
            Eligibility criteria:
          </p>
          {eligibility_criteria?.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-600 dark:text-white text-[15px] mb-1 font-medium"
            >
              {idx + 1}. {item}
            </p>
          ))}
        </div>
        <div className="mb-8">
          <p className="font-medium text-gray-600 dark:text-white mb-6">
            Behavioral attributes
          </p>
          {behavioral_attributes?.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-600 dark:text-white text-[15px] mb-1 font-medium"
            >
              {idx + 1}. {item}
            </p>
          ))}
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Skills required</h3>
          <div className="flex flex-wrap items-center gap-4">
            {skills_required?.map((item, idx) => (
              <p
                key={idx}
                className="text-gray-600 text-[15px] mb-1 font-medium px-3 py-1 rounded-full bg-gray-100"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-medium mb-4">
            Earn certifications in these skills
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {learn_certifications?.map((item, idx) => (
              <p
                key={idx}
                className="text-indigo-500 text-[15px] mb-1 font-medium rounded-full"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Salary</h3>
          <p className="text-[15px] text-medium dark:white">
            Annual CTC: {salary?.annual_ctc}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Benefits</h3>
          {benefits?.map((item, idx) => (
            <p
              key={idx}
              className="text-gray-600 dark:text-white text-[15px] mb-1 font-medium"
            >
              {idx + 1}. {item}
            </p>
          ))}
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Who can apply</h3>
          <p className="text-[15px] text-medium dark:white">{who_can_apply}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Number of openings</h3>
          <p className="text-[15px] text-medium dark:white">
            {number_of_openings}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            About {about_company?.name}
          </h3>
          <p className="text-[15px] text-gray-600 dark:white">
            <span className="font-medium">Mission: </span>
            {about_company?.mission}
          </p>
          <p className="text-[15px] text-gray-600 dark:white">
            <span className="font-medium">Website: </span>
            {about_company?.website}
          </p>
          <p className="text-[15px] text-gray-600 dark:white">
            <span className="font-medium">Growth curve: </span>
            {about_company?.growth_curve}
          </p>
        </div>

        <div className="mb-8">
          <div className="border rounded-md px-5 py-3">
            <h3 className="font-semibold mb-2">Activity on Internshala</h3>
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-sm text-gray-600 dark:text-white font-medium">
                Hiring since{" "}
                {about_company?.activity_on_internshala?.hiring_since}
              </p>
              <p className="text-sm text-gray-600 dark:text-white font-medium">
                {about_company?.activity_on_internshala?.opportunities_posted}{" "}
                opportunities posted
              </p>
              <p className="text-sm text-gray-600 dark:text-white font-medium">
                {about_company?.activity_on_internshala?.candidates_hired}{" "}
                candidates hired
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-5 py-1 rounded bg-indigo-500 text-white font-semibold">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
