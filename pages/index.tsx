//import Head from "next/head";

//Styling, Images and Animations

//Components
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../components/Home/Home";
import Education from "../components/Education/Education";

export default function LandingPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="main">
        <Home />
        <Education />
      </main>
    </div>
  );
}
