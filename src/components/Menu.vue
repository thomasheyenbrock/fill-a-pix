<template>
  <div>
    <div class="heading">FILL-A-PIX</div>
    <hr class="with-margin" />
    <button>Create custom game</button>
    <hr class="with-margin" />
    <div>
      <p>Play one of our predefined games:</p>
      <ul>
        <li v-for="game in games" :key="game.name">
          <a href="#" v-on:click="play(game.name)">{{ game.name.toUpperCase() }} ({{ game.height }} &times; {{ game.width }} - Grid)</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import { Game as GameType } from "../../";

@Component
export default class Menu extends Vue {
  @State games!: GameType[];
  @Mutation playPredefinedGame!: (name: string) => void;

  play(name: string) {
    this.playPredefinedGame(name);
  }
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 32px;
}
.with-margin {
  margin: 24px 0;
}
li {
  text-align: start;
}
</style>
