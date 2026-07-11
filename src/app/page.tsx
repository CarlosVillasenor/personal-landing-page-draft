import styles from "./page.module.css";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className="page">
      <Jumbotron />
      <About />
    </div>
  );
}
