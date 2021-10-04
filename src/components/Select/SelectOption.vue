<template lang="pug">
button(
  :class="['option', {\
    'option--active': active,\
    'option--focused': focused,\
    'option--md': size === 'md',\
    'option--lg': size === 'lg',\
  }]",
  type="button"
  tabindex="-1"
  @click.prevent="onClick"
) {{ item.label }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SelectOptionProps from './SelectOptionProps';

@Options({
  emits: ['click'],
})
export default class Home extends Vue.with(SelectOptionProps) {
  onClick(): void {
    this.$emit('click', this.item);
  }
}
</script>

<style src="./SelectOption.scss" lang="scss" scoped />
