<template lang="pug">
.layout
  .layout__cell
    h3 Primitive
    Select(
      :options="optionsPrimitive"
    )
  .layout__cell
    h3 Standart 1
    Select(
      :options="optionsStandart1"
    )
  .layout__cell
    h3 Standart 2
    Select(
      :options="optionsStandart2"
      :optionKeys="{ label: 'title', value: 'id' }"
    )
  .layout__cell
    h3 Object 1
    Select(
      :options="optionsObject1"
    )
  .layout__cell
    h3 Object 2
    Select(
      :options="optionsObject2"
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
      optionsPrimitive,
      optionsStandart1,
      optionsStandart2,
      optionsObject1,
      optionsObject2,
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
