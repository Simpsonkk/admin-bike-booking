import { useQuery } from '@tanstack/react-query';

import { BikeService } from '~/bundles/main/services/bike-service.js';
import BikeCard from '~/bundles/main/components/bike-card/bike-card.js';

import styles from './styles.module.scss';

const BikeList: React.FC = () => {
  const { data: bikes, isSuccess } = useQuery({
    queryKey: ['bikes'],
    queryFn: () => BikeService.getAll(),
  });

  return (
    <ul className={styles.list}>
      {isSuccess && bikes.map((bike) => <BikeCard key={bike.id} bike={bike} />)}
    </ul>
  );
};

export default BikeList;
