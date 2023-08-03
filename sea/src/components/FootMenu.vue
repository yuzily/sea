<template>
    <div class="footmenuzone" :style="footmenuzone_vue">
        <div class = "foot_visit_we">
            <img src="~@/assets/linkhed.png">
            <p class="foot_visit_we_title_text">請訪問我們</p>
            <router-link to="/opentime">
                 <p class="foot_visit_we_text">營業時間</p>
            </router-link>
            <router-link to="/ticket">
                <p class="foot_visit_we_text">門票</p>
            </router-link>
            <router-link to="/tranffic">
                 <p class="foot_visit_we_text">交通指南</p>
            </router-link>
            <router-link to="/information">
            <p class="foot_visit_we_text">問訊處</p>
            </router-link>
        </div>
        <div class = "foot_visit_we">
            <img src="~@/assets/linkhed.png">
            <p class="foot_visit_we_title_text">探索海遊館</p>
            <router-link to="/introduction">
                <p class="foot_visit_we_text">海游館簡介</p>
            </router-link>
            <router-link to="/explore">
                <p class="foot_visit_we_text">常設展覽</p>
            </router-link>
            <router-link to="/island">
                <p class="foot_visit_we_text">北極圈, 福克蘭群島（馬爾維納斯群島）, 馬爾地夫群島</p>
            </router-link>
            <router-link to="/foodtime">
            <p class="foot_visit_we_text">生物們的用餐時間</p>
            </router-link>
            <router-link to="/whatsea">
                <p class="foot_visit_we_text">所謂海遊館</p>
            </router-link>
            <router-link to="/night">
            <p class="foot_visit_we_text">夜間海遊館</p>
            </router-link>
        </div>
        <div style="position:relative">
            <div class = "foot_visit_we">
                <img src="~@/assets/linkhed.png">
                <p class="foot_visit_we_title_text">監測研究活動</p>
                <router-link to="/activity">
                    <p class="foot_visit_we_text">調查研究活動</p>
                </router-link>
            </div>
            <div class = "foot_visit_we" style="position:absolute;top:70px; height:auto;">
                <img src="~@/assets/linkhed.png">
                <p class="foot_visit_we_title_text">餐廳和購物</p>
                <router-link to="/village">
                    <p class="foot_visit_we_text">天保山港灣村</p>
                </router-link>
                <router-link to="/alley">
                    <p class="foot_visit_we_text">難波美食小巷</p>
                </router-link>
                <a href="https://suijo-bus.osaka/traditional/">
                    <p class="foot_visit_we_text">帆船型觀光船聖母瑪利亞號</p>
                </a>
                <a href="http://tempozan-kanransya.com/tempozan-kanransya.com/zh-TW/">
                    <p class="foot_visit_we_text">天保山大摩天輪</p>
                </a>
                <router-link to="/Ship">
                    <p class="foot_visit_we_text">接駁船「船長線」</p>
                </router-link>
            </div>
        </div>
        <div class="footlink_picture">
            <router-link to="/">
                <img src="~@/assets/bt_foot_logo.png" class="logo_img">
            </router-link>
            <a href="https://www.facebook.com/kaiyukan.ch/" target="_blank">
                <img src="~@/assets/bt_foot_fb.png" class="fb_img" target="_blank">
            </a>
            <a href="https://twitter.com/intent/tweet?text=%E3%80%8C%E6%B5%B7%E9%81%8A%E9%A4%A8%E3%80%8D%E4%BD%8D%E6%96%BC%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%EF%BC%8C%E6%98%AF%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E8%A6%8F%E6%A8%A1%E7%9A%84%E6%B0%B4%E6%97%8F%E9%A4%A8%E3%80%82%E6%93%81%E6%9C%89%E5%B7%A8%E5%A4%A7%E7%9A%84%E6%B0%B4%E6%A7%BD%E3%80%81%E5%8F%AF%E4%BB%A5%E9%AB%94%E9%A9%97%E4%B8%96%E7%95%8C%E5%90%84%E5%9C%8B%E8%87%AA%E7%84%B6%E7%9A%84%E5%8D%80%E5%9F%9F%EF%BC%8C%E4%BB%A5%E5%8F%8A%E8%83%BD%E5%92%8C%E7%94%9F%E7%89%A9%E4%BA%92%E5%8B%95%E7%9A%84%E5%8D%80%E5%9F%9F%E7%AD%89%E3%80%82&url=https://www.kaiyukan.com/language/chinese_traditional/">
                <img src="~@/assets/bt_foot_tw.png" class="tw_img">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"FootMenu",
    data() {
        return {
            footmenuzone_vue:{},
        }
    },
    props:["switchflag","show_window"],
    watch:{
        switchflag(newvalue){
                if(newvalue == true){
                    this.$set(this.footmenuzone_vue, 'margin-top', '2190px');
                }
                else if(newvalue == false){
                    this.$set(this.footmenuzone_vue, 'margin-top', '1590px');
                }
            },
        show_window(newvalue){
            if(newvalue == false){
                    this.$set(this.footmenuzone_vue, 'margin-top', '0px');
            }
        }
    }
}
</script>

<style scoped>
    .footmenuzone{
        background: #02234C;
        width: 100%;
        height: 270px;
        margin-top: 1590px;
        transition: margin-top 0.5s;
        display: flex;
        justify-content: center;
        
    }
    .foot_visit_we{
        /* background: wheat; */
        width: 250px;
        height: 255px;
        text-align: left;
        padding-top: 15px;
        border-left: 1px dotted #fff;
        /* border-right: 1px dotted #fff; */
    }
    .foot_visit_we img{
       display: inline-block;
       margin-left: 10px ;
       
    }
    .foot_visit_we_title_text{
        color: white;
        display: inline-block;
        font-size: 13px;
        font-weight: bold;
    }
    .foot_visit_we_text{
        color: white;
        font-size: 12px;
        margin-left: 25px ;
        transition: color 0.5s;
    }
    .foot_visit_we_text:hover{
        color:yellow;
    }
    .footlink_picture{
        width: 250px;
        height: 270px;
        border-left: 1px dotted #fff;
        /* background: tomato; */
        position: relative;
    }
    .footlink_picture .logo_img{
        height: 30px;
        width: 180px;
        position: absolute;
        top: 25px;
        left: 40px;
        transition: opacity 0.5s;
    }
    .fb_img{
        position: absolute;
        top: 200px;
        left: 150px;
        transition: opacity 0.5s;
    }
    .tw_img{
        position: absolute;
        top: 200px;
        left: 190px;
        transition: opacity 0.5s;
    }
    p{
        padding: 5px;     
    }
    a{
        text-decoration: none;
    }
    .footlink_picture img:hover{
        opacity: 0.5;
    }
    @media screen and (max-width: 1280px) {
        .footmenuzone{
            margin-top: 2200px;
            height: 1700px;
            display: flex;
            flex-direction: column;
            display: none;
        }
    }
</style>