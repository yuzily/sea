<template>
    <div class="opentime_containner">
        <div class="title_visit">
            <h1 class="title_text">營業時間</h1>
        </div>

        <div class="title_line"></div>

        <div class="title_opentime">
            <h2 class="title_opentime_h2">營業時間</h2>
            <span>
                <br>
                <p>【 May 7th - Jun. 18th 】</p>
                <br>
                <br>
                <p>- Monday -</p>
                <p>10:00 a.m. to 8:00 p.m.</p>
                <br>
                <p>- Tuesday thru Friday -</p>
                <p>10:30 a.m. to 8:00 p.m.</p>
                <br>
                <p>- Weekends and Holidays -</p>
                <p>9:30 a.m. to 8:00 p.m.</p>
                <br>
                <p>【 Jun. 19th - Jun. 30th 】</p>
                <br>
                <p>- Weekdays -</p>
                <p>10:00 a.m. to 8:00 p.m.</p>
                <br>
                <p>- Weekends and Holidays -</p>
                <p>9:30 a.m. to 8:00 p.m.</p>
                <br>
                <p class="foottext">* The opening hours are subject to change during the above period.</p>
                <br>
                <p class="foottext">※最晚入館時間為閉館前1小時</p>
                <p class="foottext">※Further opening hours will be announced as soon as it is decided.</p>
                <p class="foottext">※The Osaka Aquarium Kaiyukan may be temporarily closed due to natural disasters or to prevent infectious diseases.</p>
            </span>
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>

export default {
    name:"OpneTime",
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
    .title_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_visit.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .title_text{
        color: white;
        /* text-align: center; */
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        /* background: gray; */
        width: 100%;
        height: 4px;
    }
    .title_opentime{
        width: 100%;
        height: 800px;
        background: cornflowerblue;
    }
    .title_opentime_h2{
        padding-top: 50px;
        font-size: 22px;
        color: white;
        
    }
    .title_opentime_h2::after{      
        content:"";
        display: block;
        width: 900px;
        height: 0.5px;
        background-color: white;
        margin:auto;
        /* display: none; */
    }
    p{
        color: white;
        font-size: 22px;
    }
    .foottext{
        font-size: 12px;
    }
    .opentime_containner{
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
        .title_opentime_h2::after{
            display: none;
        }
        .back_img{
            display: none;
        }
    }
    @media screen and (max-width: 1280px){
        .back_img{
            display: none;
        }
    }
</style>