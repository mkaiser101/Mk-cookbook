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
