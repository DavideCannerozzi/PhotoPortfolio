<template>
    <v-container>
        <Carousel :myImages = myImages />
    </v-container>
</template>

<script>
import Carousel from './Carousel.vue';
import imageVietnam01 from '../assets/VietnamPhotos/bridge-vietnam.jpg';
import imageVietnam02 from '../assets/VietnamPhotos/hanoi-vietnam.jpg';
import imageVietnam03 from '../assets/VietnamPhotos/shop-vietnam.jpg';
import imageVietnam04 from '../assets/VietnamPhotos/street-vietnam.jpg';

export default {
    components:{
        Carousel
    },
    data(){
        return{
             myImages : [
                { src: imageVietnam01, alt:"bridge-hanoi" },
                { src: imageVietnam02, alt:"hanoi" },
                { src: imageVietnam03 , alt:"market" },
                { src: imageVietnam04, alt:"street" }
            ]
        }
    }
}
</script>

