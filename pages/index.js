import 'animate.css';

import About from "./components/about/About"
import Contact from "./components/contact/Contact"
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
          <About/>
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
