<template>
    <div id="record">
        <h3>{{unrated.name}}</h3>
        <div v-for="star in 5" :key="star">
            <img class="star" v-bind:class="flexStar(star)" @mouseover="hoverStars=star" @mouseout="hoverStars=0" @click="$emit('rate-made', star)">
        </div>
    </div>
</template>

<script>
export default {
    name:"UnrateRecord",
    props:{
        unrated:Object
    },
    data(){
        return{
            hoverStars:0
        }
    },
    methods:{
        flexStar: function(ind){
            console.log(ind)
            if (ind <= this.hoverStars){
                return "lit"
            } else {
                return "unlit"
            }
        }
    }
}
</script>

<style scoped>
    #record{
        background:peachpuff;
        border: 1px solid gray;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    .star{
        display:inline-block;
        width:30px;
    }
    .unlit{
        content:url("../assets/nostar.png");
    }

    .lit{
        content:url("../assets/star.png");
    }
</style>