<template>
    <div>
        <!-- Header 크기 - Footer크기 -->
        <b-container fluid>
            <b-row style="height: 0vh;"></b-row>
        </b-container>
        <b-container fluid="xl">
            <b-row class="mainSearch" style="height: 40vh;" align-h="center" align-v="end">
                <b-col style="font-size: 40px; font-weight: bold;">
                    브랜드 검색
                </b-col>
            </b-row>
            <b-row class="mainSearch" style="height: 5vh;" align-h="center" align-v="end">
                <b-col cols="6">
                    <b-input-group>
                        <b-input v-if="this.isLogin" type="text" v-model="search" style="border-radius: 20px 0 0 20px;"></b-input>
                        <b-input v-if="!this.isLogin" disabled placeholder="로그인 후 이용 가능합니다" style="border-radius: 20px 0 0 20px;"></b-input>
                        <b-button style=" border-radius: 0 20px 20px 0;" @click="searchbrand"><img src="@/assets/search.png" style="height: 14px;"></b-button>
                    </b-input-group>
                </b-col>
            </b-row>
            <b-row class="mainSearch" style="height: 56vh; margin-top: 4vh;" align-h="center" align-v="start">
                <b-col cols="1">
                    <img src="@/assets/korean.png" style="height: 7vh;"><br>한식
                </b-col>
                <b-col cols="1">
                    <img src="@/assets/chijap.png" style="height: 7vh;"><br>중/일식
                </b-col>
                <b-col cols="1">
                    <img src="@/assets/cafe.png" style="height: 7vh;"><br>카페
                </b-col>
                <b-col cols="1">
                    <img src="@/assets/chicken.png" style="height: 7vh;"><br>치킨
                </b-col>
            </b-row>
            
        </b-container>
        <b-container class="mainContainer" fluid>
            <b-row class="introduce"  align-v="center">
                <b-col class="top"><strong>안녕하세요 프랜드차이입니다</strong><br>
                    <a style="font-size:3vh;">신규 가맹사업자들을 위한 서비스를 지금 바로 만나보세요</a>
                </b-col>
            </b-row>
            
        </b-container>
        <div class="w-100" style="height: 40vh;"></div>
        <b-container class="mainContainer2" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>브랜드 추천</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 3.2vh;">신규 창업자들을 위한 추천 서비스</a>
                    </b-row>
                    
                </b-col>
                <b-col cols="7" >
                    <b-row  class="middle">
                        <b-col cols="3">
                            테마
                        </b-col>
                        <b-col>
                            저희가 미리 정해둔 테마를 만나보세요
                        </b-col>
                    </b-row>
                    <b-row style="height: 10vh;">
                    </b-row>
                    <b-row  class="middle">
                        <b-col cols="3">
                            사용자 설정
                        </b-col>
                        <b-col>
                            조건을 설정하셔도 돼요
                        </b-col>
                    </b-row>                    
                </b-col>
            </b-row>
        </b-container>
        <div class="w-100" style="height: 40vh;"></div>

        <b-container class="mainContainer" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>브랜드 찾기</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 3.2vh;">궁금하신 브랜드가 있다면</a>
                    </b-row>
                    
                </b-col>
                <b-col cols="7" >
                    <b-row  class="middle">
                        <b-col cols="3">
                            검색
                        </b-col>
                        <b-col>
                            보고싶은 브랜드를 찾아보세요
                        </b-col>
                    </b-row>
                    <b-row style="height: 10vh;">
                    </b-row>
                    <b-row  class="middle">
                        <b-col cols="3">
                            카테고리
                        </b-col>
                        <b-col>
                            업종별로도 모아봤어요
                        </b-col>
                    </b-row>                    
                </b-col>
            </b-row>
            
        </b-container>
        <div class="w-100" style="height: 40vh;"></div>

        <b-container class="mainContainer2" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>지도</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 3.2vh;">지도에서 브랜드를 찾아보세요</a>
                    </b-row>
                    
                </b-col>
                <b-col cols="7" >
                    <b-row  class="middle">
                        <b-col cols="3">
                            위치
                        </b-col>
                        <b-col>
                            원하는 위치를 고르세요
                        </b-col>
                    </b-row>
                    <b-row style="height: 10vh;">
                    </b-row>
                    <b-row  class="middle">
                        <b-col cols="3">
                            카테고리
                        </b-col>
                        <b-col>
                            업종별로 위치를 표시해줄게요
                        </b-col>
                    </b-row>                    
                </b-col>
            </b-row>
            
        </b-container>
        <div class="w-100" style="height: 10vh;"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return{
            search: '',
        }
    },
    methods:{
        searchbrand(){
            if(this.isLogin == true){
                this.$router.push({
                    name: 'BrandSearch',
                    query: {searchparam: this.search},
                })
            }
            else{
                alert('로그인후 이용 가능한 서비스입니다')
            }
        },
    },
    computed:{
        ...mapState(['isLogin'])
    }
}
</script>

<style>
.introduce{
    width: 100%;
    text-align: center;
    height: 70vh;
}
.top{
    font-size: 6vh;
}
.middle{
    font-size: 4vh;
    text-align: left;
    border-left: 1px;
    border-left-style: solid;
    margin-top: 5vh;
    padding-left: 20px;
}
.mainContainer{
    background-color: #C6DFD6;
}
.mainContainer2{
    background-color: #E9DDC8;
}
</style>