import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';

import Input from '~/bundles/common/components/input/input.js';
import { CreateBike } from '~/bundles/main/types/create-bike.type.js';
import {
  BIKE_CREATE_MESSAGE,
  CREATE_BIKE_DEFAULT_VALUES,
} from '~/bundles/main/components/create-bike-form/constants.js';
import { CreateBikeSchema } from '~/bundles/main/components/create-bike-form/validation.js';
import Button from '~/bundles/common/components/button/button.js';
import ErrorMessage from '~/bundles/common/components/error-message/error-message.js';
import { BikeService } from '~/bundles/main/services/bike-service.js';

import styles from './styles.module.scss';

const CreateBikeForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CreateBike>({
    defaultValues: CREATE_BIKE_DEFAULT_VALUES,
    resolver: joiResolver(CreateBikeSchema),
    mode: 'onBlur',
  });

  const queryClient = useQueryClient();

  const { mutate: createBike } = useMutation({
    mutationFn: BikeService.create,
    onSuccess: () => {
      toast.success(BIKE_CREATE_MESSAGE);
      queryClient.invalidateQueries({ queryKey: ['bikes'] });
      queryClient.invalidateQueries({ queryKey: ['bikeStatistics'] });
    },
    onError: (error) => toast.error(error.message),
  });

  const onSubmit: SubmitHandler<CreateBike> = (values) => {
    createBike(values);
    reset();
  };

  const handleClearFields = () => reset();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.inputGroup}>
        <Input
          control={control}
          name="name"
          placeholder={t('bikeForm.placeholder.name')}
        />
        {errors?.name && <ErrorMessage label={errors.name?.message} />}

        <Input
          control={control}
          name="color"
          placeholder={t('bikeForm.placeholder.color')}
        />
        {errors?.color && <ErrorMessage label={errors.color?.message} />}

        <Input
          control={control}
          name="price"
          placeholder={t('bikeForm.placeholder.price')}
        />
        {errors?.price && <ErrorMessage label={errors.price?.message} />}
      </fieldset>

      <fieldset className={styles.inputGroup}>
        <Input
          control={control}
          name="type"
          placeholder={t('bikeForm.placeholder.type')}
        />
        {errors?.type && <ErrorMessage label={errors.type?.message} />}

        <Input
          control={control}
          name="wheelSize"
          placeholder={t('bikeForm.placeholder.wheelSize')}
        />
        {errors?.wheelSize && (
          <ErrorMessage label={errors.wheelSize?.message} />
        )}

        <Input
          control={control}
          name="status"
          placeholder={t('bikeForm.placeholder.status')}
        />
        {errors?.status && <ErrorMessage label={errors.status?.message} />}
      </fieldset>

      <Input
        control={control}
        name="description"
        textarea
        placeholder={t('bikeForm.placeholder.description')}
      />
      {errors?.description && (
        <ErrorMessage label={errors.description?.message} />
      )}

      <div className={styles.buttonWrapper}>
        <Button
          label={t('button.save')}
          type="submit"
          onClick={() => {}}
          disabled={!isValid}
        />
        <Button label={t('button.clear')} onClick={handleClearFields} />
      </div>
    </form>
  );
};

export default CreateBikeForm;
