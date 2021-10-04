<template lang="pug">
button(
  :class="['root', { 'root--active': active }]",
  type="button"
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
