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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

li{ list-style: none }
.v-application a{ 
  color:black!important;
  text-decoration:none!important 
}
.v-application--wrap{ min-height:1vh!important }
p{
  font-family: 'Playfair Display', serif;
  font-size:0.9rem;
  line-height: 1.8
}
</style>