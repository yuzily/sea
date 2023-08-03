<template>

    <div class="news">
        <div class="newszone" @click="openmemu">
            <span class="newstitle">
                News
            </span>
            <span class="newsword">
                我們正在掛起鯨鯊和其他動物的"原創彩帶"（至 5 月 31 日）...more
            </span>
            <div class="switch" :style="switchvue">
                <p>{{morebutton}}</p>
                <img :src="moreimg"/>
            </div>


            
        </div>

        <div class="newsmenu" :style = "containner">

       
            <input type="radio" id="control-1" name="control" :checked="checkedall[0]">
            <input type="radio" id="control-2" name="control" :checked="checkedall[1]">
            <input type="radio" id="control-3" name="control" :checked="checkedall[2]">
            <input type="radio" id="control-4" name="control" :checked="checkedall[3]">
            <input type="radio" id="control-5" name="control" :checked="checkedall[4]">
            <input type="radio" id="control-6" name="control" :checked="checkedall[5]">
     

            <div class="newspage one" :style="moveone">
                <h2 style="color:#17288b">為了安全和保障（For safety and security）</h2>
                <br>           
                <br> 

                <p>
                    海遊館戴口罩是根據每位訪客的個人判斷而定。
                    <br>
                    在水族館，我們繼續採取措施預防傳染病，例如安裝手指消毒劑和最大限度地通風。
                    <br>
                    感謝您的理解與合作。
                    <br>           
                    <br>   
                    <br>
                </p>
                <h4>1.安全保障措施</h4>
                <p>
                    * 我們的通風系統最大限度地吸收外部空氣，以實現最大程度的通風。
                    <br>
                    * 我們將在開放時間前進行全面日常清潔的同時對建築物進行消毒。
                    <br>
                    * 工作人員會戴上口罩，勤洗手和消毒，以及我們自己的健康管理。 
                    <br>
                    <br>
                    <br>
                </p>
                <h4>2.請求參觀者配合</h4>
                <p>
                    我們請求您的合作如下：
                    <br>
                    *咳嗽或打噴嚏時，請用口罩、紙巾或手帕摀住口鼻（咳嗽禮儀）。
                    <br>
                    *如果您有發燒或喉嚨痛等症狀，請不要來訪。
                    <br>
                    *請避免大聲交談，以免打擾其他訪客。
                    <br>
                    * 護士總是值班。如果您在訪問期間感到不適，請通知附近的工作人員。
                </p>
            </div>
            <div class="newspage two" :style="moveone">
                <img src="~@/assets/front.jpg">
                <h2>我們提供28種語言的指南地圖</h2>
                <br>
                <br>
                <p>
                    在海遊館，我們提供28種語言的指南地圖，如下所示。
                    <br>
                    <br>
                    服務台前有英文，匈牙利文，泰文版，繁體版和簡體中文版和日文版。
                    <br>
                    <br>
                    關於以下22種語言，請聯繫服務台的工作人員。
                    <br>
                    阿拉伯語，支票，丹麥語，荷蘭語，芬蘭語，法語，德語，希伯來語，印地語，印度尼西亞語，意大利語，馬來語，毛利語，挪威語，菲律賓語，波蘭語，葡萄牙語，俄語，西班牙語，瑞典語，泰米爾語，越南
                </p>
            </div>
            <div class="newspage three" :style="moveone">
                <h2>在海遊館的附近可以使用Osaka Free Wifi。</h2>
                <img src="~@/assets/wifimap.jpg">
            </div>
            <div class="newspage four" :style="moveone">
                <img src="~@/assets/icecream.jpg">
                <h2>New items arrive at Kaiyukan's cafe!</h2>
         
                <p>
                    New items with image of Marine animals arrive at 2 cafes in Kaiyukan, Drink Bar "SEA SAW" and Café "Mermaid", for example...
                    <br>
                    "Jinbe Soft": Mixed soft ice cream with Soda pop flavor and Vanilla flavor
                    <br>
                    "Jinbe Late": Cafe Late with Whale Shark drawing with Cocoa powder
                </p>
            </div>
            <div class="newspage five" :style="moveone">
                <img src="~@/assets/whalechild.jpg">
                <h2>海遊館在日本、亞洲的水族館排行榜中同時獲得了第一名的耀眼成績！</h2>
                <br>
                <p>
                    世界最大的旅行口碑網站「Trip Advisor®」，以世界各地的旅客在其網站上投稿的口碑評價為基礎，將基本的觀光景點－動物園和水族館排名。此次發表的「Travelers Choice™ 世界的人氣
                    觀光景點2014 ～動物園和水族館版～」，海遊館在日本及亞洲的水族館排行榜中同時獲得了第一名。從全球的遊客獲得這麼高的評價，我們感到非常榮幸。
                    <br>
                    今後，我們將繼續努力不懈，以便對從世界各地來訪的遊客，傳達「大自然環境與生命」的美麗與寶貴。
                </p>
            </div>
            <div class="newspage six" :style="moveone">
                <h2>海</h2>
                <img src="~@/assets/sea.jpg">
            </div>

            <div class="controlmenu">
                <label for="control-1" @click="rightmove(0)"></label>
                <label for="control-2" @click="rightmove(1)"></label>
                <label for="control-3" @click="rightmove(2)"></label>
                <label for="control-4" @click="rightmove(3)"></label>
                <label for="control-5" @click="rightmove(4)"></label>
                <label for="control-6" @click="rightmove(5)"></label>
            </div>

            <div class="newsnextprev">
                <div class="newsnext">
                    <img src="~@/assets/mv-arrow-blue-left.gif" @click="leftmove()">
                </div>
                <div class="newsprev">
                    <img src="~@/assets/mv-arrow-blue-right.gif" @click="rightmove()">
                </div>
            </div>
        </div>



    </div>
    
