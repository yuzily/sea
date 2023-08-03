<template>
    <div class="island_containner">
        <div class="north_animal" ref="north">

            <div class="north_animal_img">

                <img src="~@/assets/photo_01.jpg" class="north_one" :style="north_one_vue">
                <img src="~@/assets/photo_02.jpg" class="north_two" :style="north_two_vue">
                <img src="~@/assets/photo_03.jpg" class="north_three" :style="north_three_vue">
                <img src="~@/assets/photo_04.jpg" class="north_four" :style="north_four_vue">
                <img src="~@/assets/photo_05.jpg" class="north_five" :style="north_five_vue">
                <img src="~@/assets/photo_06.jpg" class="north_six" :style="north_six_vue">
                <img src="~@/assets/photo_07.jpg" class="north_seven" :style="north_seven_vue">
                <ul>
                    <li class="north_li_img_one"  @click="north_show(0)"></li>
                    <li class="north_li_img_two"  @click="north_show(1)"></li>
                    <li class="north_li_img_three"  @click="north_show(2)"></li>
                    <li class="north_li_img_four" @click="north_show(3)"></li>
                    <li class="north_li_img_five"  @click="north_show(4)"></li>
                    <li class="north_li_img_six"  @click="north_show(5)"></li>
                    <li class="north_li_img_seven"  @click="north_show(6)"></li>
                </ul>
            </div>
            <img src="~@/assets/nt-zone-01-title.gif" class="north_animal_map">
            <div>
                <div class="north_text">
                    <p>流冰漂浮，寒冷的北極海。</p>
                    <p>在流冰下前進，就能和環斑海豹來一場不可</p>
                    <p>思議的相遇。</p>
                    <div class="north_text_img">
                        <h4>北極圈展示區</h4>
                        <img src="~@/assets/nt-zone-01-detail-btn.jpg">
                    </div>
                </div>
            </div>
        </div>


        <div class="falkland_animal" ref="falkland">
            <div class="falkland_animal_img">
                <img src="~@/assets/photo_01 (1).jpg" class="falkland_one" :style="falkland_one_vue">
                <img src="~@/assets/photo_02 (1).jpg" class="falkland_two" :style="falkland_two_vue">
                <ul>
                    <li class="falkland_li_img_one"  @click="falkland_show(0)"></li>
                    <li class="falkland_li_img_two"  @click="falkland_show(1)"></li>
                </ul>
            </div>
            <img src="~@/assets/nt-zone-02-title.gif" class="falkland_animal_map">
            <div>
                <div class="falkland_text">
                    <p>分隔欄的高度只到成人胸部，企鵝就在遊客</p>
                    <p>的眼前跳躍。</p>
                    <p>可以近距離「體感」企鵝的生活。</p>
                    <div class="falkland_text_img">
                        <h4>看福克蘭群島（馬爾維納斯群島展示區的說明展示區）</h4>
                        <img src="~@/assets/nt-zone-02-detail-btn.jpg">
                    </div>
                </div>
            </div>
        </div>


        <div class="maldives_animal" ref="maldives">
            <div class="maldives_animal_img">
                <img src="~@/assets/photo_09.jpg" class="maldives_one" :style="maldives_one_vue">
                <img src="~@/assets/photo_10.jpg" class="maldives_two" :style="maldives_two_vue">
                <img src="~@/assets/photo_11.jpg" class="maldives_three" :style="maldives_three_vue">
                <ul>
                    <li class="maldives_li_img_one"  @click="maldives_show(0)"></li>
                    <li class="maldives_li_img_two"  @click="maldives_show(1)"></li>
                    <li class="maldives_li_img_three"  @click="maldives_show(2)"></li>
                </ul>
            </div>
            <img src="~@/assets/nt-zone-03-title.gif" class="maldives_animal_map">
            <div>
                <div class="north_text">
                    <p>觀察棲息在珊瑚礁中的小魚。</p>
                    <p style="color:red">*由於包括動物福利在內的綜合觀點，我們已</p>
                    <p style="color:red">經結束了鯊魚觸摸計劃。</p>
                </div>
            </div>
        </div>

        <div class="gallery">
            <img src="~@/assets/nt-galley-title.png" class="gallery_title">
            <h3>來看看更多海遊館的生物的資訊吧！</h3>
            <div class="gallery_img_text">
                <div>
                    <img src="~@/assets/nt-gallery-btn-01.png" @click="scrollposition(1)">
                    <p>北極圈</p>
                </div>
                <div>
                    <img src="~@/assets/nt-gallery-btn-02.png" @click="scrollposition(2)">
                    <p style="width:200px;margin:auto;">福克蘭群島（馬爾維納斯群島）</p>
                </div>
                <div>
                    <img src="~@/assets/nt-gallery-btn-04.png" @click="scrollposition(3)">
                    <p>馬爾地夫群島</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AnimalIsland",
    data() {
        return {
            north_one_vue:{},
            north_two_vue:{},
            north_three_vue:{},
            north_four_vue:{},
            north_five_vue:{},
            north_six_vue:{},
            north_seven_vue:{},
            falkland_one_vue:{},
            falkland_two_vue:{},
            maldives_one_vue:{},
            maldives_two_vue:{},
            maldives_three_vue:{},
            // northObjects: [
            //     { north_one_vue:{}},
            //     { north_two_vue:{} },
            //     { north_three_vue:{} },
            //     { north_four_vue:{} },
            //     { north_five_vue:{} },
            //     { north_six_vue:{} },
            //     { north_seven_vue:{} },
            // ]
        }
    },
    methods: {
        // north_show(number){
        //     for(var i = 0;i <= 0;i++){
        //         if(i == number){
        //             this.$set(this.northObjects[i], 'opacity', '1');
        //             console.log(number);
        //         }
        //         else{
        //             this.$set(this.northObjects[i], 'opacity', '0');
        //             console.log(number);
        //         }
        //     }
        // }
        north_show_basic(){ //基礎 每次都先把所有圖片透明 到下面展現只展現我要的圖案 至少不用都寫這麼多行
            this.$set(this.north_one_vue, 'opacity', '0');
            this.$set(this.north_two_vue, 'opacity', '0');
            this.$set(this.north_three_vue, 'opacity', '0');
            this.$set(this.north_four_vue, 'opacity', '0');
            this.$set(this.north_five_vue, 'opacity', '0');
            this.$set(this.north_six_vue, 'opacity', '0');
            this.$set(this.north_seven_vue, 'opacity', '0');
        },
        north_show(show_number){   //點小圖片切換大圖片
            if(show_number == 0){
                this.north_show_basic();
                this.$set(this.north_one_vue, 'opacity', '1');
            }
            else if(show_number == 1){
                this.north_show_basic();
                this.$set(this.north_two_vue, 'opacity', '1');
            }
            else if(show_number == 2){
                this.north_show_basic();
                this.$set(this.north_three_vue, 'opacity', '1');
            }
            else if(show_number == 3){
                this.north_show_basic();
                this.$set(this.north_four_vue, 'opacity', '1');
            }
            else if(show_number == 4){
                this.north_show_basic();
                this.$set(this.north_five_vue, 'opacity', '1');
            }
            else if(show_number == 5){
                this.north_show_basic();
                this.$set(this.north_six_vue, 'opacity', '1');
            }
            else if(show_number == 6){
                this.north_show_basic();
                this.$set(this.north_seven_vue, 'opacity', '1');
            }

        },
        falkland_show_basic(){ //基礎 每次都先把所有圖片透明 到下面展現只展現我要的圖案 至少不用都寫這麼多行
            this.$set(this.falkland_one_vue, 'opacity', '0');
            this.$set(this.falkland_two_vue, 'opacity', '0');
        },
        falkland_show(show_number){   //點小圖片切換大圖片
            if(show_number == 0){
                this.falkland_show_basic();
                this.$set(this.falkland_one_vue, 'opacity', '1');
            }
            else if(show_number == 1){
                this.falkland_show_basic();
                this.$set(this.falkland_two_vue, 'opacity', '1');
            }
        },
        maldives_show_basic(){ //基礎 每次都先把所有圖片透明 到下面展現只展現我要的圖案 至少不用都寫這麼多行
            this.$set(this.maldives_one_vue, 'opacity', '0');
            this.$set(this.maldives_two_vue, 'opacity', '0');
            this.$set(this.maldives_three_vue, 'opacity', '0');
        },
        maldives_show(show_number){   //點小圖片切換大圖片
            if(show_number == 0){
                this.maldives_show_basic();
                this.$set(this.maldives_one_vue, 'opacity', '1');
            }
            else if(show_number == 1){
                this.maldives_show_basic();
                this.$set(this.maldives_two_vue, 'opacity', '1');
            }
            else if(show_number == 2){
                this.maldives_show_basic();
                this.$set(this.maldives_three_vue, 'opacity', '1');
            }
        },
        scrollposition(position){
            if(position == 1){
                this.$refs.north.scrollIntoView({ behavior: "smooth" });
            }
            else if(position == 2){
                this.$refs.falkland.scrollIntoView({ behavior: "smooth" });
            }
            else{
                this.$refs.maldives.scrollIntoView({ behavior: "smooth" });
            }
        }
    },
}
</script>

