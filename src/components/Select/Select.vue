<template lang="pug">
.root.root--opened.root--lg
  input.input(type="text")
  .options
    SelectOption
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import SelectOption from './SelectOption.vue';

@Options({
  components: {
    SelectOption,
  },
})
export default class Select extends Vue {}
</script>

<style src="./Select.scss" lang="scss" scoped />
