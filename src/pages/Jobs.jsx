/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import JobCard from "../components/shared/JobCard";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useTitle from "../hooks/useTitle";
import { useState, useEffect } from "react";

const Jobs = () => {
  useTitle("Jobs");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const filterText = localStorage.getItem("filterText");

  const { isLoading, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch("https://worknest-server.vercel.app/jobs").then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (jobs && filterText) {
      const filtered = jobs.filter((item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else if (jobs) {
      setFilteredJobs(jobs);
    }
  }, [jobs, filterText]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="max-w-7xl mx-auto px-5 xl:px-0 my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-0">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
