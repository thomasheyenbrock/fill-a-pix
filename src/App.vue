<template>
  <div id="app">
    <Menu v-if="gameState === 'menu'" />
    <Game v-if="gameState !== 'menu'" />
    <Settings v-if="gameState === 'setup'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Game from "./components/Game.vue";
import Menu from "./components/Menu.vue";
import Settings from "./components/Settings.vue";

@Component({
  components: { Game, Menu, Settings },
})
export default class App extends Vue {
  @State gameState!: boolean;
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  > * + * {
    margin: 32px 0 0 0;
  }
}
</style>
