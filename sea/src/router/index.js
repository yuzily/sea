//創建router
import VueRouter from 'vue-router'
import OpenTime from '../pages/OpenTime.vue'
import BuyTicket from '../pages/BuyTicket.vue'
import TranfficView from '../pages/TranfficView.vue'
import InformationDesk from '../pages/InformationDesk.vue'
import SeaIntroduction from '../pages/SeaIntroduction.vue'
import FoodTime from '../pages/FoodTime.vue'
import WhatSea from '../pages/WhatSea.vue'
import StudyActivity from '../pages/StudyActivity.vue'
import HaborVillage from '../pages/HaborVillage.vue'
import CaptainShip from '../pages/CaptainShip.vue'
import AlleyFood from '../pages/AlleyFood.vue'
import AnimalIsland from '../pages/AnimalIsland.vue'
import NightSea from '../pages/NightSea.vue'
import ExploreAnimal from '../pages/ExploreAnimal.vue'

const router = new VueRouter({
    // props:["showvue"],
    mode: 'history',
    routes:[
        {
            path:"/opentime",
            component:
               OpenTime,
            meta:{
                router_window_flag: false
            }
        },
        {
            path:"/ticket",
            component:
                BuyTicket,
        },
        {
            path:"/tranffic",
            component:
                 TranfficView,
        },
        {
            path:"/information",
            component:
                InformationDesk,
        },
        {
            path:"/introduction",
            component:
                SeaIntroduction,
        },
        {
            path:"/foodtime",
            component:
                FoodTime,
        },
        {
            path:"/whatsea",
            component:
                WhatSea,
        },
        {
            path:"/activity",
            component:
                StudyActivity,
        },
        {
            path:"/village",
            component:
                HaborVillage,
        },
        {
            path:"/ship",
            component:
                CaptainShip,
        },
        {
            path:"/alley",
            component:
                AlleyFood,
        },
        {
            path:"/island",
            component:
                AnimalIsland,

        },
        {
            path:"/night",
            component:
                NightSea,

        },
        {
            path:"/explore",
            component:
                ExploreAnimal,

        },
        
    ],
    scrollBehavior(){
        return { x: 0, y: 0 };
    }
})

// router.beforeEach((to, from, next) => {
//     // const showHeader = to.meta.showHeader; // 获取路由元信息中的布尔值


//     // //    console.log(vm.$root.showHeader);
//     // next(vm => {
//     //     vm.$root.showHeader = showHeader // 将布尔值传递给 App.vue 组件的 showHeader
        
//     //   },console.log(showHeader,"999"));
//     scrollBehavior(to, from, savedPosition) {
//         // 返回顶部
//         return { x: 0, y: 0 };
//       }
//   })

export default router