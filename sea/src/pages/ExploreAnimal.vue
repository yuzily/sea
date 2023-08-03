<template>
    <div class="explore_containner">



        <div class="explore_title">
            <img src="~@/assets/top-title.png">
            <div class="explore_title_p">
                <p>以隧道型水槽「魚兒的穿越道・海底隧道」開啟序幕的這趟旅行， 將以最上層有陽光照耀的「日本的森林」為起點， 從地面上一路往海底前進。</p>
                <p>館內備有以模擬太平洋的巨大「太平洋」水槽為主的14個展示水槽， 這些水槽的配置也忠實地重現了環太平洋地區的地理關係。</p>
                <p>也就是說， 它們以最接近實際地球環境的方式重現了太平洋的面貌。</p>
                <p>希望能夠透過周遊太平洋的這趟海遊館之旅， 讓各位感受到生命的美好、珍貴與不可思議， 以及自然環境的重要性。</p>
            </div>
        </div>

        <div class="gate" ref="vue_gate_zone">
            <div class="gate_text">
                <div class="gate_title">
                    <img src="~@/assets/icon-01.gif">
                    <h2>海底隧道</h2>
                </div>
                <div>
                    <p>要是能夠自由地欣賞海中景色的話，該有多美好呢？</p>
                    <p>「魚兒的穿越道・海底隧道」實現了我們這樣的願望。</p>
                    <p>它就像是透明的海底隧道一般，湛藍的世界就在眼前展開</p>
                </div>
            </div>
            <img src="~@/assets/sec-1-image.png" class="gate_hideen_image" :style="gate_hideen_image_vue">
        </div>

        <div class="forest" ref="vue_forest_zone">
            <div class="forest_text">
                <div class="forest_title">
                    <img src="~@/assets/icon-02.gif">
                    <h2>日本的森林</h2>
                </div>
                <div>
                    <p>森林吸收的雨水會成為岩石間的小小溪流，</p>
                    <p>匯入河川，最終流入大海。</p>
                    <p>這個展示區重現了日本的森林，並展示生活在水邊的生物，</p>
                    <p>溪流的魚類，以及森林中的生態系。</p>
                </div>
            </div>
            <img src="~@/assets/sec-2-image.png" class="forest_hideen_image" :style="forest_hideen_image_vue">
        </div>

        <div class="island" ref="vue_island_zone">
            <div class="island_text">
                <div class="island_title">
                    <img src="~@/assets/icon-03.gif">
                    <h2>阿留申群島</h2>
                </div>
                <div>
                    <p>環境寒冷嚴酷的阿留申群島。</p>
                    <p>海中營養豐富，棲息著各种魚類與屬於鳥類的花魁鳥。</p>
                </div>
            </div>
            <img src="~@/assets/sec-3-image.png" class="island_hideen_image" :style="island_hideen_image_vue">
        </div>

        <div class="bay" ref="vue_bay_zone">
            <div class="bay_text">
                <div class="bay_title">
                    <img src="~@/assets/icon-04.gif">
                    <h2>蒙特利灣</h2>
                </div>
                <div>
                    <p>美國加州沿岸的岸壁是許多海洋哺乳動物的棲息處。</p>
                    <p>在這個展示區中可以觀察到生活</p>
                    <p>於海邊岩場的海獅與海豹在陸地上與水中的生活。</p>
                </div>
            </div>
            <img src="~@/assets/sec-4-image.png" class="bay_hideen_image" :style="bay_hideen_image_vue">
        </div>
        <div class="circlemenu">
                <label class="circlemenu_gate"  @mouseover="show_gate=true" @mouseleave="show_gate=false" @click="move_zone(1)">
                    <span v-if="show_gate">海底隧道</span>
                </label>
                <label class="circlemenu_forest" @mouseover="show_forest=true" @mouseleave="show_forest=false" @click="move_zone(2)">
                    <span v-if="show_forest">日本的森林</span>
                </label>
                <label class="circlemenu_island" @mouseover="show_island=true" @mouseleave="show_island=false" @click="move_zone(3)">
                    <span v-if="show_island">阿留申群島</span>
                </label>
                <label class="circlemenu_bay" @mouseover="show_bay=true" @mouseleave="show_bay=false" @click="move_zone(4)">
                    <span v-if="show_bay">蒙特利灣</span>
                </label>
        </div>
    </div>
