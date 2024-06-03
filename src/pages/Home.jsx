import Hero from "../components/home/Hero";
import QuickJobs from "../components/home/QuickJobs";

const Home = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 xl:px-0">
      <Hero />
      <QuickJobs />
    </section>
  );
};

export default Home;
