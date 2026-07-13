import { Code2 } from "lucide-react";
import styles from "./Stack.module.css";
import Image from "next/image";

type StackItem = {
  name: string;
  short: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", short: "JS" },
      { name: "HTML5", short: "H5" },
      { name: "CSS3", short: "C3" },
      { name: "Python", short: "Py" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", short: "R" },
      { name: "TypeScript", short: "TS" },
      { name: "Next.js", short: "N" },
      { name: "Redux", short: "Rx" },
    
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Tailwind CSS", short: "TW" },
      { name: "Sass", short: "Sa" }
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Vite", short: "Vi" },
      { name: "GitHub", short: "Gh" },
      { name: "Webpack", short: "Wp" },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Jest", short: "Je" },
    ],
  }
];

export default function Stack() {
  return (
    <section id="skills" className={styles.stackSection}>
      <div className={styles.panel}>
        <h2 className={styles.title}>
          <Code2 size={24} aria-hidden="true" />
          Tech Stack
        </h2>

        <div className={styles.groups}>
          {stackGroups.map((group) => (
            <article key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <Image
                      src={`/tech-icons/${group.title.toLowerCase().replace(/\s+/g, "-")}/${item.name}.svg`}
                      alt={item.short}
                      width={32}
                      height={32}
                      className={styles.icon}
                    />
                    <span className={styles.itemLabel}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
