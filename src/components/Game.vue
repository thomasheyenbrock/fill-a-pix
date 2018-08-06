<template>
  <div class="stack">
    <div class="game">
      <div v-for="(row, rowIndex) in blocks" :key="rowIndex" class="row">
        <div v-for="(block, columnIndex) in row" :key="columnIndex">
          <Block :block="block" :row="rowIndex" :column="columnIndex" />
        </div>
      </div>
    </div>
    <div class="summary">
      {{ gameState === "running" ? "Assign a value to each block to win!" : "" }}
      {{ gameState === "finished" ? "All blocks have a value, but it seems there is still an error..." : "" }}
      {{ gameState === "success" ? "Congratulations, you got it!" : "" }}
      {{ gameState === "notSolvable" ? "The puzzle cannot be solved!" : "" }}
    </div>
    <button v-if="gameState === 'running'" v-on:click="solve">Get solution</button>
    <button v-if="['finished', 'success', 'notSolvable'].includes(gameState)" v-on:click="reset">To Menu</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import Block from "./Block.vue";
import store from "../store";
import {Block as BlockType, GameState} from "../../"

@Component({
  components: { Block },
  store
})
export default class Game extends Vue {
  @State blocks!: BlockType[][];
  @State gameState!: GameState;
  @Mutation reset!: () => void;
  @Mutation solve!: () => void;
}
</script>

<style lang="scss" scoped>
.game {
  align-items: stretch;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.stack {
  > * + * {
    margin: 32px 0 0 0;
  }
}
</style>
