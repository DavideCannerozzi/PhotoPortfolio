<template>
  <v-app>
    <v-container>
      <v-content>
          <Header />
          <NavBar />
          <router-view></router-view> 
      </v-content>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


export default {
  name: 'App',


  components: {
    NavBar,
    Header,
    Footer

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