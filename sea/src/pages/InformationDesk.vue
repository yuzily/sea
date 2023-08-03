<template>
    <div class="information_containner">
        <div class="information_visit">
            <h1 class="information_text">問訊處</h1>
        </div>

        <div class="title_line"></div>

        <div class="information_content">
            <div class="p_groups">
                <p>‧提供英文、中文繁體字和簡體字、韓文、泰文的館內指南手冊。</p>
                <p>‧館內有會說英語的工作人員，回答您的電話詢問。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">海遊館詢問處</p>
                <p>電話 +81-6-6576-5501 傳真 +81-6-6576-5510</p>
                <p>E-mail info@kaiyukan.com</p>
            </div>
            <div class="p_groups">
                <p class="title_p">語音導覽</p>
                <p>您可以通過專用耳機在聆聽解說的同時仔細觀察這些生物。</p>
                <p>語音導航服務提供六種語言：日文、英文、中文、韓文、法文和泰文。</p>
                <p>音頻指南在服務櫃檯借出。租借費為每台800日元。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">使用輪椅的遊客</p>
                <p>乘坐輪椅來館的遊客，請到入口大樓2樓的海遊館詢問處。</p>
                <p>在海遊館詢問處，也可租借輪椅（免費）。</p>
                <p>※數量有限，全部出租中時，敬請見諒。</p>
                <img src="~@/assets/wheelchair_img.png">
            </div>
            <div class="p_groups">
                <p class="title_p">利用嬰兒車的遊客</p>
                <p class="title_p">As a precautionary measure to prevent infection, we do not offer a baby carriage service, but there is a stroller parking area near the</p>
                <p class="title_p">entrance. If you wish to enter the aquarium with a stroller, please inform the staff in the vicinity of the elevator.</p>
                <p class="title_p">*Please note that Kaiyukan is not responsible for any damage, loss or theft of strollers at the stroller parking area.</p>
                <p>為了讓孩子在海遊館充分遊樂，建議您寄存嬰兒車，抱著孩子入館。從嬰兒車的低視線，可能會看不到生物。而且，館內的照明較暗，人多擁擠時，您的</p>
                <p>嬰兒車可能會有撞到其他遊客的危險。海遊館服務台為您免費保管嬰兒車，請您放心地在館內觀賞。</p>
                <p>另外，沒有嬰兒車租借服務。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">帶協助犬入館的遊客</p>
                <p>可以帶入本館的協助犬如下。</p>
                <p>1)導盲 犬2)導聾犬 3)生活協助犬</p>
                <p>帶協助犬的殘障遊客，可以帶著協助犬照常入館。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">投幣式寄物櫃</p>
                <p>在海遊館內、海遊館入口大樓、天保山市場街（Marketplace）設有投幣式寄物櫃。有下列5種尺寸。</p>
                <p>寬355mm×深575mm×高257mm（200日圓）</p>
                <p>寬355mm×深575mm×高316mm（300日圓）</p>
                <p>寬355mm×深575mm×高550mm（400日圓）</p>
                <p>寬355mm×深575mm×高843mm（600日圓）</p>
                <p>寬355mm×深575mm×高1135mm（700日圓）</p>
                <p>※僅限於海遊館的營業時間內使用。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">哺乳室</p>
                <p>館內6樓及入口大樓的2樓設有哺乳室。另外，各洗手間備有換尿片用的嬰兒床。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">醫務室</p>
                <p>在館內6樓及海遊館入口大樓的2樓。海遊館入口大樓2樓的醫務室，有護士備勤。</p>
            </div>
            <div class="p_groups">
                <p class="title_p">海遊館的再入館</p>
                <p>僅限入館當天可以不限次數進出。請在出口附近的服務台，讓工作人員在您的手背蓋上透明的圖章，再入館時出示圖章以資證明。請您出去用餐後再回</p>
                <p>來慢慢地遊覽。</p>
            </div>
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>
export default {
    name:"InformationDesk",
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
    .information_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_visit.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .information_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .information_content{
        width: 100%;
        height: 1500px;
        background: cornflowerblue;
    }

    p{
        color: white;
    }
    .title_p{
        color: yellow;
    }
    .p_groups{
        padding-top: 50px;
    }
    .p_groups img{
        padding-top: 35px;
    }
    .information_containner{
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