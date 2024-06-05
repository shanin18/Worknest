import Hero from "../components/home/Hero";
import QuickJobs from "../components/home/QuickJobs";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <section className="max-w-7xl mx-auto px-5 xl:px-0">
      <Hero />
      <QuickJobs />
    </section>
  );
};

export default Home;
