<template>
    <div class="whatsea_containner">
        <div class="whatsea_visit">
            <h1 class="whatsea_text">所謂海遊館</h1>
        </div>

        <div class="title_line"></div>

        <div class="whatsea_content">
            <h2>地球和生存在地球上的所有生物，是彼此相互作用而形成的一個生命體。</h2>
            <img src="~@/assets/about_img.png">

            <div class="p_groups">
                <p>海遊館的主題是根據詹姆斯‧洛夫洛克（James Lovelock）(※)所提唱的「蓋亞假說」。蓋亞假說是指，擁有火山活動的地球和存在地球上的所有生物，</p>
                <p>彼此相互作用而形成一個生命體，這一個觀點。而且，環繞太平洋的火山帶（環太平洋火山帶）和許多生物棲息的地域幾乎一致，因此，海遊館以環太平</p>
                <p>洋火山帶（RING OF FIRE）和環太平洋生命体（RING OF LIFE）為概念。</p>
            </div>

            <img src="~@/assets/fire_img.png">

            <div class="p_groups">
                <p>海遊館之旅從隧道型水槽「魚兒穿越道‧水門」揭開序幕，接著開始進入陽光普照的「日本森林」，以世界最大的魚「鯨鯊」悠游其中、蓄水量達5,400噸的</p>
                <p>「太平洋」水槽為中心，從地面到海底環繞太平洋二周的路程持續不斷</p>
                <p>除了魚類之外，還展出兩棲類、爬蟲類、鳥類、哺乳類以及無脊椎動物、植物等，共有約620種、30,000隻的形形色色的生物，重現了環太平洋的大自然</p>
                <p>景觀。</p>
            </div>

            <div class="p_groups">
                <p>海遊館希望向更多的人傳達，生物的美妙和生命的可貴、以及與其相關的大自然環境的重要性，並且，珍惜這些寶貴的野生生物的生命，一面與海洋和生</p>
                <p>物有關人員合作、一面致力於研究和保護活動。</p>
            </div>
        </div>

        <div class="white_zone">
            <div class="white_div">
                <h3>※詹姆斯‧洛夫洛克（James Lovelock）</h3>
                <p>英國的科學家。他一舉成為全世界關注的「蓋亞假說」，是在作為一位共同研究者，參加NASA（美國國家航空暨太空總署）的太空探索計畫中，特別是火星的生命探索計畫時設想出來的。歷任英國皇家學會會員、英國海洋生物學協會會長等。</p>
            </div>
            <div class="white_div">
                <h3>環太平洋火山帶（RING OF FIRE）</h3>
                <p>圍繞著太平洋而綿延不斷的紅色點線，表示地震和火山活動頻繁發生的地域。這一環繞太平洋四周的紅色點線被稱為｢RING OF FIRE（環太平洋火山帶）｣。</p>
            </div>
            <div class="white_div">
                <h3>環太平洋生命帶（RING OF LIFE）</h3>
                <p>好像與環太平洋火山帶重疊而連續不斷的綠色點線，表示生物分布的密度。淺綠色表示高密度、深綠色表示低密度，這些被稱為「RING OF LIFE（環太平洋生命帶）」。</p>
            </div>
        </div>

        <div class="whatsea_content_second">
            <img src="~@/assets/kaiyu_img.jpg">
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>
export default {
    name:"WhatSea",
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
    .whatsea_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_visit.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .whatsea_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .whatsea_content{
        width: 100%;
        height: 1400px;
        background: cornflowerblue;
    }
    .whatsea_content h2{
        padding: 60px 0 20px 0;
        color: white;
    }
    p{
        font-size: 15px;
        color: white;
    }
    .p_groups{
        margin: 20px 0 50px 0;
    }
    .white_zone{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }
    .white_zone p{
        color: #000;
        /* font-size: 20px; */
    }
    .white_zone h3{
        color: #073568;;
    }
    .white_div{
        text-align: left;
        width: 1020px;
    }
    .whatsea_content_second{
        width: 100%;
        background: cornflowerblue;
    }
    .whatsea_content_second img{
        margin: 100px 0 200px 0;
    }
    .whatsea_containner{
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