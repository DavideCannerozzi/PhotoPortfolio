<template>
    <div>
        <Carousel :myImages="myImages"/>
    </div>
</template>

<script>
import Carousel from './Carousel.vue';
import imageLaos01 from "@/assets/LaosPhotos/buddha-laos.jpg";
import imageLaos02 from "@/assets/LaosPhotos/cascade-laos.jpg";
import imageLaos03 from "@/assets/LaosPhotos/laos.jpg";
import imageLaos04 from "@/assets/LaosPhotos/village-laos.jpg";


export default {
    components:{
        Carousel
    },
    data(){
        return{
        myImages:[
            { src:imageLaos01, alt:"buddha" },
            { src:imageLaos02, alt:"cascade-laos" },
            { src:imageLaos03, alt:"image-laos" },
            { src:imageLaos04, alt:"village" },
        ]
     }
    }
    
}
</script>

<style>


</style>