<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>Davide<span class="blue--text mr-4">Cannerozzi</span></v-toolbar-title>
            <v-icon color="black">fas fa-camera-retro</v-icon>
            <v-spacer></v-spacer>
            <v-btn icon v-for="icon in icons" :key="icon.name" class="mr-3">
                <a class :href="icon.url" :target="icon.target"><v-icon :color="icon.color" size="30">{{ icon.name }}</v-icon></a> 
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            icons:[
                {name:'fab fa-twitter', url:'https://twitter.com', target:'_blank',color:'#1C9DEB'},
                {name:'fab fa-facebook', url:'https://google.com', target:'_blank', color:'#4064AD'},
                {name:'fab fa-flickr', url:'https://google.com' ,target:'_blank',color:'red'},
            ]
        }
    }
}
</script>

<style scope>

@media (max-width:600px){
    
}

</style>