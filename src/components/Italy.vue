<template>
    <v-container>
       <Carousel :myImages="myImages"/>
   </v-container>
</template>

<script>
import Carousel from './Carousel.vue';
import imageItaly01 from '../assets/ItalyPhotos/dolomites-italy.jpg';
import imageItaly02 from '../assets/ItalyPhotos/funes-italy.jpg';
import imageItaly03 from '../assets/ItalyPhotos/tuscany-italy.jpg';
import imageItaly04 from '../assets/ItalyPhotos/village-italy.jpg'

export default {
    components:{
        Carousel
    },
    data(){
        return{
          myImages : [
              { src: imageItaly01, alt:"dolomites" },
              { src: imageItaly02, alt:"funes-village" },
              { src: imageItaly03 , alt:"tuscany" },
              { src: imageItaly04, alt:"village" }
          ]
        }
    }
}
</script>