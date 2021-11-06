<template>
  <button class="key" @click="$emit('click')">{{ keyValue }}</button>
</template>

<script>
export default {
  props: ["keyValue"],
};
</script>

<style>
</style>