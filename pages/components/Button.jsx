import Link from 'next/link';
import {button} from '../../styles/font';
import styles from '../../styles/Button.module.scss';

const Button = ({url, content}) => {
  return (
    <div className={styles.flatButton}>
      <Link className={styles.flatButtonContent} href={url}>
        <p style={button.style}>
          {content}
        </p>
      </Link>
    </div>
  );
};

export default Button;
