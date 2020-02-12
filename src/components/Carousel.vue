<template>
    <v-container>
        <v-carousel>
            <v-carousel-item v-for="image in myImages" 
                             :key="image.alt" 
                             :src="image.src" 
                             :alt="image.alt">
            </v-carousel-item>
        </v-carousel>
   </v-container>
</template>


<script>
export default {
    props:['myImages']
}

</script>


<style>

</style>