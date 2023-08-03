<template>
    <div class="ticket_containner">
        <div class="ticket_visit">
            <h1 class="ticket_text">門票</h1>
        </div>

        <div class="title_line"></div>

        
        <div class="ticket_content">
            <span>
                <p>Online pre-booking is recommended to get your timed ticket.</p>
                <p>-To maintain appropriate distance in the aquarium</p>
                <p>-To avoid waiting in a long line for getting tickets</p>
                <br>
                <br>
                <h2>與費用</h2>
                <br>
                <p>關於成人、兒童、幼兒的區分</p>
                <p>門票以您入館日的年齡為標準。</p>
                <img src="~@/assets/price_230112.png" style="margin-top: 50px;" class="ticket_money">
                <p class="p_line">!! 株式會社海遊館對從本公司公認的途徑以外（拍賣、旅行社、轉售網站等）購買本網路門票時所發生的糾紛不負任何責任。</p>
                <br>
                <br>
                <p class="small_p">※持有日本國內發行的殘障手冊的人和其護理人員1名可享受半價優惠。</p>
                <p class="small_p">※門票的支付，可以使用JCB、VISA、American Express、MasterCard、Diners等各種信用卡。</p>
                <img src="~@/assets/card.png">
                <p class="small_p">※不能使用旅行支票、日圓以外的貨幣。</p>
                <p class="small_p">※請注意，沒有設置外幣收兌處、ATM（自動提款機）。</p>
                <br>
                <br>
                <br>
                <p style="color:yellow">學校團體門票（外國遊客15人以上、日本遊客20人以上）</p>
                <p>高中生: 2,160日圓</p>
                <p>國中生: 1,120日圓</p>
                <p>小學生: 800日圓</p>
                <p>幼兒: 500日圓</p>
                <p>※帶隊老師、醫生、護士免費。</p>
            </span>
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">

    </div>
</template>

<script>
export default {
    name:"BuyTicket",
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
    .ticket_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_visit.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ticket_text{
        color:white;
    }

    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .ticket_content{
        width: 100%;
        background: cornflowerblue;
        height: 950px;
        padding-top: 50px;
    }
    .ticket_content h2::after{
        content:"";
        display: block;
        width: 1000px;
        height: 0.5px;
        background-color: white;
        margin:auto;
    }
    .p_line::after{
        content:"";
        display: block;
        width: 900px;
        height: 0.5px;
        background-color: white;
        margin:auto;
    }
    h2{
        color: white;
    }
    p{
        color: white;
    }
    .small_p{
        font-size: 12px;
    }

    .ticket_containner{
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
    @media screen and (max-width: 768px){
        .back_img{
            display: none;
        }
        .ticket_money{
            width: 90%;
            margin-top: 0px;
        }
        .ticket_content h2::after{
            display: none;
        }
        .p_line::after{
            display: none;
        }
    }
    @media screen and (max-width: 1280px){
        .back_img{
            display: none;
        }
    }
</style>