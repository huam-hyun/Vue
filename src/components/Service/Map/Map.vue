<template>
    <div>
        <div class="tab">
            지도 옆부분
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