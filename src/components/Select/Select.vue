<template lang="pug">
p {{ options }}

div(
  ref="root"
  :class="['select', {\
    'select--opened': opened,\
    'select--md': size === 'md',\
    'select--lg': size === 'lg',\
  }]"
)
  slot(:label="currentOptionLabel")
    input.select__input(
      type="text"
      :value="currentOptionLabel"
      :placeholder="placeholder"
      @keyup="handleInputKeyPress"
      @click.prevent="setOpened(!opened)"
      :disabled="disabled"
      readOnly
    )

  slot(name="options", :options="innerOptions")
    .select__options
      SelectOption(
        v-for="option in innerOptions"
        :key="option.value"
        :item="option"
        :active="option.value === value"
        :focused="isFocused(option.value)"
        :size="size"
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
  SelectValue,
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

  setOpened(flag: boolean): void {
    if (!flag) {
      this.setFocused(false);
    }
    this.opened = flag;
  }

  private focusedValue: SelectValue | false = false;

  setFocused(value: SelectValue | false): void {
    this.focusedValue = value;
  }

  isFocused(value: SelectValue): boolean {
    return Boolean(this.focusedValue) && this.focusedValue === value;
  }

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
        // eslint-disable-next-line
        return (this.options as SelectOptionsStandart<any>).map((item) => {
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
        // eslint-disable-next-line
        const item = (this.options as SelectOptionsObject<any>)[key];

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
    this.$emit('update:value', option.value);
    this.$emit('change', option.value);
    this.$emit('input', option.value);
    this.setOpened(false);
  }

  handleClickAway(e: MouseEvent): void {
    if (
      this.opened
      && e.target
      && this.$refs?.root
      && !this.$refs.root.contains(e.target as Node)
    ) {
      this.setOpened(false);
    }
  }

  handleInputKeyPress(e: KeyboardEvent): void {
    switch (e.key) {
      case 'Enter': {
        if (this.focusedValue) {
          const focusedItem = this.innerOptions.find(
            ({ value }) => value === this.focusedValue,
          );
          if (focusedItem) {
            this.onChange(focusedItem);
          }
        } else {
          this.setOpened(!this.opened);
        }
        break;
      }
      case 'ArrowUp': {
        const focusedItemIndex = (
          this.focusedValue
            ? this.innerOptions.findIndex(
              ({ value }) => value === this.focusedValue,
            )
            : this.innerOptions.length
        );
        const prevFocusedItem = this.innerOptions[focusedItemIndex - 1];
        if (prevFocusedItem) {
          this.setFocused(prevFocusedItem.value);
        }
        break;
      }
      case 'ArrowDown': {
        const focusedItemIndex = (
          this.focusedValue
            ? this.innerOptions.findIndex(
              ({ value }) => value === this.focusedValue,
            )
            : -1
        );
        const nextFocusedItem = this.innerOptions[focusedItemIndex + 1];
        if (nextFocusedItem) {
          this.setFocused(nextFocusedItem.value);
        }
        break;
      }
      default:
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
