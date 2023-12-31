import styles from './styles.module.scss';

type Props = {
  label?: string;
};

const ErrorMessage: React.FC<Props> = ({ label }) => {
  return <p className={styles.errorMessage}>{label}</p>;
};

export default ErrorMessage;
