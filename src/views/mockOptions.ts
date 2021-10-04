import { SelectOptionsPrimitive, SelectOptionsStandart, SelectOptionsObject } from '@/components/Select';

// tested type
export interface TestOption {
  title: string;
  id: number;
}

export const optionsPrimitive: SelectOptionsPrimitive = [
  'Orange', 'Pineapple', 'Apple', 'Banana',
];

export const optionsStandart1: SelectOptionsStandart = [
  {
    label: 'Orange',
    value: 'orng',
  },
  {
    label: 'Pineapple',
    value: 'papl',
  },
  {
    label: 'Apple',
    value: 'appl',
  },
  {
    label: 'Banana!',
    value: 'bnna',
  },
];

export const optionsStandart2: SelectOptionsStandart<TestOption> = [
  {
    title: 'Orange',
    id: 1,
  },
  {
    title: 'Pineapple',
    id: 2,
  },
  {
    title: 'Apple',
    id: 3,
  },
  {
    title: 'Banana!',
    id: 4,
  },
];

export const optionsObject1: SelectOptionsObject = {
  orng: 'Orange',
  papl: 'Pineapple',
  appl: 'Apple',
  bnna: 'Banana?',
};

export const optionsObject2: SelectOptionsObject<TestOption> = {
  orng: {
    title: 'Orange',
    id: 1,
  },
  papl: {
    title: 'Pineapple',
    id: 2,
  },
  appl: {
    title: 'Apple',
    id: 3,
  },
  bnna: {
    title: 'Banana?',
    id: 4,
  },
};
