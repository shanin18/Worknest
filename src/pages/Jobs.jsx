import { useQuery } from "@tanstack/react-query";
import JobCard from "../components/shared/JobCard";
import LoadingSpinner from "../components/others/LoadingSpinner";

const Jobs = () => {
  const { isPending, data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: () =>
      fetch("https://worknest-server.vercel.app/jobs").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <LoadingSpinner />;
  return (
    <section className="max-w-7xl mx-auto px-5 xl:px-0 my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-0">
        {jobs?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
