<template>
  <div id="app">
    

    <div class="SeaHeader"  ref="original">
      <SeaHeader></SeaHeader>
 
 
    </div>

    <router-view></router-view>
 
  

    <div class="SeaContents">
      <SeaContents></SeaContents>

    </div>

    <div class="NewsContainner">
      <NewsMore class="NewsZone" :checkswitch = "checkswitch"></NewsMore>
      <OtherLink class="LinkZone" :switchflag = "switchflag"></OtherLink>
      <RestaurantShop class="RestaurantZone" :switchflag = "switchflag"></RestaurantShop>
      <FootMenu class="FootMenuZone" :switchflag = "switchflag" :show_window ="show_window"></FootMenu>
      <SeaFoot class="SeaFootZone" :switchflag = "switchflag" :show_window ="show_window"></SeaFoot>

    </div>

    <button v-if="topbutton" @click="go_original"><p class="original_button">▲</p></button>

  </div>

  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SeaHeader from './components/SeaHeader.vue'
import SeaContents from './components/SeaContents.vue'
import NewsMore from './components/NewsMore.vue'
import OtherLink from './components/OtherLink.vue'
import RestaurantShop from './components/RestaurantShop.vue'
import FootMenu from './components/FootMenu.vue'
import SeaFoot from './components/SeaFoot.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SeaHeader,
    SeaContents,
    NewsMore,
    OtherLink,
    RestaurantShop,
    FootMenu,
    SeaFoot
  },
  data() {
    return {
      switchflag:false,
      topbutton:false,
      show_window:true,
    }
  },
  mounted() {
     window.addEventListener('scroll', this.handleScroll);  
     if (this.$route.path !== '/opentime') {
      // this.$router.push('/opentime');
  }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  
  },
  methods:{
    
    checkswitch(switchObj){
      this.switchflag = switchObj;
    },

    // closevue_window(){
    //   this.show_window = this.$route.meta.router_window_flag;
    // },

    handleScroll(){ //看滾輪有跑到最上面嗎
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop == 0) {
        this.topbutton = false;
      }
      else{
        this.topbutton = true;
      }
    },
    go_original(){
      this.$refs.original.scrollIntoView({ behavior: "smooth" });
    }
  },

}
</script>

<style>


*{
  padding:0;
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f2f2;
  /* color: #2c3e50;
  margin-top: 60px;
  padding:0;
  margin:0;
  background: skyblue;
  width: 100%;
  height: 100vh; */
}

/* SeaHeader 的 CSS */
.SeaHeader {
  position: relative;
  z-index: 1; /* 較低的堆疊順序 */
}

/* SeaContents 的 CSS */
.SeaContents {
  z-index: 2; /* 較高的堆疊順序 */
}

.NewsContainner{
  position: relative;
}
.LinkZone{
  position: absolute;
  top: 0px;
}
.RestaurantZone{
  position: absolute;
  top: 0px;
}
.FootMenuZone{
  position: absolute;
  top: 0px;
}
.SeaFootZone{
  position: absolute;
  top: 0px;
}
.original_button{
  position: fixed;
  color: white;
  width: 40px;
  border-radius: 5px;
  background: #666;
  padding: 13px 0;
  right: 20px;
  top: 870px;
  text-decoration: none;
  transition: opacity 0.5s;
}
.original_button:hover{
  opacity: 0.8;
}
@media screen and (max-width: 768px){
  .original_button{
    display: none;
  }
}
</style>
