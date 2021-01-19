import Link from "next/link";

//Styles, images and animations
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <Link href="/#home">
        <a>Home</a>
      </Link>
      <Link href="/#education">
        <a>Education</a>
      </Link>
      <Link href="/#experience">
        <a>Experience</a>
      </Link>
      <Link href="/#projects">
        <a>Projects</a>
      </Link>
      <Link href="/#about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Sidebar;
