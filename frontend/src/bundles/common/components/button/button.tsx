import styles from './styles.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  disabled = false,
  onClick,
  label,
  type = 'button',
}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
