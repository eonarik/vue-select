import { prop, WithDefault } from 'vue-class-component';

import { SelectOptionDefault } from './types';

interface IProps {
  item: SelectOptionDefault;
  active: WithDefault<boolean>;
}

export default class Props implements IProps {
  item = prop<SelectOptionDefault>({
    required: true,
  })

  active = prop<boolean>({
    default: false,
  })
}
