import { useFieldArray, useForm } from "react-hook-form";

const AddJobForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderFieldArray = (fields, append, remove, name, label) => (
    <div>
      <label className="label">{label}</label>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input
            className="input"
            {...register(`${name}.${index}`)}
            defaultValue={item.value} // make sure to set up defaultValue
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        className="input"
        type="button"
        onClick={() => append({ value: "" })}
      >
        Add {label}
      </button>
    </div>
  );

  const keyResponsibilities = useFieldArray({
    control,
    name: "key_responsibilities",
  });
  const behavioralAttributes = useFieldArray({
    control,
    name: "behavioral_attributes",
  });
  const eligibilityCriteria = useFieldArray({
    control,
    name: "eligibility_criteria",
  });
  const benefits = useFieldArray({ control, name: "benefits" });
  const shiftOptions = useFieldArray({ control, name: "shift_options" });
  const skillsRequired = useFieldArray({ control, name: "skills_required" });
  const learnCertifications = useFieldArray({
    control,
    name: "learn_certifications",
  });
  const whoCanApply = useFieldArray({ control, name: "who_can_apply" });
  const activities = useFieldArray({ control, name: "activities" });
  const footprint = useFieldArray({ control, name: "footprint" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex items-center gap-5 space-y-5 md:space-y-0 mb-5">
        <div className="w-full">
          <label className="label">Title</label>
          <input
            className="input"
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

      {renderFieldArray(
        keyResponsibilities.fields,
        keyResponsibilities.append,
        keyResponsibilities.remove,
        "key_responsibilities",
        "Key Responsibilities"
      )}
      {renderFieldArray(
        behavioralAttributes.fields,
        behavioralAttributes.append,
        behavioralAttributes.remove,
        "behavioral_attributes",
        "Behavioral Attributes"
      )}
      {renderFieldArray(
        eligibilityCriteria.fields,
        eligibilityCriteria.append,
        eligibilityCriteria.remove,
        "eligibility_criteria",
        "Eligibility Criteria"
      )}
      {renderFieldArray(
        benefits.fields,
        benefits.append,
        benefits.remove,
        "benefits",
        "Benefits"
      )}
      {renderFieldArray(
        shiftOptions.fields,
        shiftOptions.append,
        shiftOptions.remove,
        "shift_options",
        "Shift Options"
      )}
      {renderFieldArray(
        skillsRequired.fields,
        skillsRequired.append,
        skillsRequired.remove,
        "skills_required",
        "Skills Required"
      )}
      {renderFieldArray(
        learnCertifications.fields,
        learnCertifications.append,
        learnCertifications.remove,
        "learn_certifications",
        "Learn Certifications"
      )}
      {renderFieldArray(
        whoCanApply.fields,
        whoCanApply.append,
        whoCanApply.remove,
        "who_can_apply",
        "Who Can Apply"
      )}
      {renderFieldArray(
        activities.fields,
        activities.append,
        activities.remove,
        "activities",
        "Activities"
      )}
      {renderFieldArray(
        footprint.fields,
        footprint.append,
        footprint.remove,
        "footprint",
        "Footprint"
      )}

      <button
        type="submit"
        className="bg-indigo-500 py-2 px-6 hover:bg-indigo-600 w-full text-white rounded-md font-medium md:text-lg"
      >
        Post Job
      </button>
    </form>
  );
};

export default AddJobForm;
