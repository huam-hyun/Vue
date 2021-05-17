import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Layout/Main'
import BrandDetail from '@/components/Service/Brand/BrandDetail'
import BrandList from '@/components/Service/Brand/BrandList'
import BrandSearch from '@/components/Service/Brand/BrandSearch'
import Map from '@/components/Service/Map/Map'
import Choice from '@/components/Service/Recommend/Choice'
import ThemeResult from '@/components/Service/Recommend/ThemeResult'
import UserSetResult from '@/components/Service/Recommend/UserSetResult'
import Theme from '@/components/Service/Recommend/Theme'
import UserSet from '@/components/Service/Recommend/UserSet'
import Register from '@/components/User/Register'
import FindPW from '@/components/User/FindPW'

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
            component: UserSetResult
        },
        {
            path: '/service/recommend/theme/result',
            name: 'ThemeResult',
            component: ThemeResult
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