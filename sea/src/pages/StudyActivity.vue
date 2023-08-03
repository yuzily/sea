<template>
    <div class="studyactivity_containner">
        <div class="studyactivity_visit">
            <h1 class="studyactivity_text">調查研究活動</h1>
        </div>

        <div class="title_line"></div>
            
        <div class="stydyactivity_content">
            <h2>大阪海遊館 海洋生物研究所以布利中心</h2>
        
            <h4>Osaka Aquarium Biological Research Institute of Iburi Center (OBIC)</h4>

            <div class="p_groups">
                <p>高知縣土佐清水市以布利（Iburi），此地是海遊館展示的許多生物們的故鄉。在舒展眼前的太平洋，以鯨鯊這大型迴游性魚類為首，許多生物隨著黑潮而</p>
                <p>來。</p>
            </div>

            <div class="p_groups">
                <p>面臨這豐饒的大海的港口，1997年9月24日，海遊館在此開設了附屬設施「大阪海遊館 海洋生物研究所以布利中心」。該設施有大型的圓形水槽（直徑</p>
                <p>約20公尺、水深約5公尺、容量約1,600噸）及研究管理棟，進行在海遊館展示的生物的收集、生態研究以及足摺岬周邊海域的海洋生物之基礎性研究。</p>
            </div>

            <div class="p_groups">
                <p>以布利中心與當地漁業相關人員合作，捕獲展覽所需的生物，並在該中心的水槽和港口內的魚塘飼養，進行餵食、健康狀態的檢查。之後，輸送到海遊</p>
                <p>館，初次在展覽水槽亮相。</p>
            </div>

            <div class="p_groups">
                <p>此外，一面獲得以當地漁業相關人員為中心的整個地區的協助，一面與京都大學、高知大學共同研究，透過潛水進行生態調查及周邊海域的魚類調查</p>
                <p>等，並將其成果歸納在「以布利・黑潮之魚」（2001年4月20日發行）。</p>
            </div>

            <div class="p_groups">
                <p>平成21年（2009年）12月12日，開設了「第二水槽」（長約19公尺×寬約31公尺×水深約5公尺＋長約8公尺×寬約8公尺×水深約5公尺、容量3,300</p>
                <p>噸）。致力於飼養鯨鯊等大型魚類的飼養、健康管理的訓練，進行神秘的海洋生物的生態調查及繁殖研究。</p>
            </div>

            <img src="~@/assets/study_ing.png">
        </div>
        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>
export default {
    name:"StudyActivity",
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
    .studyactivity_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_study.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .studyactivity_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .stydyactivity_content{
        width: 100%;
        height: 1200px;
        background: cornflowerblue;
    }
    .stydyactivity_content h2{
        color: white;
        padding: 60px 0 20px 0;
    }
    .stydyactivity_content h4{
        color: white;
    }
    .stydyactivity_content h2::after{
        content:"";
        display: block;
        width: 1000px;
        height: 0.5px;
        background-color: white;
        margin:auto;
    }
    p{
        color: white;
    }
    .p_groups{
        font-size: 15px;
        padding-top: 50px;
    }
    .stydyactivity_content img{
        margin-top: 50px;
    }
    .studyactivity_containner{
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