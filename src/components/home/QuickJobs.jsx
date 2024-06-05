/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import JobCard from "../shared/JobCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../others/LoadingSpinner";

const QuickJobs = ({ filterText }) => {
  const { isPending, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch("https://worknest-server.vercel.app/jobs").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <LoadingSpinner />;

  const filteredJobs = jobs?.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filterText.length > 0) {
    localStorage.setItem("filterText", filterText);
  } else {
    localStorage.removeItem("filterText");
  }


  return (
    <section>
      <h2 className="font-semibold text-indigo-500 text-3xl text-center mb-10">
        Quick Jobs
      </h2>

      {filteredJobs?.length === 0 ? (
        <h3 className="text-lg font-medium text-center mt-20">No jobs found</h3>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs?.slice(0, 5)?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}

      {filteredJobs?.length > 6 && (
        <div className="flex items-center justify-center mt-12">
          <Link
            to={{
              pathname: "/jobs",
              state: { filterText },
            }}
            className="text-white font-medium text-lg px-5 py-2 rounded bg-indigo-500 hover:bg-indigo-600"
          >
            See More
          </Link>
        </div>
      )}
    </section>
  );
};

export default QuickJobs;
