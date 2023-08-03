<template>
    <div class="seafootzone" :style="seafootzone_vue">
        <h3>此網站為個人練習用，如有侵權請告知，謝謝！！</h3>
    </div>
</template>

<script>
export default {
    name:"SeaFoot",
    data() {
        return {
            seafootzone_vue:{},
        }
    },
    props:["switchflag","show_window"],
    watch:{
        switchflag(newvalue){
            if(newvalue == true){
                this.$set(this.seafootzone_vue, 'margin-top', '2460px');
            }
            else if(newvalue == false){
                this.$set(this.seafootzone_vue, 'margin-top', '1860px');
            }
        },
        show_window(newvalue){
            if(newvalue == false){
                    this.$set(this.seafootzone_vue, 'margin-top', '250px');
            }
        }
    }
}
</script>

<style scoped>
    .seafootzone{
        background: black; 
        width: 100%;
        margin-top: 1860px;
        transition: margin-top 0.5s;
    }
    h3{
        color: white;
    }
    @media screen and (max-width: 1280px) and  (min-width: 769px){
        .seafootzone{
            margin-top: 820px;
        }
    }
    @media screen and (max-width: 769px) and (min-width: 767px){
        .seafootzone{
            margin-top: 1450px;
        }
    }
    @media screen and (max-width: 767px){
        .seafootzone{
            margin-top: 1900px;
        }
    }

</style>