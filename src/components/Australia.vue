<template>
 <v-app>
   <v-container>
     <Carousel :myImages ="myImages"/>
   </v-container>
    </v-app>
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
            myImages:[
                {src:Image01, alt:''},
                {src:Image02, alt:''},
                {src:Image03, alt:''}
            ]
        }
    }
}


</script>

<style>

</style>