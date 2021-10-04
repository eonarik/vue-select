<template lang="pug">
p {{ options }}

div(
  ref="root"
  :class="['select', { 'select--opened': opened }]"
)
  slot(:label="currentOptionLabel")
    input.select__input(
      type="text"
      :value="currentOptionLabel"
      :placeholder="placeholder"
      @click.prevent="setOpened(!opened)"
      readOnly
    )

  slot(name="options", :options="innerOptions")
    .select__options
      SelectOption(
        v-for="option in innerOptions"
        :key="option.value"
        :item="option"
        @click="onChange"
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
  model: {
    prop: 'value',
    event: 'change',
  },
  emits: ['update:value', 'change', 'input'],
})
export default class Select extends Vue.with(SelectProps) {
  $refs!: {
    root: HTMLDivElement,
  }

  private opened = false;

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

  get currentOptionLabel(): string {
    const item = this.innerOptions.find(({ value }) => value === this.value);
    return item?.label || '';
  }

  onChange(option: SelectOptionDefault): void {
    this.setOpened(false);
    this.$emit('update:value', option.value);
    this.$emit('change', option.value);
    this.$emit('input', option.value);
  }

  setOpened(flag: boolean): void {
    this.opened = flag;
  }

  handleClickAway(e: MouseEvent): void {
    if (this.opened && !this.$refs.root.contains(e.target)) {
      this.setOpened(false);
    }
  }

  mounted(): void {
    window.document.addEventListener('click', this.handleClickAway);
  }

  destroyed(): void {
    window.document.removeEventListener('click', this.handleClickAway);
  }
}
</script>

<style src="./Select.scss" lang="scss" scoped />
