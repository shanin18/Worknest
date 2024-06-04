import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import EditJobForm from "../components/forms/EditJobForm";

const EditJobs = () => {
  const { id } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["job-details"],
    queryFn: () =>
      fetch(`https://worknest-server.vercel.app/jobs/details/${id}`).then(
        (res) => res.json()
      ),
  });

  if (isPending) return "Loading...";

  return (
    <section className="p-5">
      <h1 className="font-semibold mb-8 text-2xl lg:text-3xl text-center">
        Edit this job
      </h1>
      <EditJobForm data={data} />
    </section>
  );
};

export default EditJobs;
