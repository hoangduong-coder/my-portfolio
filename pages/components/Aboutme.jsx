import 'animate.css';

import {content, header} from '../../styles/font';

import Image from 'next/image';
import contentList from '/pages/assets/contents.json';
import profilePic from '/pages/assets/my-photo.jpg';
import styles from '/styles/AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className={`animate__animated animate__fadeInUp ${styles.aboutMe}`}
    >
      <div className={styles.leftPart}>
        <h2 style={header.style} className="subHeader">
          {contentList.aboutMe.mainHeading}
        </h2>
        <p style={content.style} className="subContent">
          {contentList.aboutMe.introduction}
        </p>
      </div>
      <div className={styles.rightPart}>
        <Image src={profilePic} alt="myAva" className={styles.ava} />
      </div>
    </div>
  );
};

export default AboutMe;
