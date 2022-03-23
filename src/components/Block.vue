<template>
  <div
    class="block"
    v-on:click="toggleState"
    :class="{ filled: block.state === 'filled' }"
  >
    <svg
      v-if="block.state === 'empty'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
    >
      <line x1="0" y1="0" x2="32" y2="32" />
      <line x1="0" y1="32" x2="32" y2="0" />
    </svg>
    <span v-if="gameState !== 'setup'">
      {{ block.number }}
    </span>
    <input
      type="number"
      min="0"
      max="9"
      v-if="gameState === 'setup'"
      :value="block.number"
      @input="updateBlockNumber"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import store from "../store";
import { Block as BlockType, GameState } from "../../";

@Component({
  store,
})
export default class Block extends Vue {
  @Prop() block!: BlockType;
  @Prop() row!: number;
  @Prop() column!: number;
  @State gameState!: GameState;
  @Mutation setBlockNumber!: (args: {
    row: number;
    column: number;
    number: number | null;
  }) => void;
  @Mutation toggleBlockState!: (options: {
    row: number;
    column: number;
  }) => void;

  toggleState() {
    if (["running", "finished"].indexOf(this.gameState) >= 0) {
      this.toggleBlockState({ row: this.row, column: this.column });
    }
  }

  updateBlockNumber(e: Event) {
    const number = (e.target as HTMLInputElement).value;
    this.setBlockNumber({
      row: this.row,
      column: this.column,
      number: number !== "" ? Number(number) : null,
    });
  }
}
</script>

<style lang="scss" scoped>
.block {
  align-items: center;
  border: 1px solid black;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  &.filled {
    background-color: black;
    border-color: white;
    color: white;
  }

  & > svg {
    stroke: #aaaaaa;
    stroke-width: 1px;
    position: absolute;
  }

  & > span {
    user-select: none;
  }
}

input {
  border: none;
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
