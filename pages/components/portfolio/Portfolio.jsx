import 'animate.css';

import ProjectTag from './ProjectTag';
import contentList from '/pages/assets/contents.json';
import {header} from '/styles/font';
import styles from '/styles/Portfolio.module.css';

const Portfolio = () => {
  return (
    <div id="portfolio" className={`animate__animated animate__fadeInUp`}>
      <h2 style={header.style} className="subHeader">
        {contentList.portfolio.mainHeading}
      </h2>
      <div className={styles.jobList}>
        {contentList.portfolio.experience.map (ex => (
          <ProjectTag
            info={ex}
            key={contentList.portfolio.experience.indexOf (ex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
