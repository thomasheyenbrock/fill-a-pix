<template>
  <div>
    <hr />
    <div>
      Define the height of the grid:
      <input type="number" :value="height" @input="updateHeight" />
    </div>
    <div>
      Define the width of the grid:
      <input type="number" :value="width" @input="updateWidth" />
    </div>
    <hr />
    <button v-on:click="startGame">Start game</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import store from "../store";

@Component({
  store,
})
export default class Settings extends Vue {
  @State height!: number;
  @State width!: number;
  @Mutation setDimensions!: (options: any) => void;
  @Mutation startGame!: () => void;

  updateHeight(e: Event) {
    const number = (e.target as HTMLInputElement).value;
    if (number !== "" && Number(number) >= 0) {
      this.setDimensions({ height: Number(number), width: this.width });
    }
  }

  updateWidth(e: Event) {
    const number = (e.target as HTMLInputElement).value;
    if (number !== "" && Number(number) >= 0) {
      this.setDimensions({ height: this.height, width: Number(number) });
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  font-size: inherit;
  height: 24px;
  width: 24px;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>

<style lang="scss">
button {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  background-color: cornflowerblue;
  color: white;
  border: 2px solid cornflowerblue;
  border-radius: 2px;
  padding: 4px;
}
</style>
