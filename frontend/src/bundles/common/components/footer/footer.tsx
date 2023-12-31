import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p className={styles.author}>
        <span className={styles.developer}>{t('footer.developer')}:</span>{' '}
        {t('footer.author')}
      </p>
    </footer>
  );
};

export default Footer;
