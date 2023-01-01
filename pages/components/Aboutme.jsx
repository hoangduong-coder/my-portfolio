import 'animate.css';

import contentList from '/pages/assets/contents.json';
import {header} from '../../styles/font';

const AboutMe = () => {
  return (
    <div id="aboutme" className={`animate__animated animate__fadeInUp`}>
      <h2 style={header.style} className="subHeader">
        {contentList.aboutMe.mainHeading}
      </h2>
    </div>
  );
};

export default AboutMe;
