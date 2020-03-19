<template>
    <div id="head">
        <img id="chef-img" src="../assets/chef.png">
        <h1>Restaurant Rater</h1>
    </div>
</template>

<script>
export default {
    name:"Header"

}
</script>

<style scoped>
    #head{
        background:lavender;
        text-align: center;
        width:100%;
        margin:0 auto;
    }
    #chef-img{
        position:relative;
        width:150px;
    }
    
</style>