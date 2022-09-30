<template>
  <v-app>
    <div id="nav">
       <v-app-bar
          app   
          dense 
          color="deep-purple lighten-4"
        >
       <v-appbar-title shrink-on-scroll=true>
        Matt Kaiser
       </v-appbar-title>
   
      <v-spacer></v-spacer>
      <v-appbar-items>
        <v-btn flat light to="/" exact>home</v-btn>
        <v-btn flat light to="/recipes" exact>recipes</v-btn>
        <v-btn flat light to="/contact" exact>contact</v-btn>
      </v-appbar-items>

    </v-app-bar>
    </div>
    <router-view/>
     <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="deep-purple lighten-4">
        <strong class="subheading">Footer Info Placeholder</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Matt Kaiser</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