</template>

<script>
import openimg from '@/assets/news-arrow-open.png'
import closeimg from '@/assets/news-arrow-close.png'

export default {
    name:"NewsMore",
    data() {
        return {
            containner:{},
            switchvue:{},
            moveone:{},
            checkedall:[true,false,false,false,false,false],
            openclose:false,
            morebutton:"more",
            moreimg:openimg,
            moveright:1,
            moveleft:1,
        }
    },
    props:["checkswitch"],
    methods:{
        openmemu(){
            this.openclose = !this.openclose;  //給監視屬性查看下拉打開視窗
        },
        checkpage(checked){
            console.log("123");
            for(let i = 0;i<this.checkedall.length;i++){
                if(i != checked){
                    this.checkedall[i] = false;                   
                }
            }
        },
        rightmove(pagenumber){    
            if(pagenumber != null){
                this.moveright = pagenumber;
            }   
            
            console.log( this.moveright);

            if(this.moveright == 0){
                this.$set(this.moveone, 'transform', 'translate(0%)');
                this.checkedall[0]=true;
                this.checkpage(0);
                console.log(this.checkedall);
                this.moveright = 1;
                this.moveleft = 1;
            }
            else if(this.moveright == 1){
                this.$set(this.moveone, 'transform', 'translate(-100%)');
                this.checkedall[1]=true;
                this.checkpage(1);
                this.moveright = 2;
                this.moveleft = 0;
                console.log("老A");
            }
            else if(this.moveright == 2){
                this.$set(this.moveone, 'transform', 'translate(-200%)');
                this.checkedall[2]=true;
                this.checkpage(2);
                this.moveright = 3;
                this.moveleft = 5;
            }
            else if(this.moveright == 3){
                this.$set(this.moveone, 'transform', 'translate(-300%)');
                this.checkedall[3]=true;
                this.checkpage(3);
                this.moveright = 4;
                this.moveleft = 4;
            }
            else if(this.moveright == 4){
                this.$set(this.moveone, 'transform', 'translate(-400%)');
                this.checkedall[4]=true;
                this.checkpage(4);
                this.moveright = 5;
                this.moveleft = 3;
            }
            else if(this.moveright == 5){
                this.$set(this.moveone, 'transform', 'translate(-500%)');
                this.checkedall[5]=true;
                this.checkpage(5);
                this.moveright = 0;
                this.moveleft = 2;
            }
        },
        leftmove(){
            if(this.moveleft == 0){
                this.$set(this.moveone, 'transform', 'translate(0%)');
                this.checkedall[0]=true;
                this.checkpage(0);
                this.moveleft = 1;
                this.moveright = 1;
            }
            else if(this.moveleft == 1){
                this.$set(this.moveone, 'transform', 'translate(-500%)');
                this.checkedall[5]=true;
                this.checkpage(5);
                this.moveleft++;
                this.moveright = 0;
            }
            else if(this.moveleft == 2){
                this.$set(this.moveone, 'transform', 'translate(-400%)');
                this.checkedall[4]=true;
                this.checkpage(4);
                this.moveleft++;
                this.moveright = 5;
            }
            else if(this.moveleft == 3){
                this.$set(this.moveone, 'transform', 'translate(-300%)');
                this.checkedall[3]=true;
                this.checkpage(3);
                this.moveleft++;
                this.moveright = 4;
            }
            else if(this.moveleft == 4){
                this.$set(this.moveone, 'transform', 'translate(-200%)');
                this.checkedall[2]=true;
                this.checkpage(2);
                this.moveleft++;
                this.moveright = 3;
            }
            else if(this.moveleft == 5){
                this.$set(this.moveone, 'transform', 'translate(-100%)');
                this.checkedall[1]=true;
                this.checkpage(1);
                this.moveleft = 0;
                this.moveright = 2;
            }
        },
        // choosepage(number){
        //     if(number == 0){

        //     }
        // }
    },
    watch:{
        openclose(newvalue){
            if(newvalue == true){
                this.$set(this.containner, 'max-height', '500px');
                this.morebutton = "close";
                this.moreimg = closeimg;
                this.checkswitch(newvalue);
            }
            else if(newvalue == false){
                this.$set(this.containner, 'max-height', '0px');
                this.morebutton = "more";
                this.moreimg = openimg;
                this.checkswitch(newvalue);
            }
        }
    },
}
</script>

