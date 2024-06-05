import AddJobForm from "../components/forms/AddJobForm";
import useTitle from "../hooks/useTitle";

const AddJobs = () => {
  useTitle("Add Jobs");
  
  return (
    <section className="p-5">
      <h1 className="font-semibold mb-8 text-2xl lg:text-3xl text-center">
        Post a Job
      </h1>
      <AddJobForm />
    </section>
  );
};

export default AddJobs;
