<template lang="pug">
.layout
  .layout__cell
    h3 Primitive
    Select(
      :options="options1"
      :value="value1"
      @update:value="value1 = $event"
    )
  .layout__cell
    h3 Standart 1
    Select(
      :options="options2"
      v-model:value="value2"
    )
  .layout__cell
    h3 Standart 2
    Select(
      :options="options3"
      v-model:value="value3"
      :optionKeys="{ label: 'title', value: 'id' }"
    )
  .layout__cell
    h3 Object 1
    Select(
      :options="options4"
      v-model:value="value4"
    )
  .layout__cell
    h3 Object 2
    Select(
      :options="options4"
      v-model:value="value4"
      :optionKeys="{ label: 'title', value: 'id' }"
    )
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { Select } from '@/components';

import {
  optionsPrimitive,
  optionsStandart1,
  optionsStandart2,
  optionsObject1,
  optionsObject2,
} from './mockOptions';

@Options({
  data() {
    return {
      options1: optionsPrimitive,
      options2: optionsStandart1,
      options3: optionsStandart2,
      options4: optionsObject1,
      options5: optionsObject2,
      value1: optionsPrimitive[0],
      value2: optionsStandart1[0].value,
      value3: optionsStandart2[0].id,
      value4: Object.keys(optionsObject1)[0],
      value5: Object.keys(optionsObject2)[0],
    };
  },
  components: {
    Select,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.layout {
  padding: 16px 32px;
  display: flex;
  flex-wrap: wrap;

  &__cell {
    box-sizing: border-box;
    padding: 8px;
    width: 33%;
  }
}
</style>
