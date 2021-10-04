import { prop, WithDefault } from 'vue-class-component';

import { SelectOptions } from './types';

interface OptionKeys {
  label: string;
  value: string;
}

interface IProps {
  options: SelectOptions;
  optionKeys?: WithDefault<OptionKeys>;
}

export default class Props implements IProps {
  options = prop<SelectOptions>({
    required: true,
  })

  optionKeys = prop<OptionKeys>({
    default: {
      label: 'label',
      value: 'value',
    },
  })
}
