import Head from "next/head";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import WorkExperience from '../components/WorkExperience'
import contentList from "../assets/contents.json";
import { header } from "../../styles/font";
import styles from "../../styles/Portfolio.module.css";

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
          <div className={styles.jobList}>
            {contentList.portfolio.experience.map(
              (ex) =>
                ex.type !== "PROJECT" && (
                  <WorkExperience
                    info={ex}
                    key={contentList.portfolio.experience.indexOf(ex)}
                  />
                )
            )}
          </div>
          <h2 style={header.style} className="subHeader">
            {contentList.portfolio.mainHeading}
          </h2>
          <div className={styles.jobList}>
            {contentList.portfolio.experience.map(
              (ex) =>
                ex.type === "PROJECT" && (
                  <Project
                    info={ex}
                    key={contentList.portfolio.experience.indexOf(ex)}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
