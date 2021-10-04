import { prop, WithDefault } from 'vue-class-component';

import { SelectOptions, SelectValue } from './types';

interface OptionKeys {
  label: string;
  value: string;
}

interface IProps {
  options: SelectOptions;
  value?: SelectValue;
  optionKeys?: WithDefault<OptionKeys>;
  placeholder?: string;
  disabled?: WithDefault<boolean>;
}

export default class Props implements IProps {
  options = prop<SelectOptions>({
    required: true,
  })

  value = prop<SelectValue>({})

  optionKeys = prop<OptionKeys>({
    default: {
      label: 'label',
      value: 'value',
    },
  })

  placeholder = prop<string>({})

  disabled = prop<boolean>({
    default: false,
  })
}
