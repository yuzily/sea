<template>
    <div class="tranffic_containner">
        <div class="title_visit">
            <h1 class="tranffic_text">交通指南</h1>
        </div>

        <div class="title_line"></div>

        <div class="tranffic_content">
            <div class="p_groups">
                <p class="tittle_p">搭乘飛機時</p>
                <p>從關西國際機場：從關西機場站換乘電車約65分鐘、或是利用到海遊館的直達巴士約60分鐘。</p>
                <p>從大阪國際機場：換乘電車約60分鐘。</p>
            </div>
            <div class="p_groups">
                <p class="tittle_p">搭乘電車時</p>
                <p>從新幹線的新大阪站換乘電車約35分鐘</p>
                <p>從大阪站（或梅田站）約30分鐘</p>
                <p>從難波站（心齋橋）約30分鐘</p>
                <p>從地下鐵中央線大阪港站步行約5分鐘</p>
            </div>

            <img src="~@/assets/emap-t2.png">
            <img src="~@/assets/emap-t3.png">

            <div class="p_groups">
                <p class="tittle_p">搭乘巴士時</p>
                <p>從大阪站搭乘大阪市營巴士（88路）約45分鐘、從難波站搭乘大阪市營巴士（60路）約40分鐘 在「天保山港口村」站下車即到。</p>
            </div>
            <div class="p_groups">
                <p class="tittle_p">從日本環球影城</p>
                <p>從環球城港口搭乘接駁船「船長線」約10分鐘</p>
            </div>

            <h2>地址</h2>

            <div class="p_groups">
                <p>郵遞區號552-0022 大阪府大阪市港區海岸通1-1-10</p>
                <p>電話：+81-6-6576-5501</p>
                <p>傳真：+81-6-6576-5510</p>
                <p>E-mail: info@kaiyukan.com</p>
            </div>
        </div>

        <img src="~@/assets/back_img01.png" class="back_img" :style="back_img_vue">
    </div>
</template>

<script>
export default {
    name:"TranfficView",
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
    .tranffic_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .tranffic_content{
        width: 100%;
        height: 2100px;
        background: cornflowerblue;
    }
    .tranffic_content img{
        width: 700px;
        display: block;
        margin: auto;
        margin-top: 15px;
    }
    .p_groups{
        padding-top: 70px;
    }
    .tranffic_content h2{
        padding-top: 60px;
        color: white;
    }
    .tranffic_content h2::after{
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
    .tittle_p{
        color: yellow;
    }

    .tranffic_containner{
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