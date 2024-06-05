import { useState } from "react";
import Hero from "../components/home/Hero";
import QuickJobs from "../components/home/QuickJobs";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const [filterText, setFilterText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterText(e.target.search.value);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 xl:px-0">
      <Hero handleSubmit={handleSubmit} />
      <QuickJobs filterText={filterText} />
    </section>
  );
};

export default Home;
