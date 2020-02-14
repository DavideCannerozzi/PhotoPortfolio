<template>
    <v-container>
        <v-carousel height="450" hide-delimiter-background="true">
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
.v-window__prev,
.v-window__next{
    background:none
}
</style>