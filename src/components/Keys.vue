<template>
  <div class="keyboard">
    <div class="input-keys">
      <div class="funcion-keys">
        <Key keyValue="AC" @click="$emit('input', 'AC')" />
        <Key keyValue="C" @click="$emit('input', 'C')" />
        <Key keyValue="%" @click="$emit('input', '%')" />
      </div>
      <div class="digitos">
        <Key keyValue="7" @click="$emit('input', '7')" />
        <Key keyValue="8" @click="$emit('input', '8')" />
        <Key keyValue="9" @click="$emit('input', '9')" />
        <Key keyValue="4" @click="$emit('input', '4')" />
        <Key keyValue="5" @click="$emit('input', '5')" />
        <Key keyValue="6" @click="$emit('input', '6')" />
        <Key keyValue="1" @click="$emit('input', '1')" />
        <Key keyValue="2" @click="$emit('input', '2')" />
        <Key keyValue="3" @click="$emit('input', '3')" />
        <Key keyValue="+-" @click="$emit('input', '+-')" />
        <Key keyValue="0" @click="$emit('input', '0')" />
        <Key keyValue="." @click="$emit('input', '.')" />
      </div>
    </div>
    <div class="operadores">
      <Key keyValue="/" @click="$emit('input', '/')" />
      <Key keyValue="x" @click="$emit('input', '*')" />
      <Key keyValue="+" @click="$emit('input', '+')" />
      <Key keyValue="-" @click="$emit('input', '-')" />
      <Key keyValue="=" @click="$emit('input', '=')" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["on"],
  components: {
    Key: () => import("./Key.vue"),
  },
};
</script>

<style>
</style>