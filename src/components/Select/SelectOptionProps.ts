import { prop, WithDefault } from 'vue-class-component';

import { SelectOptionDefault } from './types';

interface IProps extends SelectOptionDefault {
  active: WithDefault<boolean>;
}

export default class Props implements IProps {
  label = prop<SelectOptionDefault['label']>({
    required: true,
  })

  value = prop<SelectOptionDefault['value']>({
    required: true,
  })

  active = prop<boolean>({
    default: false,
  })
}
