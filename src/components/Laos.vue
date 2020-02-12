<template>
    <div>
        <Carousel :myImages="myImages"/>
    </div>
</template>

<script>
import imageLaos01 from "@/assets/LaosPhotos/imageLaos01.jpg";
import imageLaos02 from "@/assets/LaosPhotos/imageLaos02.jpg";
import imageLaos03 from "@/assets/LaosPhotos/imageLaos03.jpg";
import imageLaos04 from "@/assets/LaosPhotos/imageLaos04.jpg";
import imageLaos05 from "@/assets/LaosPhotos/imageLaos05.jpg";

import Carousel from './Carousel.vue';
export default {
    components:{
        Carousel
    },
    data(){
        return{
        myImages:[
            {src:imageLaos01, alt:"ert"},
            {src:imageLaos02, alt:"ert"},
            {src:imageLaos03, alt:"ert"},
            {src:imageLaos04, alt:"ert"},
            {src:imageLaos05, alt:"ert"},
        ]
     }
    }
    
}
</script>

<style>


</style>