</template>

<script>
export default {
    name:"ExploreAnimal",
    data() {
        return {
            gate_hideen_image_vue:{},
            forest_hideen_image_vue:{},
            island_hideen_image_vue:{},
            bay_hideen_image_vue:{},
            show_gate:false,
            show_forest:false,
            show_island:false,
            show_bay:false,
        }
    },
    mounted() {
    window.addEventListener('scroll', this.show_gate_img);
    window.addEventListener('scroll', this.show_forest_img);
    window.addEventListener('scroll', this.show_island_img);
    window.addEventListener('scroll', this.show_bay_img);
    // this.show_flag = true;
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.show_gate_img);
    window.removeEventListener('scroll', this.show_forest_img);
    window.removeEventListener('scroll', this.show_island_img);
    window.removeEventListener('scroll', this.show_bay_img);
  },
    methods: {
        show_image(element_ref,hidden_image_vue,offset,dirction){
            const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            const rect = element_ref.getBoundingClientRect();   
            if(rect.top + offset <= scrollPosition && scrollPosition < rect.bottom + offset) {
                this.$set(hidden_image_vue, 'opacity', '1');
                this.$set(hidden_image_vue, dirction, '300px');
            }
            else {
                this.$set(hidden_image_vue, 'opacity', '0');
                this.$set(hidden_image_vue, dirction, '0px');
            }
        },


        show_gate_img(){
            // const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            // const rect = this.$refs.vue_gate_zone.getBoundingClientRect();   
            // const threshold = 300;
            // if(rect.top <= scrollPosition && scrollPosition < rect.bottom + threshold) {
            //     this.$set(this.gate_hideen_image_vue, 'opacity', '1');
            //     this.$set(this.gate_hideen_image_vue, 'right', '300px');
            // }
            // else {
            //     this.$set(this.gate_hideen_image_vue, 'opacity', '0');
            //     this.$set(this.gate_hideen_image_vue, 'right', '0px');
            // }
            const element_ref = this.$refs.vue_gate_zone;
            const hidden_image_vue = this.gate_hideen_image_vue;
            const offset = 300;
            this.show_image(element_ref,hidden_image_vue,offset,"right")
        },
        show_forest_img() {
            // const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            // const rect = this.$refs.vue_forest_zone.getBoundingClientRect();   
            // if(rect.top <= scrollPosition && scrollPosition < rect.bottom) {
            //     this.$set(this.forest_hideen_image_vue, 'opacity', '1');
            //     this.$set(this.forest_hideen_image_vue, 'left', '300px');
            // }
            // else{
            //     this.$set(this.forest_hideen_image_vue, 'opacity', '0');
            //     this.$set(this.forest_hideen_image_vue, 'left', '0px');
            // }
            const element_ref = this.$refs.vue_forest_zone;
            const hidden_image_vue = this.forest_hideen_image_vue;
            const offset = 1100;
            this.show_image(element_ref,hidden_image_vue,offset,"left")
        },
        show_island_img() {
            // const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            // const rect = this.$refs.vue_island_zone.getBoundingClientRect();   
            // if(rect.top <= scrollPosition && scrollPosition < rect.bottom) {
            //     this.$set(this.island_hideen_image_vue, 'opacity', '1');
            //     this.$set(this.island_hideen_image_vue, 'right', '300px');
            // }
            // else{
            //     this.$set(this.island_hideen_image_vue, 'opacity', '0');
            //     this.$set(this.island_hideen_image_vue, 'right', '0px');
            // }
            const element_ref = this.$refs.vue_island_zone;
            const hidden_image_vue = this.island_hideen_image_vue;
            const offset = 2100;
            this.show_image(element_ref,hidden_image_vue,offset,"right")
        },
        show_bay_img() {
            // const scrollPosition = window.scrollY || document.documentElement.scrollTop; //查看現在滾輪在哪裡
            // const rect = this.$refs.vue_bay_zone.getBoundingClientRect();   
            // if(rect.top <= scrollPosition && scrollPosition < rect.bottom) {
            //     this.$set(this.bay_hideen_image_vue, 'opacity', '1');
            //     this.$set(this.bay_hideen_image_vue, 'left', '300px');
            // }
            // else{
            //     this.$set(this.bay_hideen_image_vue, 'opacity', '0');
            //     this.$set(this.bay_hideen_image_vue, 'left', '0px');
            // }
            const element_ref = this.$refs.vue_bay_zone;
            const hidden_image_vue = this.bay_hideen_image_vue;
            const offset = 3100;
            this.show_image(element_ref,hidden_image_vue,offset,"left")
        },
        move_zone(position_zone){
            if(position_zone == 1){
                this.$refs.vue_gate_zone.scrollIntoView({ behavior: "smooth" });
            }
            else if(position_zone == 2){
                this.$refs.vue_forest_zone.scrollIntoView({ behavior: "smooth" });
            }
            else if(position_zone == 3){
                this.$refs.vue_island_zone.scrollIntoView({ behavior: "smooth" });
            }
            else if(position_zone == 4){
                this.$refs.vue_bay_zone.scrollIntoView({ behavior: "smooth" });
            }
        }
    },
}
</script>

