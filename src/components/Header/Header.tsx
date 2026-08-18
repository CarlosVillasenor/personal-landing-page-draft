"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "@public/logo.svg";
import { Download } from 'lucide-react';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="CV" width={60} height={60} />
        </Link>

        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="https://drive.google.com/file/d/19GdgVSOtf9Alwa8JqhC7FEyuxbbkPRzu/view" target="_blank" className={styles.resumeButton} >
          Resume
          <Download className={styles.downloadIcon} />
        </a>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <a href="/resume.pdf" target="_blank" className={styles.mobileResume} >
            Download Resume
            <Download className={styles.downloadIcon} />
          </a>
        </nav>
      </div>
    </header>
  );
}
