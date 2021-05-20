<template>
    <div>
        <div class="tab">
            <h2>브랜드 찾아보기</h2><br>
            <div class="select">
                <p>도</p>
                <b-select v-model="m_do">
                    <option disabled value="">도 / 특별시 / 광역시 / 특별자치시</option>
                    <option v-for="(m_do, index) in do_s" :key="index">{{m_do}}</option>
                </b-select>
                <br><br>
                <p>시 / 구</p>
                <b-select v-model="m_sigu">
                    <option disabled value="">시 / 구</option>
                    <option v-for="(m_sigu, index) in dynamicChangeByDo(m_do)" :key="index">{{m_sigu}}</option>
                </b-select>
                <br><br>
                <p>읍 / 면 / 동</p>
                <b-select v-model="m_dong">
                    <option disabled value="">읍 / 면 / 동</option>
                    <option v-for="(m_dong, index) in dynamicChangeBySigu(m_sigu)" :key="index">{{m_dong}}</option>
                </b-select>
                <br><br>
                <p>업종</p>
                <b-select v-model="sector">
                    <option disabled value="">업종</option>
                    <option value='한식'>한식</option>
                    <option value='중/일식'>중/일식</option>
                    <option value='치킨'>치킨</option>
                    <option value='카페'>카페</option>
                    <option value='분식'>분식</option>

                    <option value='제과제빵'>제과제빵</option>
                    <option value='주점'>주점</option>
                    <option value='패스트푸드'>패스트푸드</option>
                    <option value='기타 외식'>기타 외식</option>
                    <option value='기타 외국식'>기타 외국식</option>
                </b-select>
                <br><br>

                <b-button @click="result" variant="primary">한눈에 보기</b-button>
                
            </div>
            <div>
                <hr>
                <p>
                    {{m_do}} {{m_sigu}} {{m_dong}}의 인구수 : {{population}}명
                </p>
            </div>
            <div>
                <div v-for="item in fran" :key="item">
                    이름: {{item.brand_name}}<br>
                    업종: {{item.sector}}<br>
                    주소: <p>{{latlngToAddress(item.latitude, item.longitude)[0]}}</p>
                </div>
            </div>
        </div>
            <div id="map" class="map">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    import location_data from '@/data/location.js'
    export default{
        data(){
            return {
                m_do: '',
                m_sigu: '',
                m_dong: '',
                sector: null,
                population: '',
                location_data: location_data.locate,
                do_s: null,
                fran: null,
                address: null,
            }
        },
        created() {
            this.addKakaoMapScript();
            var a = new Array;
            for(var i=0; i<location_data.locate.length; i++){
                if(!a.includes(location_data.locate[i].do))
                {
                    a.push(location_data.locate[i].do);
                }
            }
            this.do_s = a;
        },
        methods: {
            result()
            {
                axios.get('http://34.64.236.155:8000/myapp/address/?do=' 
                        + this.m_do + '&sigu=' + this.m_sigu + "&dong=" + this.m_dong + '&sector=' + this.sector).then((res) =>{
                    this.fran = res.data;
                    axios.get('http://34.64.236.155:8000/myapp/population/?do=' 
                            + this.m_do + '&sigu=' + this.m_sigu + "&dong=" + this.m_dong).then((res) =>{
                        this.population = res.data[0].population
                    })
                    this.initMap();
                    // window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
                })
                
            },
            addKakaoMapScript(){
                const script = document.createElement("script");
                /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=480de901dd8b4754fa3f8e437d642a05&libraries=services";
                document.head.appendChild(script);
            },
            initMap(){
                var container = document.getElementById("map");

                var middle_lat = 0;
                var middle_lng = 0;
                var brand_list1 =new Array
                for(var i =0; i < this.fran.length; i++){
                    brand_list1.push({
                        content: this.fran[i].brand_name + 
                                "\r\n주소: " + this.latlngToAddress(this.fran[i].latitude, this.fran[i].longitude),
                        latlng: new kakao.maps.LatLng(this.fran[i].latitude, this.fran[i].longitude)
                    })
                    if( i == parseInt(this.fran.length/2)){
                        middle_lat = this.fran[i].latitude
                        middle_lng = this.fran[i].longitude
                    }
                }

                var options = {
                    center: new kakao.maps.LatLng(middle_lat, middle_lng),
                    level: 3
                };

                var map = new kakao.maps.Map(container, options);

                for (i = 0; i < brand_list1.length; i++) {
                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: brand_list1[i].latlng // 마커의 위치
                    });

                //     // 마커에 표시할 인포윈도우를 생성합니다 
                    var infowindow = new kakao.maps.InfoWindow({
                        content: brand_list1[i].content // 인포윈도우에 표시할 내용
                    });

                //     // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
                        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
                }

                // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
                function makeOverListener(map, marker, infowindow) {
                    return function() {
                        infowindow.open(map, marker);
                    };
                }

                // // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
                function makeOutListener(infowindow) {
                    return function() {
                        infowindow.close();
                    };
                }
            },
            dynamicChangeByDo(m_do)
            {
                var b = new Array;
                for(var i = 0; i < location_data.locate.length; i++)
                {
                    if(location_data.locate[i].do == m_do && !b.includes(location_data.locate[i].si))
                    {
                        b.push(location_data.locate[i].si);
                    }
                }
                return b.sort();
            },
            dynamicChangeBySigu(m_sigu)
            {
                var b = new Array;

                for(var i = 0; i < location_data.locate.length; i++)
                {
                    if(location_data.locate[i].si == m_sigu && !b.includes(location_data.locate[i].dong))
                    {
                        b.push(location_data.locate[i].dong);
                    }
                }
                return b.sort();
            },
            latlngToAddress(latitude, longitude)    
            {
                var coord = new kakao.maps.LatLng(latitude, longitude);
                var geocoder = new kakao.maps.services.Geocoder();

                // geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
                //     if (status === kakao.maps.services.Status.OK) {
                //         return result[0].address.address_name;
                //     }
                // });
                
                // var data = '';
                geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        console.log(result[0].address.address_name, typeof(result[0].address.address_name));
                        this.address = result[0].address.address_name;
                        
                    }
                });
                console.log(this.address)
                return this.address;
            },
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