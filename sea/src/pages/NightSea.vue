<template>
    <div class="night_containner">

        <div class="night_content" ref="title_img_ref">
            <div class="night_title">
                <img src="~@/assets/index-ico-title.png">
                <h1 style="color:white">夜間海遊館</h1>
            </div>
            <img src="~@/assets/bg-1.jpg" class="title_img one" :style="title_img_vue" v-if="show_flag">
            <img src="~@/assets/bg-2.jpg" class="title_img two" :style="title_img_vue" v-if="show_flag">
            <div class="night_title_second">
                <h2>在光線與聲音</h2>
                <h2>營造的浪漫氣氛中</h2>
                <h2>演出「夜之海」。</h2>
            </div>
            <div  class="night_title_second_p">
                <p>每日傍晚5點起， 便會展現與白天迥異夢幻面貌的「夜間海遊館」。</p>
                <p>館內播放音樂風格一變， 在如同深邃碧藍海洋上遍灑的皎潔月光中， 欣賞魚群悠游時的美麗姿態，令人充滿幻想。</p>
                <p>何不在靜謐的館內放鬆身心， 讓思緒馳騁於夜間的海洋中呢？</p>
            </div>
        </div>

        <div class="img_zone" ref="img_zone_ref">
            <div class="img_p_zone one">
                <img src="~@/assets/pic-1.jpg">
                <p>Seto Inland Sea</p>
            </div>
            <div class="img_p_zone two">
                <img src="~@/assets/pic-2.jpg">
                <p>Pacific Ocean</p>
            </div>
            <div class="img_p_zone three">
                <img src="~@/assets/pic-3.jpg">
                <p>Great Barrier Reef</p>
            </div>
            <div class="img_p_zone four">
                <img src="~@/assets/pic-4.jpg">
                <p>King penguin</p>
            </div>
            <div class="img_p_zone five">
                <img src="~@/assets/pic-5.jpg">
                <p>California sea lion</p>
            </div>
            <div class="img_p_zone six">
                <img src="~@/assets/pic-6.jpg">
                <p>Around Kaiyukan</p>
            </div>
            <img src="~@/assets/bg-3.jpg" class="img_zone_hidden one" :style="img_zone_hidden_vue" v-if="show_flag">
            <img src="~@/assets/bg-4.jpg" class="img_zone_hidden two" :style="img_zone_hidden_vue" v-if="show_flag">
        </div>

        <div class="video_zone">
            <iframe width="800" height="515" src="https://www.youtube.com/embed/ihyl5nbOLX4?autoplay=1&mute=1&loop=1&playlist=ihyl5nbOLX4" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name:"NightSea",
    data() {
        return {
            title_img_vue:{},
            img_zone_hidden_vue:{},
            show_flag:false,  //確認物件已經SOHW的FLAG 免得先去抓他位置造成錯誤
        }
    },
    mounted() {
    window.addEventListener('scroll', this.show_title_img);
    window.addEventListener('scroll', this.show_img_zone);
    this.show_flag = true;
  },
  
  beforeDestroy() {
    window.removeEventListener('scroll', this.show_title_img);
    window.removeEventListener('scroll', this.show_img_zone);
  },
    methods: {
        show_title_img() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            const rect = this.$refs.title_img_ref.getBoundingClientRect();   
            if (rect.top <= scrollPosition && scrollPosition < rect.bottom) {
                this.$set(this.title_img_vue, 'opacity', '1');
            }
            else{
                this.$set(this.title_img_vue, 'opacity', '0');
            }
        },
        show_img_zone() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            const rect = this.$refs.img_zone_ref.getBoundingClientRect();   
            if (rect.top <= scrollPosition && scrollPosition < rect.bottom) {
                this.$set(this.img_zone_hidden_vue, 'opacity', '1');
            }
            else{
                this.$set(this.img_zone_hidden_vue, 'opacity', '0');
            }
        },
    },
}
</script>

<style scoped>


    .night_containner{
        width: 100%;
        height: 3600px;
        position: relative;
    }
    .night_content{
        background-image: url("~@/assets/mv.jpg");
        height: 1000px;
        width: 100%;
        background-size: 100%;
        /* background-position: center; */
        padding-top: 80px;
        z-index: 2;
    }
    .night_title{
        display: flex;
        justify-content: center;
    }
    .night_title img{
        height: 50px;
        width: 50px;
        padding-right: 20px;
    }
    .title_img{
        position: absolute;
    }
    .title_img.one{
        top: 0px;
        margin-top: 200px;
        margin-left: -600px;
        z-index: 1;
        opacity: 0;
        transition: all 2s;
        
    }
    .title_img.two{
        top: 0px;
        margin-top: 100px;
        margin-left: 400px;
        z-index: 1;
        opacity: 0;
        transition: all 2s;
        
    }
    .night_title_second{
        margin-top: 600px;
        color: white;
        font-size: 30px;
    }
    .night_title_second_p{
        margin-top: 80px;
        color: white;
    }
    .night_title_second_p p{
        margin-top: 10px
    }


    .img_zone{
        
        width: 100%;
        height: 2000px;
        background: #171781;
        position: relative; 

    }
    .img_zone p{
        color: white;
        padding-top: 10px;
    }
    .img_p_zone{
        /* position: absolute;
        top: 0%; */
        z-index: 2;
    }
    .img_p_zone.one{
        padding: 80px 500px 0 0px;
        /* margin: 0px 0 0 400px; */
    }
    .img_p_zone.two{
        margin: -280px 0px 0px 600px;
        /* margin: 200px 0 0 1200px; */
    }
    .img_p_zone.three{
        margin: 50px 300px 0px 0px;
        /* margin: 600px 0 0 550px; */
    }
    .img_p_zone.four{
        margin: 170px 0px 0px 500px;
        /* margin: 1100px 0 0 1000px; */
    }
    .img_p_zone.five{
        margin: -200px 450px 0px 0px;
        /* margin: 1300px 0 0 500px; */
    }
    .img_p_zone.six{
        /* margin: 1500px 0 0 1150px; */
        margin: -100px 0px 0px 750px;
    }
    .video_zone{
        background: #171781;
        height: 600px;
        width: 100%;
        
    }
    .img_zone_hidden{
        position: absolute;
        z-index: 1;
        top: 0px;
    }
    .img_zone_hidden.one{
        margin: 600px 0 0 300px;
        opacity: 0;
        transition: all 2s;
    }
    .img_zone_hidden.two{
        margin: 900px 0 0 -500px;
        opacity: 0;
        transition: all 2s;
    }
</style>