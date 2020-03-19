<template>
    <div id="main">
        <h2>Not yet rated</h2>
        <transition-group name="fade" tag="p">
        <div v-bind:key="unrate.id" v-for="unrate in unrateds">
                <UnrateRecord v-bind:unrated="unrate" v-on:rate-made="(rating) => $emit('rate-made',unrate.id, rating)"/>
            
        </div>
        </transition-group>
    </div>
</template>

<script>

import UnrateRecord from './UnrateRecord.vue'

export default {
    name:"UnratedRestaurants",
    components:{
        UnrateRecord
    },
    props:{
        unrateds:Array
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    #main{
        width:70%;
        background:lavenderblush;
        margin: 0 auto;
        border: 1px lightgray solid;
        padding:0;
    }
    h2{
        margin:0;
    }
    fade-enter-active, .fade-leave-active{
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to{
        opacity:0;
    }
</style>