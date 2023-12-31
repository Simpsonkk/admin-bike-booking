import Select, { CSSObjectWithLabel, SingleValue } from 'react-select';

import { Option } from '~/bundles/common/types/option.type.js';

type Props = {
  options: Option[];
  selectedValue: SingleValue<Option>;
  handleSelectedValue: (option: SingleValue<Option>) => void;
};

const AutoWidthSelect: React.FC<Props> = ({
  options,
  handleSelectedValue,
  selectedValue,
}) => {
  const customStyles = {
    container: (base: CSSObjectWithLabel) => ({
      ...base,
      width: `${8 * selectedValue!.label.length + 58}px`,
      marginTop: '-11px',
    }),
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
    }),
    menu: (base: CSSObjectWithLabel) => ({
      ...base,
      width: '120px',
    }),
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      value={selectedValue}
      onChange={(value) => handleSelectedValue(value)}
      defaultValue={selectedValue}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default AutoWidthSelect;
