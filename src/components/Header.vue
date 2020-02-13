<template>
      <div>
        <header class="d-flex justify-space-around align-items-center">
            <div class="container-title text-center">
           <h1 class="mr-4 header">Davide Cannerozzi</h1>
                
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
                { name:'fab fa-twitter', url:'https://twitter.com', target:'_blank',color:'#1C9DEB' },
                { name:'fab fa-facebook', url:'https://google.com', target:'_blank', color:'#4064AD' },
                { name:'fab fa-flickr', url:'https://google.com' ,target:'_blank',color:'red' },
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
    font-size:25px!important;
    align-items: center!important;
}
.container-description{
    font-family: 'Playfair Display', serif;
    width:80%;
    margin:20px auto;
    line-height:1.9
}

@media (max-width:580px){
   header{
       display:block!important;
   }
   .container-title{
       width:100%!important
   }
}

</style>