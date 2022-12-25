import {header} from '../../styles/font';
import styles from '../../styles/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <p style={header.style} className={styles.logoContent}>
        HD
      </p>
    </div>
  );
};

export default Logo;
