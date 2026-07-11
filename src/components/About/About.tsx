import { UserRound, CalendarDays, Code2, Users, Coffee } from "lucide-react";
import styles from "./About.module.css";

const stats = [
	{
		icon: CalendarDays,
		value: "7+",
		label: "Years of Experience",
	},
	{
		icon: Code2,
		value: "20+",
		label: "Projects Completed",
	},
	{
		icon: Users,
		value: "10+",
		label: "Happy Clients",
	},
	{
		icon: Coffee,
		value: "∞",
		label: "Cups of Coffee",
	},
];

export default function About() {
	return (
		<section id="about" className={styles.aboutSection}>
			<div className={styles.panel}>
				<article className={styles.aboutCopy}>
					<h2 className={styles.title}>
						<UserRound size={24} aria-hidden="true" />
						About Me
					</h2>

					<p className={styles.description}>
						I&apos;m a Senior Frontend Developer with more than 7 years of experience
						building web applications. My expertise is centered around React,
						TypeScript and frontend architecture. I enjoy improving performance,
						creating reusable components and delivering outstanding user
						experiences.
					</p>
				</article>

				<div className={styles.stats}>
					{stats.map(({ icon: Icon, value, label }) => (
						<div key={label} className={styles.statItem}>
							<Icon className={styles.statIcon} aria-hidden="true" />
							<p className={styles.statValue}>{value}</p>
							<p className={styles.statLabel}>{label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
