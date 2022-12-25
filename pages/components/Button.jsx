import styles from '../../styles/Button.module.scss';

const Button = ({children}) => {
  return (
    <div className={styles.flatButton}>
      {children}
    </div>
  );
};

export default Button;
