<template>
    <div>
        <div class="village_visit">
            <h1 class="village_text">天保山港灣村</h1>
        </div>

        <div class="title_line"></div>

        <div class="village_content">
            <h2>天保山港灣村（Habor Village）綜合網站</h2>
            <img src="~@/assets/bt_map.png">
            <div class="p_groups">
                <p>天保山港口村是以世界最大規模的水族館「海遊館」為中心的複合型娛樂設施。水族館、大阪土產和小東西的店舖、大阪名物餐廳、摩天輪、遊覽船等等，</p>
                <p>讓任何人都能盡情地遊玩樂一整天。</p>
            </div>
            <div class="p_groups">
                <h3>天保山市場街（Marketplace）</h3>
                <p>天保山市場街，是位於海遊館旁邊（鄰接）的商業設施。其概念是「節慶日‧市場」。這裡匯聚了約80家店舖，有大阪土產店、卡通人物商品店、時裝店、餐</p>
                <p>廳、大阪美食的食品主題公園等。此外，還有可以接觸動物的「天保山動物園」、室內樂高®遊樂場「大阪樂高樂園探索中心」，是最適合全天遊玩的地方。</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_01.png">
                <p>營業時間</p>
                <p>購物商店、娛樂場 上午11點～晚上8點</p>
                <p>餐廳 上午11點～晚上9點</p>
                <p>速食店 上午11點～晚上8點</p>
                <p style="font-size:10px">※營業時間根據店舗、季節而有所不同。</p>
                <p style="font-size:10px">※休息日和海遊館相同。</p>
            </div>
            <div>
                <p style="font-size:10px">※在天保山市場街（Marketplace）可以使用UC、JCB、VISA、AMERICAN EXPRESS、MasterCard等各種信用卡。但是，有一部分的店舗不能使用。另外，不能使用日幣、旅行支票以外的</p>
                <p style="font-size:10px">貨幣。</p>
                <p style="font-size:10px">※請注意，天保山港口村（Habor Village）內沒有設置外幣收兌處、ATM（自動提款機）。</p>
            </div>
            <div style="padding-top:50px">
                <img src="~@/assets/shop_01a1.png">
                <img src="~@/assets/shop_01a2.png">
            </div>
            <div  class="p_groups">
                <h3>難波美食小巷</h3>
                <p>浪花美食小巷是再現1960年代大阪的街景、具有懷古風情的食品主題公園。大阪最具代表性的老店和名店如會津屋的章魚燒、自由軒有名的咖哩、炸</p>
                <p>串、烤烏賊等，約20家店舗匯聚於此。請來品嚐大阪美食吧。</p>
                <p>※免費入場</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_02.png">
                <p>營業時間</p>
                <p>上午11點～晚上8點</p>
                <p>※營業時間因季節而異。</p>
                <p>※休息日與海遊館相同。</p>

                <router-link to="/alley"><img src="~@/assets/bt_shop_kuishinbo.png" style="padding-top:50px" class="ally_link"></router-link>
            </div>
            <div>
                <img src="~@/assets/shop_02a1.png">
                <img src="~@/assets/shop_02a2.png">
            </div>
            <div class="p_groups">
                <h3>天保山大摩天輪</h3>
                <p>天保山大摩天輪以其直徑達100公尺、高達112.5公尺自豪，是世界最大的摩天輪。旋轉一周所需時間為15分鐘，天氣晴朗時，在摩天輪上可以瞭望明</p>
                <p>石海峽大橋、關西國際機場等立體全景。夜晚時分，摩天輪的照明燈飾預報隔天的天氣，紅色表示晴天、綠色表示多雲、藍色表示雨天。</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_03.png">
                <p>門票</p>
                <p>800日圓（3歲以上）</p>
                <br>
                <p>營業時間</p>
                <p>上午10點～晚上10點</p>
                <p>※門票的銷售到晚上9點30分為止。</p>
                <p>※營業時間因季節而異。</p>
            </div>
            <div>
                <img src="~@/assets/shop_03a1.png">
                <img src="~@/assets/shop_03a2.png">
            </div>
            <div class="p_groups">
                <h3>帆船型觀光船聖母瑪利亞號（Santa Maria）</h3>
                <p>模仿哥倫布發現新大陸時所使用的聖母瑪利亞號，以原船約2倍大的尺寸復原的帆船型觀光船。可以隨著海風的吹拂，享受乘船遊覽大阪港灣區的樂趣。</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_04.png">
                <p>※海遊館的休息日、12月停駛。</p>
            </div>
            <div class="p_groups">
                <h3>大阪天保山海鷗飯店（Hotel Seagull Tempozan Osaka）</h3>
                <p>所有客房都可觀海的城市度假飯店，步行到海遊館只需2分鐘。</p>
                <p>而且是日本環球影城™的合作飯店。</p>
                <p>不僅是天保山港口村，作為大阪灣區的休閒據點，地理位置絕佳！以白色客船為形象的外觀，可以讓您好似在乘船旅遊的氣氛之中舒適地度過一段美好</p>
                <p>的時光</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_06.png">
                <p>電話：+81-6-6575-5000</p>
            </div>
            <div class="p_groups">
                <h3>接駁船「船長線」</h3>
                <p>以單程約10分鐘，將海遊館西碼頭和環球城港口連接的接駁船。</p>
            </div>
            <div class="img_p_containner">
                <img src="~@/assets/shop_05.png">
                <p>電話：+81-6-6573-8222</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HaborVillage",
}
</script>

<style scoped>
    .village_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_shoping.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .village_text{
        color: white;
        /* text-align: center; */
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        /* background: gray; */
        width: 100%;
        height: 4px;
    }
    .village_content{
        width: 100%;
        height: 4100px;
        background: cornflowerblue;
    }
    .village_content h2{
        color: white;
        padding:70px 0 30px 0;
    }
    .village_content h2::after{
        content:"";
        display: block;
        width: 900px;
        height: 0.5px;
        background-color: white;
        margin:auto;
    }
    p{
        color: white;
    }
    .p_groups{
        padding-top: 40px;
    }
    .img_p_containner img{
        float: left ;
        padding-right: 25px;
    }
    .img_p_containner p{
        text-align: left;
        padding-left: 25px;
    }
    .img_p_containner{
        width: 800px;
        margin: auto;
        padding-top: 50px;
        height: 300px;
    }
    h3{
        color: yellow;
    }
    @media screen and (max-width: 768px) {
        .village_content h2::after{
            display: none;
        }
        img{
            width: 90%;
        }
        .img_p_containner{
            width: 100%;
            margin-top: 5px;
            font-size: 12px;
        }
        .img_p_containner img{
            width: 50%;
            height: 60%;
        }
        .ally_link{
            transform: scale(1,0.5);
        }
    }
</style>