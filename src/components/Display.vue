<template>
  <div class="display" ref="display">
    <div class="text-display">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style>
</style>