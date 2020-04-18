<template>
    <v-app>
        <nav class="navbar white--text">
            <ul class="d-flex justify-space-around pa-3">
                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.route" class="white--text text-uppercase">{{ link.title }}</router-link>
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
                { title:'Australia', route:'/'},
                { title:'Italy', route:'/Italy'},
                { title:'Laos', route:'/Laos'},
                { title:'Vietnam', route:'/Vietnam'}
            ]
        }
    }
}

</script>

<style scoped>
.navbar{
    background:#40B3A2;          
    border-radius:0.4rem
}
.v-application--wrap{ min-height:1vh!important }

@media (max-width:480px){
    .navbar ul{
        display:block!important;
        text-align:center;
    }
    .navbar ul li{
        margin-top:0.5rem
    }
    
}
</style>