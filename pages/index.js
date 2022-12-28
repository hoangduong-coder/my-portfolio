import 'animate.css';

import Head from "next/head";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import contentList from "../pages/assets/contents.json";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>{contentList.title}</title>
      </Head>
      <div>
        <NavBar />
        <div className="animate__animated animate__fadeInUp layout">
          <Home />
        </div>
      </div>
    </>
  );
};

export default MainPage;
