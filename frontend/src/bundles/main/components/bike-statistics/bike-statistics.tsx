import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

import { BikeService } from '~/bundles/main/services/bike-service.js';

import styles from './styles.module.scss';

const BikeStatistics: React.FC = () => {
  const { t } = useTranslation();

  const { data: bikeStatistics } = useQuery({
    queryKey: ['bikeStatistics'],
    queryFn: () => BikeService.getStatistics(),
  });

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{t('bikeStatistics.title')}</h5>
      <p className={styles.bikeInfo}>
        {t('bikeStatistics.total')}:{' '}
        <span className={styles.boldText}>{bikeStatistics?.totalBikes}</span>
      </p>
      <p className={styles.bikeInfo}>
        {t('bikeStatistics.available')}:{' '}
        <span className={styles.boldText}>
          {bikeStatistics?.availableBikes}
        </span>
      </p>
      <p className={styles.bikeInfo}>
        {t('bikeStatistics.booked')}:{' '}
        <span className={styles.boldText}>{bikeStatistics?.bookedBikes}</span>
      </p>
      <p className={styles.bikeInfo}>
        {t('bikeStatistics.averageCost')}:{' '}
        <span className={styles.boldText}>
          {bikeStatistics?.averageBikeCost.toFixed(2)}
        </span>{' '}
        {t('bikeList.currency')}.
      </p>
    </div>
  );
};

export default BikeStatistics;
