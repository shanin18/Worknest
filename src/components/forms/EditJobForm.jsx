/* eslint-disable react/prop-types */
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const EditJobForm = ({ data }) => {
  const toast = useToast();
  const {
    _id,
    title,
    location,
    start_date,
    type,
    key_responsibilities,
    skills_required,
    benefits,
    shift_options,
    who_can_apply,
    salary,
  } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => mutation.mutate(data);

  const mutation = useMutation({
    mutationFn: (data) =>
      fetch(`https://worknest-server.vercel.app/jobs/${_id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }),
    onSuccess: () => {
      toast({
        title: "Update successfully!",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong. Try Again!",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Title</label>
          <input
            className="input"
            defaultValue={title}
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Company</label>
          <input
            className="input"
            type="text"
            {...register("company", { required: true })}
          />
          {errors.company && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Image</label>
          <input
            className="input"
            type="text"
            {...register("image", { required: true })}
          />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Location</label>
          <input
            className="input"
            defaultValue={location}
            type="text"
            {...register("location", { required: true })}
          />
          {errors.location && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Start Date</label>
          <input
            defaultValue={start_date}
            className="input"
            type="date"
            {...register("start_date", { required: true })}
          />
          {errors.start_date && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Experience Required</label>
          <input
            className="input"
            type="text"
            {...register("experience_required", { required: true })}
          />
          {errors.experience_required && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Apply By</label>
          <input
            className="input"
            type="date"
            {...register("apply_by", { required: true })}
          />
          {errors.apply_by && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Posted Days Ago</label>
          <input
            className="input"
            type="number"
            {...register("posted_days_ago", { required: true })}
          />
          {errors.posted_days_ago && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Type</label>
          <input
            className="input"
            type="text"
            {...register("type", { required: true })}
          />
          {errors.type && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Number of Applicants</label>
          <input
            className="input"
            type="number"
            {...register("number_of_applicants", { required: true })}
          />
          {errors.number_of_applicants && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Salary</label>
          <input
            className="input"
            defaultValue={salary}
            type="text"
            {...register("salary", { required: true })}
          />
          {errors.salary && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Number of Openings</label>
          <input
            className="input"
            type="number"
            {...register("number_of_openings", { required: true })}
          />
          {errors.number_of_openings && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Website</label>
          <input
            className="input"
            type="text"
            {...register("website", { required: true })}
          />
          {errors.website && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Mission</label>
          <input
            className="input"
            type="text"
            {...register("mission", { required: true })}
          />
          {errors.mission && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Global Impact</label>
          <input
            className="input"
            type="text"
            {...register("global_impact", { required: true })}
          />
          {errors.global_impact && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Growth Curve</label>
          <input
            className="input"
            type="text"
            {...register("growth_curve", { required: true })}
          />
          {errors.growth_curve && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Total Members</label>
          <input
            className="input"
            type="number"
            {...register("total_members", { required: true })}
          />
          {errors.total_members && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Hiring Since</label>
          <input
            className="input"
            type="date"
            {...register("hiring_since", { required: true })}
          />
          {errors.hiring_since && <span>This field is required</span>}
        </div>
      </div>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Opportunities Posted</label>
          <input
            className="input"
            type="number"
            {...register("opportunities_posted", { required: true })}
          />
          {errors.opportunities_posted && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label className="label">Candidates Hired</label>
          <input
            className="input"
            type="number"
            {...register("candidates_hired", { required: true })}
          />
          {errors.candidates_hired && <span>This field is required</span>}
        </div>
      </div>
      <button
        type="submit"
        className="bg-indigo-500 py-2 px-6 hover:bg-indigo-600 w-full text-white rounded-md font-medium md:text-lg"
      >
        Update Job
      </button>
    </form>
  );
};

export default EditJobForm;
