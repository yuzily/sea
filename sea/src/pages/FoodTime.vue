<template>
    <div class="foodtime_containner">
        <div class="foodtime_visit">
            <h1 class="information_text">生物們的用餐時</h1>
        </div>

        <div class="title_line"></div>

        <div class="foodtime_content">
            <img src="~@/assets/eattime.png">
            <br>
            <img src="~@/assets/eatimg.png">
        </div>
    </div>
</template>

<script>
export default {
    name:"FoodTime"
}
</script>

<style scoped>
    .foodtime_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_explore.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .foodtime_line{
        color:white;
    }

    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .information_text{
        color: white;
    }
    .foodtime_content{
        width: 100%;
        height: 850px;
        background: white;
    }
    .foodtime_content{
        padding-top: 30px;
    }
</style>