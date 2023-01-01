import {CalendarMonth, LocationOn, School} from '@mui/icons-material';
import {button, content, header} from '../../styles/font';

import Button from './widget/Button';
import Image from 'next/image';
import Link from 'next/link';
import buttonStyles from '../../styles/Button.module.scss';
import contentList from '../assets/contents.json';
import moment from 'moment';
import profilePic from '../assets/my-photo.jpg';
import styles from '../../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={`animate__animated animate__fadeIn ${styles.home}`}>
      <div className={styles.leftPart}>
        <h3 style={header.style} className="subHeader">
          {contentList.home.subHeading}
        </h3>
        <h2 style={header.style} className="mainHeader">
          {contentList.home.mainHeading}
        </h2>
        <h3 style={content.style} className="content">
          {contentList.home.description}
        </h3>
        <ul className={styles.basicInfo}>
          <li>
            <LocationOn />
            <span style={content.style} className="subContent">
              {contentList.home.location}
            </span>
          </li>
          <li>
            <School />
            <span style={content.style} className="subContent">
              {contentList.home.education}
            </span>
          </li>
          <li>
            <CalendarMonth />
            <span style={content.style} className="subContent">
              Available date: {`${moment ().format ('DD.MM.yyyy')}`}
            </span>
          </li>
        </ul>
        <div>
          <Button>
            <Link
              className={buttonStyles.flatButtonContent}
              href="/dashboard/contact"
            >
              <p style={button.style}>
                CONTACT ME
              </p>
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.rightPart}>
        <Image src={profilePic} alt="myAva" className={styles.ava} />
      </div>
    </div>
  );
};

export default Home;
