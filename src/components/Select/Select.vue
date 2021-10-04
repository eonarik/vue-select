<template lang="pug">
div {{ innerOptions }}
.root.root--opened.root--lg
  input.input(type="text")
  .options
    SelectOption(
      v-for="option in innerOptions"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    )
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SelectOption from './SelectOption.vue';
import SelectProps from './SelectProps';

import {
  SelectOptionsPrimitive,
  SelectOptionsStandart,
  SelectOptionsObject,
  SelectOptionDefault,
} from './types';

@Options({
  components: {
    SelectOption,
  },
})
export default class Select extends Vue.with(SelectProps) {
  get innerOptions(): SelectOptionDefault[] {
    if (Array.isArray(this.options)) {
      const firstElement = this.options[0];

      // variant 1. primitive array
      if (typeof firstElement === 'string' || typeof firstElement === 'number') {
        return (this.options as SelectOptionsPrimitive).map((value) => ({
          label: String(value),
          value,
        }));
      }

      // variant 2. standart
      if (typeof firstElement === 'object') {
        return (this.options as SelectOptionsStandart).map((item) => {
          if (this.optionKeys) {
            return {
              label: item[this.optionKeys.label],
              value: item[this.optionKeys.value],
            };
          }

          return item;
        });
      }
    }

    // variant 3. object
    if (typeof this.options === 'object') {
      return Object.keys(this.options).map((key) => {
        const item = (this.options as SelectOptionsObject)[key];

        if (typeof item === 'object') {
          if (this.optionKeys) {
            return {
              label: item[this.optionKeys.label],
              value: item[this.optionKeys.value],
            };
          }

          return {
            label: item.label,
            value: key,
          };
        }

        return {
          label: item,
          value: key,
        };
      });
    }

    return [];
  }
}
</script>

<style src="./Select.scss" lang="scss" scoped />