<style scoped>
    .explore_title{
        background-image:  url("~@/assets/top-bg.jpg") ;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 850px;   
    }
    .explore_title img{
        height: 4.5%;
        width: 20%;
        margin: 50px 900px 0 0;
    }
    .explore_title p{
        color: #a4ffff;
        font-size: 6px;
        margin-bottom: 10px;
    }
    .explore_title_p{
        margin-top: 630px;
    }
    .gate{
        background-image:  url("~@/assets/sec-1-bg.jpg") ;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 1000px;   
        color: white;
        text-align: left;
        position: relative;
    }
    .gate_title{
        display: flex;
    }
    p{
        font-size: 10px;
        margin-top: 10px;
    }
    .gate_text{
        padding: 750px 0 0 250px;
    }
    .gate_hideen_image{
        position: absolute;
        width: 500px;
        bottom: 100px;
        right: 200px;
        opacity: 0;
        transition: all 3s;
    }
    .forest{
        background-image:  url("~@/assets/sec-2-bg.jpg") ;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 1000px;   
        color: white;
        text-align: left;
        position: relative;
    }
    .forest_title{
        display: flex;
    }
    .forest_text{
        padding: 750px 0px 0 1350px;
    }
    .forest_hideen_image{
        position: absolute;
        width: 500px;
        bottom: 100px;
        left: 200px;
        opacity: 0;
        transition: all 3s;
    }
    .island{
        background-image:  url("~@/assets/sec-3-bg.jpg") ;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 1000px;   
        color: white;
        text-align: left;
        position: relative;
    }
    .island_title{
        display: flex;
    }
    .island_text{
        padding: 750px 0 0 250px;
    }
    .island_hideen_image{
        position: absolute;
        width: 500px;
        bottom: 100px;
        right: 200px;
        opacity: 0;
        transition: all 3s;
    }
    .bay{
        background-image:  url("~@/assets/sec-4-bg .jpg") ;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 1000px;   
        color: white;
        text-align: left;
        position: relative;
    }
    .bay_title{
        display: flex;
    }
    .bay_text{
        padding: 750px 0px 0 1350px;
    }
    .bay_hideen_image{
        position: absolute;
        width: 500px;
        bottom: 100px;
        left: 200px;
        /* opacity: 0; */
        transition: all 3s;
    }
    .circlemenu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        right: 50px;
        top: 200px;
        width: 50px;
        height: 200px;
    }
    .circlemenu label{
        
        display: block;
        background: white;
        width: 10px;
        height: 10px;
        margin: 10px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.1s;
        position: relative;
        
    }
    .circlemenu::before{
        content:"";
        display: block;
        width: 90px;
        height: 2px;
        margin: 0 0 5px 0;
        background-color: white;
        transform: rotate(90deg);
        position:absolute;
        top: 50%;
    }
    .circlemenu label:hover{
        transform: scale(1.6);
    }
    .circlemenu_gate span{
        position: absolute;
        color: white;
        font-size: 10px;
        top: -5px;
        left: -50px;
    }
    .circlemenu_forest span{
        position: absolute;
        color: white;
        font-size: 10px;
        top: -5px;
        left: -62px;
    }
    .circlemenu_island span{
        position: absolute;
        color: white;
        font-size: 10px;
        top: -5px;
        left: -62px;
    }
    .circlemenu_bay span{
        position: absolute;
        color: white;
        font-size: 10px;
        top: -5px;
        left: -50px;
    }
</style>