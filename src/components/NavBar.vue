<template>
    <v-app>
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

</style>