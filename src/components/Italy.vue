<template>
    <v-container>
        <v-carousel>
            <v-carousel-item v-for="image in images" 
                             :key="image.alt" 
                             :src="image.src" 
                             :alt="image.alt">
            </v-carousel-item>
        </v-carousel>
   </v-container>
</template>
src\assets\image.jpg
<script>
import Image01 from '../assets/image.jpg';
import Image02 from '../assets/image01.jpg';
import Image03 from '../assets/image04.jpg';


export default {
    data(){
        return{
          images : [
              {src: Image01, alt:"asd"},
              {src: Image02, alt:"sds"},
              {src: Image03 , alt:"asdf"}
          ]
        }
    }
}
</script>

<style lang>


</style>