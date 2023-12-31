import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <p className={styles.title}>{t('header.title')}</p>
    </header>
  );
};

export default Header;
