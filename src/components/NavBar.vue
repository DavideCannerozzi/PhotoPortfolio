<template>
    <v-app>
        <div class="container-description">
            <p class="text-center pa-3">Lorem Cras eleifend varius dictum. Nulla molestie rhoncus lorem, at vehicula quam porttitor ut. Nulla condimentum vitae mi bibendum mollis. Aenean nec blandit velit. Etiam ornare ipsum vel nulla dapibus, et mollis purus pretium. </p>
        </div>
        <nav class="navbar">
            <ul class="d-flex justify-space-around pa-4">
                <li v-for="link in links" :key="link.title"><router-link :to="link.route">{{ link.title }}</router-link></li>
            </ul>
        </nav>

    </v-app>
</template>

<script>
export default {
    data(){
        return{
            drawer:true,
            links : [
                { title:'Australia', route:'/Australia'},
                { title:'Italy', route:'/Italy'},
                { title:'Laos', route:'/Laos'},
                { title:'About Me', route:'/About'},
            ]
        }
    }
}
</script>

<style>
.navbar{
    background:black;
    color:white;
}
.v-application--wrap{
    min-height:1vh!important;
}
.container-description{
    width:80%;
    margin:20px auto;
    line-height:1.9
}
</style>