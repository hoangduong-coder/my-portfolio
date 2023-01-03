import 'animate.css';

import {content, header} from '/styles/font.js';

import contentList from '/pages/assets/contents.json';
import styles from '/styles/About.module.scss';

const About = () => {
  return (
    <div
      id="about"
      className={`animate__animated animate__fadeInUp ${styles.about}`}
    >
      <h2 style={header.style} className="subHeader">
        {contentList.aboutMe.mainHeading}
      </h2>
      {/* <div className={styles.leftPart}>
        
        <p style={content.style} className="subContent">
          {contentList.skills.introduction}
        </p>
      </div>
       */}
    </div>
  );
};

export default About;
