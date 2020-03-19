<template>
  <div id="app">
    <Header />
    <Rated-restaurants v-bind:rateds="rateds" />
    <Unrated-restaurants v-bind:unrateds="unrateds" v-on:rate-made="rateMade"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import RatedRestaurants from './components/RatedRestaurants.vue'
import UnratedRestaurants from './components/UnratedRestaurants.vue'

export default {
  name: 'App',
  components: {
    Header,
    RatedRestaurants,
    UnratedRestaurants
  },
  data(){
    return{
      rateds:[
                {
                    id:1,
                    name:"Frankie's Dining",
                    stars:3
                },
                {
                    id:2,
                    name:"Pizza4Life",
                    stars:1
                },
                {
                
                    id:3,
                    name:"Mexicana La Viva",
                    stars:4
                },
                {
                
                    id:4,
                    name:"Fromage Pour La Tete",
                    stars:2
                },
                {
                
                    id:5,
                    name:"Romano Russiano",
                    stars:5
                }
            ],
      unrateds:[
          {
              id:6,
              name:"James Brownie Shop",
              stars:0
          },
          {
              id:7,
              name:"Presta",
              stars:0
          },
          {
          
              id:8,
              name:"Ambango",
              stars:0
          },
          {
          
              id:9,
              name:"KFG",
              stars:0
          },
      ]
    }
  },
  methods:{
    rateMade:function(ident, rating){
      console.log("id: " + ident);
      var obj;
      var ind;
      for (var i = 0; i < this.unrateds.length; i++){
        if(this.unrateds[i].id == ident){
          obj = this.unrateds[i];
          ind = i;
        }
      }
      obj.stars = rating
      this.rateds.push(obj);
      this.unrateds.splice(ind, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}
</style>
