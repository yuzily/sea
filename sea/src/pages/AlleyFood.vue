<template>
    <div class="ally_containner">
        <div class="alley_visit"  >
            <img src="~@/assets/kuishinbo_logo.png">
        </div>

        <div class="alley_content"  :style="alley_content_vue">
            <img src="~@/assets/kuishinbo_title.png" style="padding:50px 0 30px 0">
            <div>
                <p>這裡是再現1960年代懷舊的大阪街道之美食主題樂園。您可以品嘗大阪人氣的當地食品如章魚燒、御好燒、炸串等等，作為美食家天堂而廣為人知。而</p>
                <p>且，老字號的名店匯聚一堂。如欲享受大阪的美食，這裡定能讓您心滿意足！</p>
                <p>※免費入場</p>
            </div>
            <div class="img_groups" >
                <img src="~@/assets/bt_kuishinbo_r1_c1.jpg" @click="scrollposition(1)">
                <img src="~@/assets/bt_kuishinbo_r1_c3.jpg" @click="scrollposition(2)">
                <img src="~@/assets/bt_kuishinbo_r1_c5.jpg" @click="scrollposition(3)">
            </div>
            <h3 ref="what_food">浪速美食橫丁是什麼？</h3>
            <div class="img_p">
                <img src="~@/assets/kuishinbo_img.png">
                <p>浪速美食橫丁是位於天保山Market Place（購物中心）內的美食主題樂園。</p>
                <p>在這好似昭和40年左右（1960年代中旬）的大阪平民街區的懷舊氛圍中，您可一邊散步、一邊從店面雖小但好吃的約20家餐廳之中選擇喜歡的店舖，品嘗各式各樣的大阪當地美味。</p>
                <p>浪速美食橫丁的「浪速＝大阪」、「美食，日文原文為Kuishinbo＝饞鬼」、「橫丁＝小巷」。</p>
                <p>大阪自古被稱為「講究吃的城鎮」、「天下的廚房」，「好吃是理所當然、如果不是好吃又便宜就不行」這種嚴格的價值觀是一般常識。其結果，日本全國各地的所有食材都聚集到大阪，各式各樣的美食在此互相競爭。</p>
            </div>
            <h3 ref="good_food">您一定得品嘗的大阪當地最佳食物</h3>
            <div class="food_containner">
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r1_c1.jpg">
                    <h4>章魚燒 ＜會津屋＞</h4>
                    <p>章魚燒（Takoyaki）源自會津屋第一代開發的radio（收</p>
                    <p>音機）燒。因為湯底味道好，所以不需澆醬汁，是特別</p>
                    <p>好吃的章魚燒。</p>
                </div>
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r1_c3.jpg">
                    <h4>御好燒 ＜Botejyu＞</h4>
                    <p>Okonomiyaki（御好燒）是一種廣為人知的日式煎餅。</p>
                    <p>現在日本一般「在御好燒上面澆蛋黃醬」的吃法是</p>
                    <p>Botejyu開發出來的。</p>
                </div>
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r1_c5.jpg">
                    <h4>炸串 ＜活(Katsu)＞</h4>
                    <p>Kushikatsu（炸串）是大阪平民街區人氣的食品。把各</p>
                    <p>式各樣的食材，裹上麵衣炸得脆脆的，自己蘸醬汁來品</p>
                    <p>嘗。</p>
                </div>
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r3_c1.jpg">
                    <h4>蛋包飯 ＜北極星＞</h4>
                    <p>北極星是發明日式蛋包飯的西餐老店。這裡還有只有</p>
                    <p>在「浪速美食橫丁」才吃得到的菜餚。醬汁和飯的調味</p>
                    <p>因菜單而異。</p>
                </div>
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r3_c3.jpg">
                    <h4>咖哩飯 ＜自由軒＞</h4>
                    <p>自由軒的咖哩飯是咖哩汁和飯混在一起的，澆雞蛋和</p>
                    <p>醬汁來品嘗，具有獨特的風格。創立於1910年，是大</p>
                    <p>阪的名物咖哩，從以前到現在人氣不減。</p>
                </div>
                <div class="food_groups">
                    <img src="~@/assets/kuishinbo_shop_r3_c5.jpg">
                    <h4>烏賊燒 ＜桃谷Ikayaki屋＞</h4>
                    <p>Ikayaki（烏賊燒）是大阪「麵粉文化」中有名的食物之</p>
                    <p>一。在柔嫩的生麵餅中混合新鮮的烏賊烤製而成。可以</p>
                    <p>用手拿著吃，是簡單美味的大阪當地食品。</p>
                </div>
            </div>
            <h3 ref="old_street">大阪懷舊的街道</h3>
            <div class="street_containner">
                <div class="street_groups">
                    
                    <img src="~@/assets/spot1.jpg" @click="openModal(img_Kuishinbo)">

                    <h4>Kuishinbo財神像</h4>
                    <p>此主題樂園的吉祥物。觸壓其腳底會唱</p>
                    <p>起歌來。</p>
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot1_l.jpg" :style="img_Kuishinbo">
                        <button class="button_groups" :style="img_Kuishinbo" @click="closeModal(img_Kuishinbo)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot2.jpg" @click="openModal(img_street)">
                    <h4>古老的街道</h4>
                    <p>再現昭和時代（1926〜1989年）的郵</p>
                    <p>筒、電燈等。您可穿越時光回味往昔的大</p>
                    <p>阪。</p>
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot2_l.jpg" :style="img_street">
                        <button class="button_groups" :style="img_street" @click="closeModal(img_street)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot3.jpg" @click="openModal(img_toy)">
                    <h4>令人懷念的商品</h4>
                    <p>展示懷舊的日本人氣商品，如當時的海</p>
                    <p>報、玩具等。</p>
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot3_l.jpg" :style="img_toy">
                        <button class="button_groups" :style="img_toy" @click="closeModal(img_toy)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot4.jpg"  @click="openModal(img_candymaster)">
                    <h4>飴細工</h4>
                    <p>飴細工是日本的糖人製作工藝。手藝人</p>
                    <p>在您的面前，使用麥芽糖製成動物等各</p>
                    <p>種形狀。（※不定期舉辦）</p>
                </div>
                <div  class="modal other">
                        <img src="~@/assets/spot4_l.jpg" :style="img_candymaster">
                        <button class="button_groups" :style="img_candymaster" @click="closeModal(img_candymaster)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot5.jpg"  @click="openModal(img_northstar)">
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot5_l.jpg" :style="img_northstar">
                        <button class="button_groups" :style="img_northstar" @click="closeModal(img_northstar)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot6.jpg"  @click="openModal(img_lantern)">
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot6_l.jpg" :style="img_lantern">
                        <button class="button_groups" :style="img_lantern" @click="closeModal(img_lantern)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot7.jpg"  @click="openModal(img_bear)">
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot7_l.jpg" :style="img_bear">
                        <button class="button_groups" :style="img_bear" @click="closeModal(img_bear)"></button>
                </div>

                <div class="street_groups">
                    <img src="~@/assets/spot8.jpg"  @click="openModal(img_light)">
                </div>
                <div  class="modal">
                        <img src="~@/assets/spot8_l.jpg" :style="img_light">
                        <button class="button_groups" :style="img_light" @click="closeModal(img_light)"></button>
                </div>

            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    name:"AlleyFood",
    data() {
        return {
            alley_content_vue:{},
            img_Kuishinbo:{},
            img_bear:{},
            img_street:{},
            img_toy:{},
            img_northstar:{},
            img_lantern:{},
            img_light:{},
            img_candymaster:{},
        }
    },
    methods: {
        openModal(img) {
            console.log(img);
            this.$set(img, 'transform', 'scale(1)');
            this.$set(img, 'transform', 'scale(1)');
        },
        closeModal(img){
            this.$set(img, 'transform', 'scale(0)');
            this.$set(img, 'transform', 'scale(0)');
        },
        scrollposition(position){
            // const scrollSS = this.$refs.scroll;
            // console.log(scrollSS);
            // scrollSS.scrollTo({
            //     top: 300,
            //     behavior: 'smooth'
            // });
            if(position == 1){
                console.log("滾動");
                this.$refs.what_food.scrollIntoView({ behavior: "smooth" });
            }
            else if(position == 2){
                console.log("滾動");
                this.$refs.good_food.scrollIntoView({ behavior: "smooth" });
            }
            else if(position == 3){
                console.log("滾動");
                this.$refs.old_street.scrollIntoView({ behavior: "smooth" });
            }
            // document.getElementById('scrollSS').scrollIntoView({ behavior: "smooth" });
            // console.log(            document.getElementById('scrollSS').scrollTo(0, 123))
        }
    }
}
</script>

