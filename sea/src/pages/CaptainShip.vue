<template>
    <div>
        <div class="captainship_visit">
            <h1 class="captainshio_text">接駁船「船長線」</h1>
        </div> 

        <div class="title_line"></div>
        <div class="captainship_content">
            <div class="h2_groups">
                <h2>海遊館⇔日本環球影城（USJ）</h2>
                <h2>搭船約10分鐘！ 接駁船船長線指南</h2>
            </div>
            <img src="~@/assets/captenline.png">
        </div>
        <div class="money_zone">
            <h2>海遊館和船長線的優惠套票！</h2>
            <img src="~@/assets/cap_pr_2301.png">
            <div style="margin-bottom: 30px;">
                <p>海遊館門票 通常</p>
                <p>成人（高中生以上） 2,700日圓</p>
                <p>初中生小學生 1,400日圓</p>
                <p>幼兒 700日圓</p>
            </div>
            <div>
                <h3>船長線船票 通常</h3>
                <p>成人（中學生以上）</p>
                <p>900日圓 (單程) | 1,700日圓 (往返)</p>
                <br>
                <p>兒童（小學生）</p>
                <p>500日圓 (單程) | 900日圓 (往返)</p>
                <br>
                <p>幼兒（6歲以下）</p>
                <p>400日圓 (單程) | 700日圓 (往返)</p>
                <p>※每1名大人可免費帶1名2歲以下的小孩。</p>
            </div>
            <img src="~@/assets/cap_hotel.png">
        </div>
        <div class="captainship_content_second">
            <h2>船長線航路</h2>
            <img src="~@/assets/port_img3.png">
            <h2>船長線乘船處</h2>
            <div>
                <img src="~@/assets/port_img.png">
                <img src="~@/assets/port_img2.png">
            </div>
            <h2>最適合這樣的人！</h2>
            <p style="padding-top:15px;">夜晚住宿環球城的飯店。隔天希望早上就開始遊覽大阪！</p>
            <div class="p_groups">
                <p>⇒ 頭班船配合海遊館的開館時間出港，您可以從早上慢慢地遊覽海遊館！</p>
                <p>在「夜晚的海遊館」享受羅曼蒂克的氣氛之後，希望回到環球城的飯店！</p>
            </div>
            <div class="p_groups">
                <p>⇒ 直到海遊館的關門時間有最後一班船，您可以慢慢地欣賞夜晚的海遊館！</p>
                <p>上午在USJ遊玩後，下午希望遊覽大阪！</p>
            </div>
            <div class="p_groups">
                <p>⇒ 只需15分鐘就可抵達海遊館，遊覽之後從海遊館步行5分鐘就到「大阪港」站。因此，到其他的遊覽勝地也很方便！</p>
            </div>
            <div style="padding-top:100px;">
                <h3 style="color:yellow;">船長線時刻表</h3>
                <p>運行時刻每月變動。另外，根據氣象和海象的條件，為了安全起見可能會停開。</p>
                <p>最新運行時刻請在船長線官方網站予以確認。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"CaptainShop",
}
</script>

<style scoped>
    .captainship_visit{
        width: 100%;
        height: 150px;
        background-image: url("~@/assets/title_shoping.png") ;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .captainshio_text{
        color: white;
    }
    .title_line{
        background-image: url("~@/assets/title_line.png") ;
        width: 100%;
        height: 4px;
    }
    .captainship_content{
        width: 100%;
        height: 500px;
        background: cornflowerblue;
    }
    .h2_groups{
        color: white;
        padding: 50px 0 50px 0;
    }
    .money_zone{
        width: 100%;
        height: 1300px;
        background: white;
    }
    .money_zone h2{
        padding-top: 30px;
    }
    .money_zone img{
        padding: 30px 0 20px 0 ;
    }
    .captainship_content_second{
        width: 100%;
        height: 1800px;
        background: cornflowerblue;
    }
    .captainship_content_second h2::after{
        content:"";
        display: block;
        width: 900px;
        height: 0.5px;
        background-color: white;
        margin:auto;
    }
    .captainship_content_second h2{
        color: white;
        padding-top: 70px;
    }
    .captainship_content_second img{
        padding-top: 20px;
    }
    .p_groups{
        padding-top: 40px;
    }
    .captainship_content_second p{
        color: white;
    }
    @media screen and (max-width: 768px) {
        img{
            width: 90%;
        }
        .captainship_content_second h2::after{
            display: none;
        }
        .captainship_content{
            height: 10%;
        }
        .money_zone{
            height: 900px;
        }
        .captainship_content_second{
            height: 1900px;
            /* margin-bottom: 300px; */
        }
    }
</style>