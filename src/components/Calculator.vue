<template>
  <div class="calculator">
    <Display :value="on ? displayValue : ''" />
    <Keys :on="on" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      displayValue: "0",
      currentValue: "0",
      operation: "",
      on: true,
      toClear: true,
    };
  },
  components: {
    Display: () => import("./Display.vue"),
    Keys: () => import("./Keys.vue"),
  },
  methods: {
    isDigit: (value) => "0123456789".includes(value),
    handleAllClear() {
      Object.assign(this.$data, {
        ...this.$options.data.call(this),
        on: !this.on,
      });
    },
    handleClear() {
      this.displayValue = this.displayValue.slice(0, -1) || "0";
    },
    handleDotValue() {
      if (this.displayValue.indexOf(".") == -1) {
        this.displayValue += ".";
      }
    },
    handleDigit(keyValue) {
      if (this.toClear || this.displayValue === "0") {
        this.displayValue = keyValue;
        this.toClear = false;
      } else {
        this.displayValue += keyValue;
      }
    },
    handlePositiveNegative() {
      this.displayValue[0] === "-"
        ? (this.displayValue = this.displayValue.replace("-", ""))
        : (this.displayValue = "-" + this.displayValue);
    },

    performCalc(value1, value2, operation) {
      return eval(value1 + operation + value2);
    },

    handleOperator(operator) {
      if (this.toClear === false) {
        if (this.operation !== "") {
          const result = this.performCalc(
            this.currentValue,
            operator === "%" ? this.displayValue / 100 : this.displayValue,
            this.operation
          );
          this.displayValue = result.toString();
        }
        this.toClear = true;
      }
      this.currentValue = this.displayValue;
      this.operation = operator === "=" || operator === "%" ? "" : operator;
    },
    handleInput(keyValue) {
      if (keyValue === "AC") this.handleAllClear();
      else if (keyValue === "C") this.handleClear();
      else if (keyValue === ".") this.handleDotValue();
      else if (keyValue === "+-") this.handlePositiveNegative();
      else if (this.isDigit(keyValue)) this.handleDigit(keyValue);
      else this.handleOperator(keyValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