<style scoped>
    .alley_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_kuishinbo.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .alley_content{
        width: 100%;
        background-image: url("~@/assets/back_kushinbo.png") ;
        height: 2500px;
    }
    .img_groups{
        margin: 40px 0 70px 0 ;
    }
    .img_groups img{
        padding: 0 10px 0 10px;
    }
    .alley_content h3{
        background-image: url("~@/assets/kuishinbo_hh.png") ;
        width: 100%;
        height: 84px;
        background-position: center;
        background-repeat: no-repeat;
        font-size: 22px;
        line-height: 91px;
        /* padding-top: 240px; */
 
        color: #D60044;;
    }
    .img_p{
        width: 800px;
        margin: auto;
        padding: 30px 0 60px 0;
    }
    .img_p img{
        float: left;
    }
    .img_p p{
        text-align: left;
        font-size: 14px;
    }
    h4{
        color: #D60044;;
        font-size: 15px;
        margin-bottom: 10px;
    }
    .food_groups p{
        font-size: 7px;
    }
    .food_containner{
        padding-top: 50px;
        margin: auto;
        display: flex;
        height: 700px;
        width: 950px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .street_containner p{
        font-size: 7px;
    }
    .street_containner{
        position: relative;
        padding-top: 50px;
        margin: auto;
        display: flex;
        height: 700px;
        width: 950px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    /* .modal{
        position: relative;
        position: absolute;
        top: 0px;
        left: 50%;
        transform :scale(0);
        transform-origin: center;
        transition: transform 1s;

    } */
    .modal img{
        position: absolute;
        top: 0px;
        left: 180px;
        transform :scale(0);
        transform-origin: center;
        transition: transform 0.8s;
    }
    .button_groups{
        width: 35px;
        height: 35px;
        background-image: url("~@/assets/controlsXX.png");
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        position: absolute; 
        top: -15px;
        right: 155px;
        transform :scale(0);
        transform-origin: center;
        transition: all 1.5s;
    }

    .modal.other img{
        position: absolute;
        top: 0px;
        left: 80px;
        transform :scale(0);
        transform-origin: center;
        transition: transform 0.8s;
    }
    .modal.other button{
        top: -10px;
        left: 860px;
    }
    .street_groups:hover{
        cursor: pointer;
        opacity: 50%;
    }
    .img_groups img:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        /* .ally_containner{
            margin-bottom: 0px;
        } */
        img{
            width: 90%;
        }
        .alley_content{
            width: 100%;
            height: 5000px;
        }
        .img_p{
            width: 90%;
        }
        .img_p img{
            width: 100%;
        }
        .food_containner{
            /* display: inline-block; */
            width: 90%;
            margin-bottom: 1000px;
        }
        .street_containner{
            width: 50%;
            pointer-events: none;
            
        }
    }
</style>