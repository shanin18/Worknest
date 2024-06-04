import { useQuery } from "@tanstack/react-query";
import JobCard from "../shared/JobCard";

const QuickJobs = () => {
  const { isPending, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch("https://worknest-server.vercel.app/jobs").then((res) => res.json()),
  });

  if (isPending) return "Loading...";
  return (
    <section>
      <h2 className="font-semibold text-indigo-500 text-3xl text-center mb-10">
        Quick Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.slice(0, 5)?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default QuickJobs;
