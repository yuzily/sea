<template>
    <div class="TopGroup">
        <div class="allUl" >

            <div class="connectionMenu"  >{{ connection }}
                <ul class="DownMeun" >
                    <li ><router-link to="/opentime">{{opentime}}</router-link></li>
                    <li  class="topline" ><router-link to="/ticket">{{ticket}}</router-link></li>
                    <li  class="topline"><router-link to="/tranffic">{{traffic}}</router-link></li>
                    <li  class="topline"><router-link to="/information">{{informationdesk}}</router-link></li>
                </ul>   
            </div>



            
            <div class="connectionMenu">{{ explore }}
                <ul class="DownMeun" >
                    <li ><router-link to="/introduction">{{ introduction }}</router-link></li>
                    <li  class="topline"><router-link to="/explore">{{ exhibition }}</router-link></li>
                    <li  class="topline"><router-link to="/island">{{ island }}</router-link></li>
                    <li  class="topline"><router-link to="/foodtime">{{foodtime}}</router-link></li>
                    <li  class="topline"><router-link to="/whatsea">{{whatsea}}</router-link></li>
                    <li  class="topline"><router-link to="/night">{{nightsea}}</router-link></li>
                </ul> 
            </div>
            
            <div style="padding:0 60px 0 60px"><router-link to="/"><img class="titleimg" src="~@/assets/head_logo.png"></router-link></div>
            
            <div class="connectionMenu" style="padding:45px 38px 45px 37px">{{ research }}
                <ul class="DownMeun" >
                    <li ><router-link to="/activity">{{ activity }}</router-link></li>
                </ul> 
            </div>
            
            <div iv class="connectionMenu">{{ shopping }}
                <ul class="DownMeun" >
                    <li ><router-link to="/village">{{ village }}</router-link></li>
                    <li  class="topline"><router-link to="/alley">{{ alley }}</router-link></li>
                    <li  class="topline"><a href="https://suijo-bus.osaka/traditional/">{{ maria }}</a></li>
                    <li  class="topline"><a href="http://tempozan-kanransya.com/tempozan-kanransya.com/zh-TW/">{{ ferriswheel }}</a></li>
                    <li  class="topline"><router-link to="/Ship">{{ ship }}</router-link></li>
                </ul> 
            </div>      
        </div>

        <div class="phone_UI">
            <input type="checkbox" id="control" v-model="show_menu">
            <div style="padding:0 60px 0 60px"><router-link to="/"><img class="titleimg" src="~@/assets/head_logo.png"></router-link></div>
            <label for="control" class="menu_button"></label>
            <nav :style="vue_menu">
                <router-link to="/">
                    <p  @click="show_menu = false" >Top</p>
                </router-link>
                <router-link to="/opentime">
                    <p  @click="show_menu = false" >請訪問我們</p>
                </router-link>
                <router-link to="/ticket">
                    <p  @click="show_menu = false" >門票購買</p>
                </router-link>
                <router-link to="/village">
                    <p  @click="show_menu = false" >天保山港餐村</p>
                </router-link>
                <router-link to="/alley">
                    <p  @click="show_menu = false" >餐廳和購物</p>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeaHeader',
    data() {
        return {
            connection:"請訪問我們",
            explore:"探索海洋館",
            research:"監測研究活動",
            shopping:"餐廳和購物",
            opentime:"營業時間",
            ticket:"門票",
            traffic:"交通",
            informationdesk:"問訊處",
            introduction:"海洋館簡介",
            exhibition:"常設展覽",
            island:"北極圈, 福克蘭群島（馬爾維納斯群島）, 馬爾地夫群島",
            foodtime:"生物們的用餐時間",
            whatsea:"所謂海遊館",
            nightsea:"夜間海遊館",
            activity:"調查研究活動",
            village:"天保山港灣村",
            alley:"難波美食小巷",
            maria:"帆船型觀光船聖母瑪利亞號",
            ferriswheel:"天保山大摩天輪",
            ship:"接駁船「船長線」",
            vue_menu:{},
            show_menu: false
        }
    },
    methods:{
        move_phone_menu(){
            // this.$set(this.vue_menu, 'right', '-150px');
            
            console.log("有動嗎")
            
        }
    }
    // props:["closevue_window"],
}
</script>

<style scoped>
/* .menu_button{
    background: wheat;
} */
    .TopGroup{
        background: black;
        width: 100%;
    }
    .allUl{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    nav{
        color: white;           
        background: black;
        width: 60%;
        /* height: calc(100vh - 50px); */
        height: 300px;
        position: fixed;

        top: 50px;
        right: -950px;
        transition: all 0.5s;
        /* overflow: hidden; */

    }
    nav a{
        display: block;
        border-bottom: 1px solid white ;
        padding: 10px 20px 10px 30px;
        text-align: left;
    }
    .connectionMenu{     
        color: white;
        font-size: 15px;
        background:black;
        padding: 45px;
        position:relative; 
        
    }
    .DownMeun{       
        /* display: none; */
        opacity: 0;
        position: absolute; 
        left: 0px;
        top: 90px;
        transition: opacity 1.5s
        
    }
    .DownMeun li{
        background:black ;
        list-style: none;
        width: 145px;
        padding: 5px 10px 5px 10px ;
        font-size: 15px;
        color: white;
        max-height: 0px;
        transition: max-height .5s;
        /* float:left; */
    }
    .topline:before{
        content:"";
        display: block;
        width: 145px;
        height: 0.5px;
        margin: 0 0 5px 0;
        background-color: white;
    }


    .connectionMenu::before{
        content:"";
        display: block;
        width: 50px;
        height: 0.5px;
        background-color: white;
        position: absolute;
        top: 50%;
        right: 140px;
        transform: rotate(90deg);
    }

    .connectionMenu::after{
        content:"";
        display: block;
        width: 50px;
        height: 0.5px;
        margin: 0 0 5px 0;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 140px;
        transform: rotate(90deg);
    }

    a{
        text-decoration: none;
        color: white;
        transition: color 1s;
    }
    .connectionMenu:hover .DownMeun {
        /* display: block; */
        opacity: 1;
    }

    .connectionMenu:hover .DownMeun li{
        max-height: 100px;
    }

    a:hover{
        color: aqua;
    }

    .connectionMenu:hover{
        color: aqua;
    }

    .titleimg{
        opacity: 1;
        transition: opacity 0.2s;
    }

    .titleimg:hover{
        opacity: 0.5;
    }

    .phone_UI{
        width: 100%;
        height: 50px;
        background: black;
        display:none;
        position: relative;
    }
    .phone_UI img{
        height: 25px;
        width: 100px;
        padding-top: 10px;
    }
    .menu_button{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 5px;
        right: 10px;
    }
    .menu_button::before{
        content:"";
        position: absolute;
        left: 8px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        height: 4px;
        width: 25px;
        background: white;
        box-shadow: 0px 8px 0px white,
                    0px -8px 0px white ;
    }
    #control{
        display: none;
    }
    #control:checked ~ nav{
        right: 0px;
    }
    @media screen and (max-width: 1280px)  {
        .allUl{
            display:none;
        }
        .phone_UI{
            display: inline-block;
            
        }
        #control:checked ~ nav{
            right:-300px;
        }
    }
    @media screen and (max-width: 768px) {
        .allUl{
            display:none;
        }
        .phone_UI{
            display: inline-block;
        }

    }
</style>