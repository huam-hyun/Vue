<template>
    <div>
        <!-- Header 크기 - Footer크기 -->
        <b-container fluid>
            <b-row style="height: 5vh;"></b-row>
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
                        <b-input type="text" style="border-radius: 20px 0 0 20px;"></b-input><b-button style=" border-radius: 0 20px 20px 0;"><img src="@/assets/search.png" style="height: 14px;"></b-button>
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
        <b-container style="background-color: #B8CCE1;" fluid>
            <b-row class="introduce"  align-v="center">
                <b-col class="top"><strong>안녕하세요 프랜드차이입니다</strong></b-col>
            </b-row>
            
        </b-container>
        <div class="w-100" style="height: 70vh;"></div>
        <b-container style="background-color: #B8CCE1;" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>브랜드 추천</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 25px;">신규 창업자들을 위한 추천 서비스</a>
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
        <div class="w-100" style="height: 70vh;"></div>

        <b-container style="background-color: #B8CCE1;" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>브랜드 찾기</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 25px;">궁금하신 브랜드가 있다면</a>
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
        <div class="w-100" style="height: 70vh;"></div>

        <b-container style="background-color: #B8CCE1;" fluid>
            <b-row align-v="center" class="introduce">
                <b-col cols="5">
                    <b-row  class="top" align-h="center">
                        <strong>지도</strong>
                    </b-row>
                    <b-row style="height: 20vh;"></b-row>
                    <b-row align-h="center">
                        <a style="font-size: 25px;">지도에서 브랜드를 찾아보세요</a>
                    </b-row>
                    
                </b-col>
                <b-col cols="7" >
                    <b-row  class="middle">
                        <b-col cols="3">
                            위치 검색
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
        <div class="w-100" style="height: 30vh;"></div>
        <!-- <b-card class="card" title="홈페이지 소개" sub-title="새로운 프랜차이즈 창업자를 위한 서비스">
            <b-card-text>
                안녕하세요 프랜드차이를 찾아주셔서 감사합니다.<br>
                저희 프랜드차이는 고객님들의 성향에 따른 프랜차이즈를 추천 받을 수 있는 서비스를 제공하고 있으니
                많은 이용 부탁드립니다
            </b-card-text>
            <b-card-text>
                문단 나누기도 가능
            </b-card-text>

        </b-card>

        <b-card class="card" title="지도" sub-title="지도">
            <b-card-text>
                지도 기능에서는 카카오맵api를 활용하여 사용자의 위치를 입력받아 주변 프랜차이즈들을 보여줍니다<br>
                사용자들은 자신이 원하는 위치 주변에 어떤 프랜차이즈들이 있는지 확인할 수 있고 계획을 세우는 데 도움을 줍니다<br>
            </b-card-text>
            <b-card-text>
                문단 나누기도 가능
            </b-card-text>

            <b-link href="/service/map" class="card-link">지도 바로가기</b-link>
        </b-card>

        <b-card class="card" title="추천" sub-title="핵심기능들">
            <b-card-text>
                저희가 제공하는 서비스를 통해 자신에게 맞는 프랜차이즈를 추천받아 보세요!<br>
                각 특성들에 맞춰 분류해둔 테마를 고르거나 사용자 맞춤형 추천도 준비되어 있습니다<br>
            </b-card-text>
            <b-card-text>
                문단 나누기도 가능
            </b-card-text>

            <b-link href="/service/recommend/choice" class="card-link">추천 바로가기</b-link>
        </b-card>

        <b-card class="card" title="브랜드 찾아보기" sub-title="브랜드 정보">
            <b-card-text>
                정보공개서를 통해 수집된 브랜드별 데이터를 확인할 수 있습니다<br>
                마음에 점찍어둔 브랜드가 있거나 고민되는 브랜드가 있다면 확인해보세요!
            </b-card-text>
            <b-card-text>
                문단 나누기도 가능
            </b-card-text>

            <b-link href="/service/brand/brandlist" class="card-link">브랜드정보 바로가기</b-link>
        </b-card> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.introduce{
    width: 100%;
    text-align: center;
    height: 70vh;
    background-color: #B8CCE1;
}
.top{
    font-size: 45px;
}
.middle{
    font-size: 30px;
    text-align: left;
    border-left: 1px;
    border-left-style: solid;
    margin-top: 5vh;
    padding-left: 20px;
}
</style>