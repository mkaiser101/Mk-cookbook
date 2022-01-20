<template>
  <v-app>
    <div id="nav">
       <v-app-bar
          app    
          color="green"
        >
       <v-appbar-title shrink-on-scroll=true>
        Mindful Meditations
       </v-appbar-title>
   
      <v-spacer></v-spacer>
      <v-appbar-items>
        <v-btn flat light to="/" exact>home</v-btn>
        <v-btn flat dark to="/projects" exact>projects</v-btn>
        <v-btn flat light to="/about" exact>about</v-btn>
        <v-btn flat light to="/sandbox" exact>sandbox</v-btn>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
