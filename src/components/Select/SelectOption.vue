<template lang="pug">
button(
  :class="['root', { 'root--active': active }]",
  type="button"
) {{ label }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SelectOptionProps from './SelectOptionProps';

@Options({
})
export default class Home extends Vue.with(SelectOptionProps) {}
</script>

<style src="./SelectOption.scss" lang="scss" scoped />
