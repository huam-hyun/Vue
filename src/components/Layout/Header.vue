<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">프랜드차이</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse"/>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="/service/brand/brandlist">브랜드정보</b-nav-item>
                    <b-nav-item href="/service/map">지도</b-nav-item>
                    <b-nav-item href="/service/recommend/choice">추천서비스</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/user/register" right>회원가입</b-nav-item>
                    <b-nav-item v-b-modal.login right>로그인</b-nav-item>
                    <b-nav-item href="/" right>로그아웃</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            
        </b-navbar>

        <Login/>
    </div>
</template>

<script>
import Login from '@/components/User/Login'

export default {
    name: 'Header',
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    components: {
        Login
    }
}
</script>

<style>

</style>