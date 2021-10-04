<template lang="pug">
.layout
  Select
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { Select } from '@/components';

@Options({
  components: {
    Select,
  },
})
export default class Home extends Vue {}
</script>
