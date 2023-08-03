<template>


    <div class="imgposition">
        <div class="item one" :style="moveone">
            <img src="~@/assets/jellyfish.jpg" >
        </div>
        <div class="item two" :style="movetwo">
            <img src="~@/assets/seal.jpg">
        </div>
        <div class="item three" :style="movethree">
        <img src="~@/assets/whale.jpg">
        </div>
        <div class="item four"  :style="movefour">
            <img src="~@/assets/dolphin.jpg">
        </div>

        <div class="nextprev">
            <div class="next">
                <img src="~@/assets/mv-arrow-left.gif"  @click="updatmoveleft">
            </div>
            <div class="prev">
                <img src="~@/assets/mv-arrow-right.gif" @click="updatmoveright">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SeaContents",
    data() {
        return {
           direction:"",
           picturepositionright:1,
           picturepositionrleft:1,
           moveone:{},
           movetwo:{},
           movethree:{},
           movefour:{}
           
        }
    },
    mounted(){
        this.startAutoMove();
    },
    beforeDestroy(){
        this.stoptAutoMove();
    },
    methods: {
        updatmoveright(){
            this.direction = "right";
            if(this.picturepositionright == 0) {
                this.$set(this.moveone, 'transform', 'translate(0%)');
                this.$set(this.movetwo, 'transform', 'translate(0%)');  //水母
                this.$set(this.movethree,'transform', 'translate(0%)');
                this.$set(this.movefour, 'transform', 'translate(0%)');
                this.picturepositionright++;
                this.picturepositionrleft = 1;
            }
            else if(this.picturepositionright == 1){
                this.$set(this.moveone, 'transform', 'translate(-100%)');
                this.$set(this.movetwo, 'transform', 'translate(-100%)');   //海報
                this.$set(this.movethree,'transform', 'translate(-100%)');
                this.$set(this.movefour, 'transform', 'translate(-100%)');
                this.picturepositionright++;
                this.picturepositionrleft = 0;
            }
            else if(this.picturepositionright == 2){
                this.$set(this.moveone, 'transform', 'translate(-200%)');
                this.$set(this.movetwo, 'transform', 'translate(-200%)');   //鯨魚
                this.$set(this.movethree,'transform', 'translate(-200%)');
                this.$set(this.movefour, 'transform', 'translate(-200%)');
                this.picturepositionright++;
                this.picturepositionrleft = 3;
            }
            else if(this.picturepositionright == 3){
                this.$set(this.moveone, 'transform', 'translate(-300%)');
                this.$set(this.movetwo, 'transform', 'translate(-300%)');      //海豚
                this.$set(this.movethree,'transform', 'translate(-300%)');
                this.$set(this.movefour, 'transform', 'translate(-300%)');
                this.picturepositionright = 0;
                this.picturepositionrleft = 2;
            }
        },

        updatmoveleft(){

            if(this.picturepositionrleft == 0){
                this.$set(this.moveone, 'transform', 'translate(-0%)');
                this.$set(this.movetwo, 'transform', 'translate(-0%)');     //水母
                this.$set(this.movethree,'transform', 'translate(-0%)');
                this.$set(this.movefour, 'transform', 'translate(-0%)');
                this.picturepositionrleft++;
                this.picturepositionright = 1;
            }
            else if(this.picturepositionrleft == 1){
                this.$set(this.moveone, 'transform', 'translate(-300%)');
                this.$set(this.movetwo, 'transform', 'translate(-300%)');   //海豚
                this.$set(this.movethree,'transform', 'translate(-300%)');
                this.$set(this.movefour, 'transform', 'translate(-300%)');
                this.picturepositionrleft++;
                this.picturepositionright = 0;
            }
            else if(this.picturepositionrleft == 2){
                this.$set(this.moveone, 'transform', 'translate(-200%)');
                this.$set(this.movetwo, 'transform', 'translate(-200%)');   //鯨魚
                this.$set(this.movethree,'transform', 'translate(-200%)');
                this.$set(this.movefour, 'transform', 'translate(-200%)');
                this.picturepositionrleft++;
                this.picturepositionright = 3;
            }
            else if(this.picturepositionrleft == 3){
                this.$set(this.moveone, 'transform', 'translate(-100%)');
                this.$set(this.movetwo, 'transform', 'translate(-100%)');   //海報
                this.$set(this.movethree,'transform', 'translate(-100%)');
                this.$set(this.movefour, 'transform', 'translate(-100%)');
                this.picturepositionrleft = 0;
                this.picturepositionright = 2;
            }
        },

        startAutoMove(){
            setInterval(() => {
                this.updatmoveright();
            }, 4000);
        },

        stoptAutoMove(){
            clearInterval(this.updatmoveright());
        }
    },
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
    .imgposition{
        height: 900px;
        width: 100%;
        position: relative;
        overflow: hidden;
 
    }
    .item{
        width: 100%;
        position:absolute;
        top: 0px;
        left: 0px;
        transition: 0.5s transform ease-in-out;
    }
    .item.two{
        left:100%;   
    }
    .item.three{
        left:200%;

    }
    .item.four{
        left:300%;
    }
/* 
    .nextprev{
        background: green;
    } */
    .next{
        cursor: pointer;
        /* background: red; */
        position:absolute;
        top: 50%;
        
    }

    .prev{
        cursor: pointer;
        /* background: red; */
        position:absolute;
        /* left: 98.2%; */
        right: 0px;
        top: 50%; 
    }

    @media screen and (max-width: 1280px ) {
        .next{
            top: 30%;
            left: -10px;
        }
        .prev{
            top: 30%;
            right:-10px;
        }
    }
    @media screen and (max-width: 1024px ) {
        .next{
            top: 20%;
            left: -10px;
        }
        .prev{
            top: 20%;
            right:-10px;
        }
    }
    @media screen and (max-width: 767px){
        .imgposition{
            height: 230px;
        }
        .nextprev img{
            transform: scale(0.5);
        }
        .next{
            top: 20%;
            left: -10px;
        }
        .prev{
            top: 20%;
            right:-10px;
        }
        
    }

</style>