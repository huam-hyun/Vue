<template>
    <div>
        <div class="tab">
            <h2>브랜드 찾아보기</h2><br>
            <div class="select">
                <b-form-select v-model="data1" :options="options"></b-form-select>
                <br><span>시/군/구 선택: {{data1}}</span>
                <br><br>
                <b-form-select v-model="data2" :options="options"></b-form-select>
                <br><span>동 선택: {{data2}}</span>
                <br><br>
                <b-form-select v-model="data2" :options="options"></b-form-select>
                <br><span>업종 선택: {{data2}}</span>
                <br><br>                
                <b-button @click="result" variant="primary">한눈에 보기</b-button>
            </div>
        </div>
            <div id="map" class="map">
            
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        mounted(){
            window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
        },
        methods: {
            addKakaoMapScript(){
                const script = document.createElement("script");
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=480de901dd8b4754fa3f8e437d642a05";
                document.head.appendChild(script);
            },
            initMap(){
                var container = document.getElementById("map");
                var options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };

                var map = new kakao.maps.Map(container, options);
                console.log(map);
            } 
        },
    }
</script>


<style>
.map{
    width: 70%;
    min-height: 910px;
    
}
.tab{
    float:left;
    width: 30%;
}

</style>