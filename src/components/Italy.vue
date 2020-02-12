<template>
    <v-container>
       <Carousel :myImages="myImages"/>
   </v-container>
</template>

<script>
import Carousel from './Carousel.vue';
import Image01 from '../assets/image.jpg';
import Image02 from '../assets/image01.jpg';
import Image03 from '../assets/image04.jpg';


export default {
    components:{
        Carousel
    },
    data(){
        return{
          myImages : [
              {src: Image01, alt:"asd"},
              {src: Image02, alt:"sds"},
              {src: Image03 , alt:"asdf"}
          ]
        }
    }
}
</script>

<style>


</style>