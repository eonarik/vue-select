export type SelectValue = string | number;

export interface SelectOptionDefault {
  label: string;
  value: SelectValue;
}

export type SelectOptionsPrimitive = Array<SelectValue>;
export type SelectOptionsStandart<T = SelectOptionDefault> = Array<T>;
export type SelectOptionsObject<T = SelectOptionDefault> = Record<string, SelectValue | T>;

export type SelectOptions = (
  SelectOptionsPrimitive
  | SelectOptionsStandart
  | SelectOptionsObject
);
