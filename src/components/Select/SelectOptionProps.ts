import { prop, WithDefault } from 'vue-class-component';

import { SelectOptionDefault, SelectSizes } from './types';

interface IProps {
  item: SelectOptionDefault;
  active: WithDefault<boolean>;
  focused: WithDefault<boolean>;
  size: SelectSizes;
}

export default class Props implements IProps {
  item = prop<SelectOptionDefault>({
    required: true,
  })

  active = prop<boolean>({
    default: false,
  })

  focused = prop<boolean>({
    default: false,
  })

  size = prop<SelectSizes>({})
}
