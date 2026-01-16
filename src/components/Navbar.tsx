import React, { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { path: "#", label: "Home" },
    { path: "#projects", label: "Projects" },
    { path: "#experience", label: "Experience" },
    { path: "#skills", label: "Skills" },
    { path: "#contact", label: "Contact" },
  ]

  const handleNavClick = (path: string) => {
    setIsOpen(false)
    if (path === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const id = path.replace("#", "")
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#")
          }}
          className={styles.logo}
        >
          <Sparkles size={18} />
          <span>steph</span>
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <a
                href={path}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(path)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
