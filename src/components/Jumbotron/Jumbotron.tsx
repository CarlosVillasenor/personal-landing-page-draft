import { Mail, MapPin, ArrowRight } from "lucide-react";
import styles from "./Jumbotron.module.css";
import Image from "next/image";
import Avatar from "@public/carlos-avatar.png";

export default function Jumbotron() {
  return (
    <section className={styles.jumbotron} id="home">
      {/* Left side */}
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I am 👋</p>
        <h1 className={styles.name}>Carlos Villaseñor</h1>
        <p className={styles.role}>Software Engineer - Frontend</p>
        <p className={styles.bio}>
          I build fast, scalable and accessible web experiences with React and
          modern technologies. I love solving complex problems and turning ideas
          into clean, performant interfaces.
        </p>

        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnPrimary}>
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Contact Me <Mail size={16} />
          </a>
        </div>

        <div className={styles.meta}>
          {/* <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={20} />
          </a> */}
          <a href="mailto:carlos@example.com" aria-label="Email">
            <Mail size={20} />
          </a>
          <span className={styles.location}>
            <MapPin size={16} /> Mexico
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className={styles.visual}>
        <div className={styles.avatarWrapper}>
          <div className={styles.glow} />
          <div className={styles.avatar}>
            <Image src={Avatar} alt="Carlos Villaseñor" width={240} height={240} />
          </div>
        </div>

        <div className={styles.codeCard}>
          <div className={styles.codeCardDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <pre className={styles.code}>{`const developer = {
  name: "Carlos",
  role: "Frontend Developer",
  passion: "Building great
  user experiences",
};`}</pre>
        </div>
      </div>
    </section>
  );
}
