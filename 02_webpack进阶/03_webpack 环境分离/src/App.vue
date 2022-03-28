<script setup>
import { ref } from 'vue'

const message = ref('hello vue111')
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped>
  div {
    color: red;
  }
</style>