<style scoped>

    .island_containner{
        width: 100%;
        height: 3700px;
    }
    .north_animal{
        position: relative;
        height: 1000px;
    }
    .north_animal_map{
        position: absolute;
        width: 360px;
        height: 360px;
        top: 0px;
        left: 200px;
    }
    .north_animal_img img{
        position: absolute;
        width: 1400px;
        height: 900px;
        top: 60px;
        right: 0px;
        transition: all 1s;
    }
    .north_text{
        position: absolute;
        top: 400px;
        left: 30px;
    }
    .north_text p{
        text-align: left;
    }
    .north_text_img{
        border: 1px solid #5d7dbf;
    }
    .north_text_img h4{
        color: #5d7dbf;
        margin: 35px 0 35px 0 ;
    }
    .north_two{
        opacity: 0;
    }
    .north_three{
        opacity: 0;
    }
    .north_four{
        opacity: 0;
    }
    .north_five{
        opacity: 0;
    }
    .north_six{
        opacity: 0;
    }
    .north_seven{
        opacity: 0;
    }

    .north_animal ul{
        display: flex;
        list-style-type: none;
        position: absolute;
        top: 80px;
        right: 20px;
    }
    /* .north_animal ul li{
        margin: 0 10px 0 10px;
        height: 50px;
        width: 50px;
        background-size: cover;
        background-position: center;
    } */
    li{
        margin: 0 10px 0 10px;
        height: 50px;
        width: 50px;
        background-size: cover;
        background-position: center;
    }
    
    .north_li_img_one{
        background-image: url("~@/assets/photo_01.jpg") ;
    }
    .north_li_img_two{
        background-image: url("~@/assets/photo_02.jpg") ;
    }
    .north_li_img_three{
        background-image: url("~@/assets/photo_03.jpg") ;
    }
    .north_li_img_four{
        background-image: url("~@/assets/photo_04.jpg") ;
    }
    .north_li_img_five{
        background-image: url("~@/assets/photo_05.jpg") ;
    }
    .north_li_img_six{
        background-image: url("~@/assets/photo_06.jpg") ;
    }
    .north_li_img_seven{
        background-image: url("~@/assets/photo_07.jpg") ;
    }

    .falkland_animal{
        position: relative;
        height: 1000px;
    }
    .falkland_animal_img img{
        position: absolute;
        width: 1400px;
        height: 900px;
        top: 60px;
        left: 0px;
        transition: all 1s;
    }
    .falkland_animal_map{
        position: absolute;
        width: 360px;
        height: 360px;
        top: 0px;
        right: 250px;
    }

    .falkland_text{
        position: absolute;
        top: 400px;
        right: 100px;
    }
    .falkland_text p{
        text-align: left;
    }
    .falkland_text_img{
        border: 1px solid #5d7dbf;
        width: 300px;
    }
    .falkland_animal ul{
        display: flex;
        list-style-type: none;
        position: absolute;
        top: 80px;
        left: 0px;
    }
    .falkland_text_img h4{
        color: #5d7dbf;
        margin: 35px 0 35px 0 ;
    }
    .falkland_li_img_one{
        background-image: url("~@/assets/photo_01 (1).jpg") ;
    }
    .falkland_li_img_two{
        background-image: url("~@/assets/photo_02 (1).jpg") ;
    }
    .falkland_two{
        opacity: 0;
    }

    .maldives_animal{
        position: relative;
        height: 1000px;
    }
    .maldives_animal_img img{
        position: absolute;
        width: 1400px;
        height: 900px;
        top: 60px;
        right: 0px;
        transition: all 1s;
    }
    .maldives_animal_map{
        position: absolute;
        width: 360px;
        height: 360px;
        top: 0px;
        left: 200px;
    }
    .maldives_animal ul{
        display: flex;
        list-style-type: none;
        position: absolute;
        top: 80px;
        right: 20px;
    }
    .maldives_li_img_one{
        background-image: url("~@/assets/photo_09.jpg") ;
    }
    .maldives_li_img_two{
        background-image: url("~@/assets/photo_10.jpg") ;
    }
    .maldives_li_img_three{
        background-image: url("~@/assets/photo_11.jpg") ;
    }
    .maldives_two {
        opacity: 0;
    }
    .maldives_three{
        opacity: 0;
    }
    li:hover{
        cursor: pointer;
    }

    .gallery_img_text{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        
    }
    .gallery h3{
        color: #a0a0a1;;
    }
    .gallery .gallery_title{
        margin: 50px 0 30px 0;
    }
    .gallery_img_text div{
        margin: 0 50px 0 50px;
    }
    .gallery_img_text p{
        color: #a0a0a1;;
        padding-top: 20px;
    }
    .gallery_img_text img:hover{
        cursor: pointer;
        opacity: 0.5;
    }
</style>