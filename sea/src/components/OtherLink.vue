<template>
    <div class="otherlinkzone" :style="linkzonevue">
        <div class="linkzone" >
            <router-link to="/opentime">
                <img src="~@/assets/title-arrow-blue.png">       
                <p>請訪問我們</p>
            </router-link>
            
        </div >         
        <div class="picturelinkzone">
            <router-link to="/opentime">
                <img src="~@/assets/time.jpg">
            </router-link>
            <router-link to="/ticket">
                <img src="~@/assets/ticket.jpg">
            </router-link>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="visit-we-zone">
            <router-link to="/introduction">
                <img src="~@/assets/title-arrow-blue.png">
                <p>探索海洋館</p>
            </router-link>
        </div>
        <div class="picturelinkzonetwo">
            <router-link to="/explore">
                <img src="~@/assets/exhibition.jpg">
            </router-link>
            <router-link to="/night">
                <img src="~@/assets/nightsea.jpg">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"OtherLink",
    data() {
        return {
            linkzonevue:{},
        }
    },
    props:["switchflag"],
    watch:{
        switchflag(newvalue){
            if(newvalue == true){
                this.$set(this.linkzonevue, 'margin-top', '600px');
            }
            else if(newvalue == false){
                this.$set(this.linkzonevue, 'margin-top', '100px');
            }
        }
    }
}
</script>

<style scoped>
    .otherlinkzone{
        background: #f2f2f2;
        margin: auto;
        width: 100%;
        height: 1000px;
        margin-top: 100px;
        transition: margin-top 0.3s;
    }
    .linkzone img{
        display: inline-block;
        height: 25px;
        width: 25px;
    }
    .linkzone p{
        display: inline-block;
        margin-left: 10px;
        font-size: 30px;
        color: #17288b;
    }
    .picturelinkzone{
        margin-top: 50px;
        position: relative;

    }
    .picturelinkzone img{
        height: 246px;
        width: 268px;
        margin: 0 25px 0 25px;
        
    }
    .picturelinkzone::after{
        content:"";
        display: flex;
        width: 220px;
        height: 0.1px;
        /* margin: 0 0 10px 0; */
        background-color: #17288b;
        /* position: absolute;
        top: 300px;
        left: 850px; */
        margin: auto;
        margin-top: 50px;
        /* align-items: center;
        justify-content: center; */
        /* transform: rotate(0deg); */
    }
    .visit-we-zone p{
        display: inline-block;
        margin-left: 10px;
        font-size: 30px;
        color: #17288b;
    }
    .visit-we-zone img{
        display: inline-block;
        height: 25px;
        width: 25px;
    }
    .picturelinkzonetwo img{
        height: 188px;
        width: 206px;
        margin: 50px 15px 0 15px;
    }
    a{
        transition: all 0.8s;
    }
    a:hover{
        opacity: 0.5;
    }
    @media screen and (max-width: 1280px) {
        .otherlinkzone{
            margin-top: -230px;
        }
        .picturelinkzone::after{
            display: none;
        }
    }
    @media screen and (max-width: 767px) {
        .otherlinkzone{
            margin-top: 0px;
        }
        .picturelinkzone::after{
            display: none;
        }
    }


</style>