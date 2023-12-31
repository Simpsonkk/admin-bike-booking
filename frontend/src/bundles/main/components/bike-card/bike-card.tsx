import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SingleValue } from 'react-select';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Bike } from '~/bundles/main/types/bike.type.js';
import Cross from '~/assets/images/icons/cross.js';
import AutoWidthSelect from '~/bundles/common/components/select/select.js';
import {
  BIKE_DELETE_MESSAGE,
  BIKE_STATUS_OPTIONS,
  BIKE_UPDATE_MESSAGE,
} from '~/bundles/main/components/bike-card/constants.js';
import { Option } from '~/bundles/common/types/option.type.js';
import { BikeService } from '~/bundles/main/services/bike-service.js';
import { getValidClassNames } from '~/bundles/common/helpers/get-valid-class-names.helper.js';

import styles from './styles.module.scss';

type Props = {
  bike: Bike;
};

const BikeCard: React.FC<Props> = ({ bike }) => {
  const { t } = useTranslation();

  const [bikeStatus, setBikeStatus] = useState<SingleValue<Option>>({
    label: bike.status,
    value: bike.status,
  });

  const queryClient = useQueryClient();

  const { mutate: updateBike } = useMutation({
    mutationFn: BikeService.update,
    onSuccess: () => {
      toast.success(BIKE_UPDATE_MESSAGE);
      queryClient.invalidateQueries({ queryKey: ['bikes'] });
      queryClient.invalidateQueries({ queryKey: ['bikeStatistics'] });
    },
    onError: (error) => toast.error(error.message),
  });

  const { mutate: deleteBike } = useMutation({
    mutationFn: BikeService.delete,
    onSuccess: () => {
      toast.success(BIKE_DELETE_MESSAGE);
      queryClient.invalidateQueries({ queryKey: ['bikes'] });
      queryClient.invalidateQueries({ queryKey: ['bikeStatistics'] });
    },
    onError: (error) => toast.error(error.message),
  });

  const handleBikeStatus = (value: SingleValue<Option>) => {
    setBikeStatus(value);
    updateBike({
      bikeId: bike.id,
      bike: { status: value?.label },
    });
  };

  const handleBikeDelete = () => {
    deleteBike(bike.id);
  };

  return (
    <li
      className={getValidClassNames(
        styles.card,
        styles[bike.status.toLowerCase()],
      )}
    >
      <div className={styles.bikeInfo}>
        <p className={styles.name}>
          <span className={styles.nameSpan}>{bike.name}</span> - {bike.type} (
          {bike.color})
        </p>

        <p className={styles.id}>
          {t('bikeList.id')}: {bike.id}
        </p>

        <div className={styles.status}>
          {t('bikeList.status')}:{' '}
          <AutoWidthSelect
            options={BIKE_STATUS_OPTIONS}
            selectedValue={bikeStatus}
            handleSelectedValue={handleBikeStatus}
          />
        </div>
      </div>

      <p className={styles.bikePrice}>
        {bike.price} {t('bikeList.currency')}.
      </p>

      <button onClick={handleBikeDelete} className={styles.deleteButton}>
        <Cross />
      </button>
    </li>
  );
};

export default BikeCard;
