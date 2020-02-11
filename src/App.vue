<template>
  <v-app>
    <v-container>
      <v-content>
          <Header />
          <NavBar />
          <router-view></router-view> 
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NavBar from './components/NavBar'


export default {
  name: 'App',


  components: {
    NavBar,
    Header

  },

  data: () => ({

  }),
};
</script>

<style>
li{
  list-style: none;
}
a{
  text-decoration:none;
}

</style>