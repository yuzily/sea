<template>
    <div class="seaintroduction_containner">
        <div class="seaintroduction_visit">
            <h1 class="seaintroduction_text">海游館簡介</h1>
        </div>

        <div class="title_line"></div>

        <div class="seaintroduction_content">
            <img src="~@/assets/about_img.png">
            <div class="p_groups">
                <p>海遊館是日本最壯觀的水族館之一，展示的獨特性也聞名全球。海遊館再現大自然的環境，介紹環太平洋生活的動物們生動活潑的姿態。</p>
            </div>
            <div class="p_groups">
                <p>海遊館有15個以上的大水槽，各個水槽再現環太平洋的特定區域。來訪的遊客可以享受巡遊太平洋的樂趣。主水槽為長34公尺、深9公尺、水量5400噸</p>
                <p>的「太平洋」水槽，世界上體型最大的魚類“鯨鯊”悠遊其中。此外還有「日本森林」水槽，再現陽光照射的美麗的日本森林以及冰天雪地的「南極大陸」水槽</p>
                <p>等。</p>
            </div>
            <div class="p_groups">
                <p>約2個半小時的旅程，是順著螺旋狀的斜坡從8樓下到4樓，就好像從地上逐漸進入海中、海底似的。從動物們棲息的陸上，潛入魚兒成群地游來游去的海</p>
                <p>中，直到不可思議的深海世界，您可以不同的視點觀看海中的生活。在餵食時間，還可以看到正在接受罕見的訓練（以健康管理為目的）的動物們可愛的</p>
                <p>姿態。</p>
            </div>
            <div class="p_groups">
                <p>可親身感受環境而設計的空間、可體驗觸摸鯊魚，充滿刺激又可互動的新區為眾多的遊客帶來感動。這個區提出了新的水族館形態的方案。</p>
            </div>
            <div class="p_groups">
                <p>邂逅水獺、海獅、企鵝、海豚、鯨鯊、魟魚、水母等620種3萬隻的生物們，對您而言將會是一個很好的經驗。</p>
            </div>

            <div class="introduction_img">
                <router-link to="/explore"><img src="~@/assets/bt_con_01.png"></router-link>
                <router-link to="/foodtime"><img src="~@/assets/bt_con_03.png"></router-link>
            </div>

            <div class="animal_img">
                <img src="~@/assets/concept_img01.jpg">
                <img src="~@/assets/concept_img02.jpg">
                <img src="~@/assets/concept_img03.jpg">
            </div>
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>
export default {
    name:"SeaIntroduction",
    data() {
        return {
            back_img_vue:{},
            move_number:0
        }
    },
    mounted(){
        this.startAutoMove();
    },
    beforeDestroy(){
        this.startAutoMove();
    },
    methods:{
        move_backfish(){
            if(this.move_number == 0){           
                this.$set(this.back_img_vue, 'top', '-500px');
                this.move_number++;
                console.log("TOP1");
            }
            else if(this.move_number == 1){
                this.$set(this.back_img_vue, 'left', '300px');
                this.move_number++;
                console.log("LEFT2");
            }
            else if(this.move_number == 2){
                this.$set(this.back_img_vue, 'top', '-90px');
                this.move_number++;
                console.log("TOP3");
            }
            else if(this.move_number == 3){
                this.$set(this.back_img_vue, 'left', '0px');
                this.move_number = 0;
                console.log("left4");
            }
        },
        startAutoMove(){
            setInterval(() => {
                this.move_backfish();              
            }, 4000);
        }
    }
}
</script>

<style scoped>
    .seaintroduction_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_visit.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .seaintroduction_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .seaintroduction_content{
        width: 100%;
        height: 1500px;
        background: cornflowerblue;
    }
    
    p{
        color: white;
    }
    .seaintroduction_content img{
        padding-top: 40px;
    }
    .p_groups{
        padding-top: 40px;
    }
    .introduction_img img{
        padding: 30px 10px 0 10px;
        transition: all 1s;
    }
    .introduction_img img:hover{
        opacity: 50%;
    }
    .animal_img img{
        padding: 40px 10px 0 10px;
    }
    .seaintroduction_containner{
        position: relative;
    }
    .back_img{
        position: absolute;
        width: 80%;
        height: 1200px;
        left: 0px;
        top: -90px;
        transition: all 1s;
    }
</style>