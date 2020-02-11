<template>
    <v-app>
        <v-container>
        <v-row>
         <v-col v-for="n in 12" :key="n" cols="4">
             <v-img contain v-for="image in images" :src="image.source" :key="image.alt" :alt="image.alt"></v-img>
            
         </v-col> 
     </v-row>
   </v-container>
    </v-app>
</template>

<script>
import Image01 from '@/assets/image.jpg' 

export default {
    data(){
        return{
             images:[
              {source: Image01, alt:"asd"},
              {source: Image01, alt:"sds"},
              {source: Image01 , alt:"asdf"}
          ]
        }
    }
}
</script>

<style lang="stylus">


</style>