import 'animate.css';

import AboutMe from './components/Aboutme';
import Head from "next/head";
import Home from "./components/Home";
import NavBar from "/pages/components/widget/NavBar.jsx"
import Portfolio from './components/portfolio/Portfolio';
import contentList from "../pages/assets/contents.json";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>{contentList.title}</title>
      </Head>
      <div>
        <NavBar />
        <div className="layout">
          <Home />
          <AboutMe/>
          <Portfolio/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
