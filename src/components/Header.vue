<template>
    <div>
        <header class="d-flex justify-space-around align-items-center">
            <div class="container-title text-center">
                <a href="/"><h1 class="mr-4 header">Davide Cannerozzi</h1></a>
           </div>
            <div class="container-button">
                <v-btn icon v-for="icon in icons" :key="icon.name" class="mr-5 hidden-xs-only">
                    <a class :href="icon.url" :target="icon.target"><v-icon :color="icon.color" size="30">{{ icon.name }}</v-icon></a> 
                </v-btn>
            </div>
        </header>
            <div class="container-description">
                <p class="text-center pa-3">Lorem Cras eleifend varius dictum. Nulla molestie rhoncus lorem, at vehicula quam porttitor ut. Nulla condimentum vitae mi bibendum mollis. Aenean nec blandit velit. Etiam ornare ipsum vel nulla dapibus, et mollis purus pretium. </p>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            icons:[
                { name:'fab fa-twitter', url:'https://twitter.com/Davide61627979', target:'_blank', color:'#1C9DEB' },
                { name:'fab fa-facebook', url:'https://www.facebook.com/davide.cannerozzi', target:'_blank', color:'#4064AD' },
                { name:'fab fa-flickr', url:'https://www.flickr.com/photos/187187986@N03/' ,target:'_blank', color:'#F00' }
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

header{
    font-family: 'Sacramento', cursive;
    font-size:1.5rem!important;
    align-items: center!important;
    border-bottom:0.2rem solid black
}
.container-description{
    width:80%;
    margin:1.25rem auto;
    line-height:1.9
}

@media (max-width:580px){
   header{
       display:block!important
   }
   .container-title{
       width:100%!important
   }
}

</style>