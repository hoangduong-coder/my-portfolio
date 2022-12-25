import Head from "next/head";
import NavBar from "../components/NavBar";
import contentList from "../assets/contents.json"
import { header } from "../../styles/font";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Experiences | {contentList.title}</title>
      </Head>
      <div>
        <NavBar />
        <div className="layout">
          <h2 style={header.style} className="subHeader">
            {contentList.portfolio.mainHeading}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
