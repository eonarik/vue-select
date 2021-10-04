import { prop, WithDefault } from 'vue-class-component';

import { SelectOptions, SelectValue } from './types';

interface OptionKeys {
  label: string;
  value: string;
}

interface IProps {
  options: SelectOptions;
  value: SelectValue;
  optionKeys?: WithDefault<OptionKeys>;
}

export default class Props implements IProps {
  options = prop<SelectOptions>({
    required: true,
  })

  value = prop<SelectValue>({
    required: true,
  })

  optionKeys = prop<OptionKeys>({
    default: {
      label: 'label',
      value: 'value',
    },
  })
}
