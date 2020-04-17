<template>
    <v-container>
        <Carousel :myImages ="myImages"/>
   </v-container>
</template>

<script>
import Carousel from './Carousel.vue';
import imageAustralia01 from '../assets/AustraliaPhotos/island-australia.jpg';
import imageAustralia02 from '../assets/AustraliaPhotos/koala-australia.jpg';
import imageAustralia03 from '../assets/AustraliaPhotos/sydney-australia.jpg';
import imageAustralia04 from '../assets/AustraliaPhotos/uluru-australia.jpg';

export default {
    components:{
        Carousel
    },
    data(){
        return{
            myImages:[
                { src:imageAustralia01, alt:"island-australia" },
                { src:imageAustralia02, alt:"koala" },
                { src:imageAustralia03, alt:"sydney" },
                { src:imageAustralia04, alt:"uluru" }
            ]
        }
    }
}
</script>