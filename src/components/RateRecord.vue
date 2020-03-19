<template>
    <div id="record">
        <h3>{{rated.name}}</h3>
        <div v-for="star in rated.stars" :key="star">
            <img class="star" src="../assets/star.png">
        </div>
        <div v-for="nostar in 5-rated.stars" :key="nostar+5">
            <img class="star" src="../assets/nostar.png">
        </div>
    </div>
</template>

<script>
export default {
    name:"RateRecord",
    props:{
        rated:Object
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
</style>