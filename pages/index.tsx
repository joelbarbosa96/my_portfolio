//import Head from "next/head";
import Link from "next/link";
//Styling, Images and Animations
import Scrollspy from "react-scrollspy";
//Components
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../components/Home/Home";
import About from "../components/About/About";

export default function LandingPage() {
  return (
    <div className="page">
      <Scrollspy
        items={["home", "about", "projects", "contacts"]}
        currentClassName="nav_item__active"
        className="sidebar"
      >
        <li>
          <Link href="#home">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
        </li>

        <li>
          <Link href="#contacts">
            <a>Contacts</a>
          </Link>
        </li>

        {/* <Sidebar /> */}
      </Scrollspy>

      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}