<style scoped>
    .news{
        /* position: absolute; */
        width: 100%;
        background-color: #f2f2f2;
        margin: auto;
    }
    .newszone{
        cursor: pointer;
        width: 826px;
        height: 108px;
        background: white;
        margin:auto;
        position: relative;
        bottom: 50px; 
        display: flex;
        /* justify-content: center; */
        align-items: center;
        justify-content: space-between;
    }
    .newstitle{
        font-size: 22px;
        /* background: saddlebrown; */
        /* justify-self: flex-start; */
        margin: 40px;
        letter-spacing:0.2em;
    }
    .newsword{
        font-size: 16px;
    }
    .switch{
        height: 100%;
        width: 17%;
        background: #17288b;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        transition: opacity 0.3s;
    }
    .switch p{
        color: white;
        text-align: center;
        margin: 15px 3px 15px 30px;
    }
    .switch img{
        width: 15%;
        height: 18%;
        margin: 15px 30px 15px 2px;
    }

    .switch:hover{
        opacity: 0.5;
    }
    .newsmenu{
        width: 826px;
        height: 500px;
        margin: auto;
        background: antiquewhite;
        position: relative;
        top: -50px;
        /* left: 539px; */
        overflow: hidden;
        max-height: 0px;
        transition: all 0.3s;
    }
    .newspage{
        width: 100%;
        height: 100%;
        background: white;
        position: relative;
        top: 0px;
        left: 0px;
        transition: all 0.5s;
    }
    .newspage.one{
        text-align: left; 
        padding: 0 0 0 70px;
    }
    .newspage.two{
        /* display: flex; */
        top: -100%;
        left: 100%;
        /* text-align: left;  */
        /* flex-direction: column; */
        /* align-items: flex-start; */

    }
    .newspage.two h2{
        text-align: left; 
        padding:50px 0 0 80px;
        color: #17288b;
    }
    .newspage.two p{
        text-align: left; 
        width: 400px;
        padding-left: 80px ;
        /* padding: 0 0 0 70px; */
    }
    .newspage.two img{
        width: 300px;
        height: 200px;
        float: right;
        padding-top: 60px;
        padding-right: 50px;
        /* align-self: flex-end; */

    }
    .newspage.three{
        top: -200%;
        left: 200%;
    }
    .newspage.three h2{
        text-align: left;
        color: #17288b;
        padding-left: 80px;
    }
    .newspage.three img{
        width: 600px;
        height: 400px;
        padding-right: 63px;
    }
    .newspage.four{
        top: -300%;
        left: 300%;
    }
    .newspage.four h2{
        text-align: left;
        padding: 50px 0 0 50px;
        color: #17288b;
    }
    .newspage.four p{
        text-align: left;
        padding: 50px 0 0 50px;
    }
    .newspage.newspage.four img{
        width: 300px;
        height: 200px;
        float: right;
        padding: 55px 50px 0 0;
    }
    .newspage.five{
        top: -400%;
        left: 400%;
    }
    .newspage.five h2{
        color: #17288b;
        text-align: left;
        padding: 50px 0 0 50px;
    }
    .newspage.five p{
        text-align: left;
        padding: 0 0 0 50px;
    }
    .newspage.five img{
        height: 200px;
        width: 300px;
        float: right;
        padding: 55px 50px 10px 0;
    }
    .newspage.six{
        top: -500%;
        left: 500%;
    }
    .newspage.six h2{
        color: #17288b;
        text-align: left;
        padding: 40px 0 0 60px;
    }
    .newspage.six img{
        width: 700px;
        height: 350px;
    }
    .newsnextprev .newsnext{
        position: absolute;
        top: 235px;
        left: 0px;
        cursor: pointer;
        /* width: 826px;
        height: 500px; */
        /* background: saddlebrown; */
    }
    .newsnextprev .newsprev{
        position: absolute;
        top: 235px;
        right: 0px;
        cursor: pointer;
        /* width: 826px;
        height: 500px; */
        /* background: saddlebrown; */
    }
    
    input[type="radio"]{
        display: none;
    }

    .controlmenu{
        position: absolute;
        width: 100%;
        /* text-align: center; */
        /* background: black; */
        top: 430px;
    }

    .controlmenu label{
        display: inline-block;
        background: #cccccc;
        width: 11px;
        height: 11px;
        margin: 15px;
        border-radius: 50%;
        border: 2px solid #cccccc;
        cursor: pointer;
    }

    #control-1:checked ~ .controlmenu label:nth-of-type(1){
        background: #17288b;
    }
    #control-2:checked ~ .controlmenu label:nth-of-type(2){
        background: #17288b;
    }
    #control-3:checked ~ .controlmenu label:nth-of-type(3){
        background: #17288b;
    }
    #control-4:checked ~ .controlmenu label:nth-of-type(4){
        background: #17288b;
    }
    #control-5:checked ~ .controlmenu label:nth-of-type(5){
        background: #17288b;
    }
    #control-6:checked ~ .controlmenu label:nth-of-type(6){
        background: #17288b;
    }

    @media screen and (max-width: 1280px) {

        .newszone{
            display: none;
            /* transform: scale(0.35); */
            /* background: black; */
            /* width: 200px;
            height: 50px; */
            /* position: absolute; */
            /* transform: scale(0.35);
            top: -85px;
            left: -200px; */
            /* margin-left: -220px ;
            margin-top: -40px; */
            /* max-height: 500px; */
        }
        .newsmenu{
            transform: scale(0.35);
            max-height: 500px;

            top: -220px;
            left: -60%;
            margin: auto;
            display: none;
        }
    }
</style>