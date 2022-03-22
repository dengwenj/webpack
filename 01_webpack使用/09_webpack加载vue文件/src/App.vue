<script setup>
import { ref } from 'vue'

const message = ref('hello vue')
</script>

<template>
  <h2>
    {{ message }}
  </h2>
</template>

<style scoped lang="less">
h2 {
  color: red;
}
</style>
