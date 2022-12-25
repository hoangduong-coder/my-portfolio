import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import content from '../assets/contents.json';
import {navbar} from '../../styles/font';
import styles from '../../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <Link href="/" className={styles.heading}>
          <div>HD</div>
        </Link>
        {content.header.map ((li, index) => (
          <Link key={index} href={li.url} className={styles.heading}>
            <p style={navbar.style}>
              {li.title}
            </p>
          </Link>
        ))}
      </div>
      <div>
        <Link href="/dashboard/contact" className={styles.heading}>
          <p style={navbar.style}>Contact</p>
        </Link>
        <a
          href="https://github.com/hoangduong-coder"
          target="blank"
          className={styles.headingIcons}
        >
          <FontAwesomeIcon icon={faGithub} color="#f0f8ff" size="2x" />
        </a>
        <a
          className={styles.headingIcons}
          href="https://www.linkedin.com/in/hoang-duong-4a5543194/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#f0f8ff" size="2x" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
