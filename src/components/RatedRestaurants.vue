<template>
    <div id="main">
        <h2>Rated</h2>
        <transition-group name="fade" tag="p">
        <div v-bind:key="rate.id" v-for="rate in rateds">
            <RateRecord v-bind:rated="rate"/>
        </div>
        </transition-group>
    </div>
</template>

<script>

import RateRecord from './RateRecord.vue'

export default {
    name:"RatedRestaurants",
    components:{
        RateRecord
    },
    props:{
        rateds:Array
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