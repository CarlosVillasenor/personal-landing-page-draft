import Link from "next/link";
import { ArrowRight, ArrowUp, Heart, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

export default function Footer() {
	return (
		<footer className={styles.footer} id="contact">
			<div className={styles.container}>
				<section className={styles.ctaCard} aria-labelledby="footer-cta-title">
					<div className={styles.iconWrap} aria-hidden="true">
						<Mail className={styles.icon} />
					</div>

					<div className={styles.ctaContent}>
						<p className={styles.eyebrow}>Available for full-time work and freelance projects</p>
						<h2 id="footer-cta-title">Let's work together!</h2>
						
					</div>

					{/* <Link href="mailto:hello@carlos.dev" className={styles.ctaButton}>
						<span>Get In Touch</span>
						<ArrowRight className={styles.buttonIcon} />
					</Link> */}
					<Button>
						Get In Touch
						<ArrowRight className="buttonIcon" />
					</Button>
				</section>

				<div className={styles.bottomRow}>
					<p className={styles.copy}>
						2026 Carlos Villaseñor.
					</p>

					<p className={styles.builtWith}>
						Built with <Heart className={styles.heart} /> and Next.js
					</p>

					<Link href="#top" className={styles.backToTop}>
						<span>Back to top</span>
						<ArrowUp className={styles.topIcon} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
