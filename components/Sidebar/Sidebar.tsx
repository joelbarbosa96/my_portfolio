import Link from "next/link";

//Styles, images and animations
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <Link href="#home">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href="#about">
        <li>
          <a>About</a>
        </li>
      </Link>
      <Link href="#projects">
        <li>
          <a>Projects</a>
        </li>
      </Link>
      <Link href="#contacts">
        <li>
          <a>Contacts</a>
        </li>
      </Link>
    </>
  );
};

export default Sidebar;
