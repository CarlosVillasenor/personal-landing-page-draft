import Jumbotron from "@/components/Jumbotron/Jumbotron";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="page" id="top">
      <Jumbotron />
      <About />
      <Stack />
      <Footer />
    </div>
  );
}
