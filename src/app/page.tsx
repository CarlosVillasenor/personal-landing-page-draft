import Jumbotron from "@/components/Jumbotron/Jumbotron";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";

export default function Home() {
  return (
    <div className="page">
      <Jumbotron />
      <About />
      <Stack />
    </div>
  );
}
