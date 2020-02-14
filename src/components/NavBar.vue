<template>
    <v-app>
        <nav class="navbar white--text">
            <ul class="d-flex justify-space-around pa-4">
                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.route" class="white--text">{{ link.title }}</router-link>
                </li>
            </ul>
        </nav>
    </v-app>
</template>

<script>


export default {
    data(){
        return{
            links : [
                { title:'Australia', route:'/Australia'},
                { title:'Italy', route:'/Italy'},
                { title:'Laos', route:'/Laos'},
                { title:'Vietnam', route:'/Vietnam'},
            ]
        }
    }
}
</script>

<style scoped>
.navbar{
    background:#40B3A2;
    border-radius:5px
}
.v-application--wrap{
    min-height:1vh!important;
}

@media (max-width:480px){
    .navbar ul{
        display:block!important;
        text-align:center;

    }
    .navbar ul li{
        margin-top:15px
    }
}

</style>