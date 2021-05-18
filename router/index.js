import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Layout/Main'
import BrandDetail from '@/components/Service/Brand/BrandDetail'
import BrandList from '@/components/Service/Brand/BrandList'
import BrandSearch from '@/components/Service/Brand/BrandSearch'
import Map from '@/components/Service/Map/Map'
import Choice from '@/components/Service/Recommend/Choice'
import ThemeResult from '@/components/Service/Recommend/Theme/ThemeResult'
import UserSetResult from '@/components/Service/Recommend/UserSet/UserSetResult'
import Theme from '@/components/Service/Recommend/Theme/Theme'
import UserSet from '@/components/Service/Recommend/UserSet/UserSet'
import Register from '@/components/User/Register'
import FindPW from '@/components/User/FindPW'

//테마 결과 중첩라우트 부분
import KoreanResult from '@/components/Service/Recommend/Theme/korean'
import CafeResult from '@/components/Service/Recommend/Theme/cafe'
import ChickenResult from '@/components/Service/Recommend/Theme/chicken'
import FastfoodResult from '@/components/Service/Recommend/Theme/fastfood'
import ChijapResult from '@/components/Service/Recommend/Theme/chijap'
import KimbobResult from '@/components/Service/Recommend/Theme/kimbob'
import HofResult from '@/components/Service/Recommend/Theme/hof'
import EtcResult from '@/components/Service/Recommend/Theme/etc'
import EtcfResult from '@/components/Service/Recommend/Theme/etcf'
import AllResult from '@/components/Service/Recommend/Theme/all'

//사용자 설정 결과 중첩라우트 부분
import koreanResult from '@/components/Service/Recommend/UserSet/korean'
import cafeResult from '@/components/Service/Recommend/UserSet/cafe'
import chickenResult from '@/components/Service/Recommend/UserSet/chicken'
import fastfoodResult from '@/components/Service/Recommend/UserSet/fastfood'
import chijapResult from '@/components/Service/Recommend/UserSet/chijap'
import kimbobResult from '@/components/Service/Recommend/UserSet/kimbob'
import hofResult from '@/components/Service/Recommend/UserSet/hof'
import etcResult from '@/components/Service/Recommend/UserSet/etc'
import etcfResult from '@/components/Service/Recommend/UserSet/etcf'
import allResult from '@/components/Service/Recommend/UserSet/all'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes:[
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/service/brand/branddetail/:brandname?',
            name: 'BrandDetail',
            component: BrandDetail
        },
        {
            path: '/service/brand/brandlist',
            name: 'BrandList',
            component: BrandList
        },
        {
            path: '/service/brand/brandsearch/:searchparam?',
            name: 'BrandSearch',
            component: BrandSearch
        },
        {
            path: '/service/map',
            name: 'Map',
            component: Map
        },
        {
            path: '/service/recommend/choice',
            name: 'Choice',
            component: Choice
        },
        {
            path: '/service/recommend/theme',
            name: 'Theme',
            component: Theme
        },
        {
            path: '/service/recommend/userset',
            name: 'UserSet',
            component: UserSet
        },
        {
            path: '/service/recommend/userset/result',
            name: 'UserSetResult',
            component: UserSetResult,
            children:[
                {     
                    path:'korean',
                    name:'koreanResult',
                    component: koreanResult
                },
                {
                    path:'cafe',
                    name:'cafeResult',
                    component: cafeResult
                },
                {
                    path:'chicken',
                    name:'chickenResult',
                    component: chickenResult
                },
                {
                    path:'fastfood',
                    name:'fastfoodResult',
                    component: fastfoodResult
                },
                {
                    path:'chijap',
                    name:'chijapResult',
                    component: chijapResult
                },
                {
                    path:'kimbob',
                    name:'kimbobResult',
                    component: kimbobResult
                },
                {
                    path:'hof',
                    name:'hofResult',
                    component: hofResult
                },
                {
                    path:'etc',
                    name:'etcResult',
                    component: etcResult
                },
                {
                    path:'etcf',
                    name:'etcfResult',
                    component: etcfResult
                },
                {
                    path:'all',
                    name:'allResult',
                    component: allResult
                },

            ]
        },
        {
            path: '/service/recommend/theme/result',
            name: 'ThemeResult',
            component: ThemeResult,
            children:[
                {     
                    path:'korean',
                    name:'KoreanResult',
                    component: KoreanResult
                },
                {
                    path:'cafe',
                    name:'CafeResult',
                    component: CafeResult
                },
                {
                    path:'chicken',
                    name:'ChickenResult',
                    component: ChickenResult
                },
                {
                    path:'fastfood',
                    name:'FastfoodResult',
                    component: FastfoodResult
                },
                {
                    path:'chijap',
                    name:'ChijapResult',
                    component: ChijapResult
                },
                {
                    path:'kimbob',
                    name:'KimbobResult',
                    component: KimbobResult
                },
                {
                    path:'hof',
                    name:'HofResult',
                    component: HofResult
                },
                {
                    path:'etc',
                    name:'EtcResult',
                    component: EtcResult
                },
                {
                    path:'etcf',
                    name:'EtcfResult',
                    component: EtcfResult
                },
                {
                    path:'all',
                    name:'AllResult',
                    component: AllResult
                },

            ]
        },
        {
            path: '/user/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/user/findpw',
            name: 'FindPW',
            component: FindPW
        },
    ]
})