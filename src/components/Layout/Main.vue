<template>
    <div>
        <b-card class="card" title="홈페이지 소개" sub-title="새로운 프랜차이즈 창업자를 위한 서비스">
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
        </b-card>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.card{
    /* background-color: beige; */
    width: 100%;
    height: 300px;
    text-align: left;

    margin-top: 10px;
}
</style>