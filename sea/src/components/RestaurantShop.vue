<template>
    <div class="restaurantzone" :style="restaurantzone_vue">
        <div class="restauranttitle">
            <img src="~@/assets/title-arrow-white.png">
            <p>餐廳和購物</p>
        </div>

        <div class="restaurantpicture">
            <div class="picture_link">
                <router-link to="/village">
                    <img src="~@/assets/restaurant-img-01-pc.jpg">
                    <p>天保山港灣村</p>
                </router-link>
            </div>
            <div class="picture_link">
                <router-link to="/alley">
                    <img src="~@/assets/restaurant-img-02-pc.jpg">
                    <p>難波美食小巷</p>
                </router-link>
            </div>

            <div class="picture_link">
                <router-link to="/Ship">
                    <img src="~@/assets/restaurant-img-03-pc.jpg">
                    <p>接駁船「船長線」</p>
                </router-link>
            </div>
        </div>

        <div class="outside_link">
            <div>
                <a href="https://www.tripadvisor.jp/Attraction_Review-g298566-d320969-Reviews-Osaka_Aquarium_Kaiyukan-Osaka_Osaka_Prefecture_Kinki.html" target="_blank" class="outside_link_web_one">
                    <img src="~@/assets/btn-other-trip-pc.jpg">
                    <p class="otuside_link_p_item1">海遊館獲</p>
                    <p class="otuside_link_p_item2">TripAdvisor</p>
                    <p class="otuside_link_p_item3">選為日本與亞洲最佳水族館</p>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/kaiyukan.ch/?eid=ARDj5DOayExsbIUuOQiq12u3NIBAtaGGvaQvefEoQElRtE6gdhuw2iKuaWH66T4RCoxxw38-lpgOs-uU&fref=mentions" target="_blank" class="outside_link_web_two">
                    <img src="~@/assets/btn-other-facebook-pc.jpg">
                    <p>海遊館Facebook</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ReataurantShop",
    data() {
        return {
            restaurantzone_vue:{},
        }
    },
    props:["switchflag"],
    watch:{
        switchflag(newvalue){
            if(newvalue == true){
                this.$set(this.restaurantzone_vue, 'margin-top', '1500px');
            }
            else if(newvalue == false){
                this.$set(this.restaurantzone_vue, 'margin-top', '900px');
            }
        }
    }
}
</script>

<style scoped>
    .restaurantzone{
        background-image: url("~@/assets/sec-lower-bg.jpg");
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 691px;
        /* margin: auto; */
        margin-top: 900px;
        transition: all 0.5s;
    }
    .restauranttitle{
        margin-top: 45px;
    }
    .restauranttitle img{
        display: inline-block;
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }
    .restauranttitle p{
        display: inline-block;
        font-size: 30px;
        color: white;
        letter-spacing: 5px;
    }
    .restaurantpicture{
        /* width: 100%; */
        display: flex;
        justify-content: center;      
        margin-top: 50px;
    }
    .picture_link{
        width: 268px;
        height: 246px;
        background: white;
        margin:0 20px 0 20px ;
    }
    .picture_link a{
        text-decoration: none;
        transition: opacity 0.5s;
    }
    .picture_link a:hover{
        opacity: 0.5;
    }
    .restaurantpicture img{
        height: 158px;
        width: 250px;
        padding-top: 10px;
    }
    .picture_link p{
        font-size: 20px;
        padding-top: 20px;
        color: #17288b;
    }
    .outside_link{
        display: flex;
        justify-content: center;   
        margin-top: 50px;  
    }
    .outside_link_web_one{
        position: relative;
    }
    .otuside_link_p_item1{
        position: absolute;
        font-size: 5px;
        color: white;
        bottom: 60px;
        left: 110px;
    }
    .otuside_link_p_item2{
        position: absolute;
        font-size: 24px;
        color: white;
        bottom: 30px;
        left: 75px;
    }
    .otuside_link_p_item3{
        position: absolute;
        font-size: 5px;
        color: white;
        bottom: 15px;
        left: 60px;
    }
    .outside_link_web_two{
        position: relative;
    }

    .outside_link_web_two img{
        width: 268px;
        height: 160px;
        margin:0 20px 0 20px;
    }
    .outside_link_web_two p{
        position: absolute;
        top: -40px;
        left: 70px;
        color: white;
        font-size: 24px;
    }
    .outside_link a{
        transition: opacity 0.5s;
    }
    .outside_link a:hover{
        opacity:0.8;
    }
    @media screen and (max-width: 768px) {
        .restaurantzone{
            height: 1300px;
            width: 100%;
            margin-top: 600px;
            
        }
        .restaurantpicture{
            display: inline-block;
            /* transform: translate(9%, -3%); */

            /* padding-left: 35px; */
        }
        .picture_link{
            margin-top: 10px;
        }
        .outside_link{
            display: block;
        }
    }
    @media screen and (max-width: 1280px) {
        .restaurantzone{
            margin-top: 150px;       
        }
    }
    @media screen and (max-width: 767px) {
        .restaurantzone{
            /* height: 1300px;
            width: 100%; */
            margin-top: 600px;       
        }
    }
</style>