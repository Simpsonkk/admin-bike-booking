import BikeList from '~/bundles/main/components/bike-list/bike-list.js';
import CreateBikeForm from '~/bundles/main/components/create-bike-form/create-bike-form.js';
import BikeStatistics from '~/bundles/main/components/bike-statistics/bike-statistics.js';

import styles from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <BikeList />
      <div className={styles.wrapper}>
        <CreateBikeForm />
        <BikeStatistics />
      </div>
    </main>
  );
};

export default MainPage;
