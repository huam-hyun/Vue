<template>
    <div>
        <Login></Login>

        <b-container class="header" fluid>
            <b-row align-h="end">
                <b-col id="brandTitle" cols="4" @click="goHome" class="pointer"><strong>프랜드차이</strong></b-col>
                <b-col id="header-right" cols="4" v-if="!this.isLogin" style="text-align: right">&nbsp;<span @click="goRegister" class="pointer">회원가입</span>&nbsp;<span @click="$bvModal.show('login')" class="pointer">로그인</span></b-col>
                <b-col id="header-right" cols="4" v-if="this.isLogin" style="text-align: right;">{{ name }} 님 <span @click="logout()" class="pointer" style="font-weight: bold;">로그아웃</span></b-col>
                <div class="w-100"></div>
            </b-row>
            <b-row class="select" v-if="this.isLogin">
                <b-col><a @click="goBrand">브랜드</a></b-col>
                <b-col><a @click="goRecommend">추천</a></b-col>
                <b-col><a @click="goMap">지도</a></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Login from '@/components/User/Login'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Header',
    data(){
        return {
            show: false,
        }
    },
    computed:{
        ...mapState(['name', 'isLogin'])
    },
    methods: {
        ...mapMutations(['logout']),
        goHome(){
            this.$router.push('/').catch(()=>{})
        },
        goRegister(){
            this.$router.push('/user/register').catch(()=>{})
        },
        goBrand(){
            this.$router.push({name: 'BrandList'}).catch(()=>{})
        },
        goRecommend(){
            this.$router.push({name: 'Choice'}).catch(()=>{})
        },
        goMap(){
            this.$router.push({name: 'Map'}).catch(()=>{})
        }
    },
    components: {
        Login
    }
}
</script>

<style>
.pointer{
    cursor: pointer;
}
#header-right{
    text-align: right;
}
#brandTitle{
    font-size: 35px;
    padding-bottom: 10px;
}
.header{
    padding-top: 10px;
    position: fixed;
    background: #eff8ff;
    z-index: 1;
}
.select{
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    cursor: pointer;
    z-index: 1;
}
</style>