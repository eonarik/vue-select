<template lang="pug">
.layout
  .layout__cell
    Select(
      :options="optionsPrimitive"
    )
  .layout__cell
    Select(
      :options="optionsStandart1"
    )
  .layout__cell
    Select(
      :options="optionsStandart2"
    )
  .layout__cell
    Select(
      :options="optionsObject1"
    )
  .layout__cell
    Select(
      :options="optionsObject2"
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

  &__cell {
    padding: 8px;
  }
}
</style>
