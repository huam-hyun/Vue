<template>
    <div>
        <b-container v-if="!overlayShow" fluid>
            <b-row align-h="center" align-v="center" style="height: 80vh;">
                <b-col cols="3">
                    <a style="overflow: auto;">
                        <b-container class="Top10" v-for="(item,index) in brands" :key="index" @click="getinfo(index)">
                            <span class="resultCardTitle">{{item.brand_name}}&nbsp;</span><span class="resultCardText">{{item.sector}}</span><br>
                            <span class="resultCardText">평균매출액 </span>{{item.average_sales}}&nbsp;<span class="resultCardText">창업비용 </span>{{item.startup_cost}}
                        </b-container>
                    </a>
                </b-col>
                <b-col cols="9">
                    <!-- 기본 표 -->
                    <b-container>
                        <b-table :items='this.brand_list'></b-table>
                    </b-container>

                    <!-- 상세보기창 -->
                    <b-container v-if="!overlayShow" fluid class="detail">
                        <b-row align-h="center" class="detailTitle">
                            <b-col cols="auto">
                                <a>{{this.br_detail[0].brand_name}}</a>
                            </b-col>
                        </b-row>

                        <b-row class="detailSelect" align-h="around">
                            <b-col cols="auto" @click="changeSelect('hq')" :class="[isSelected == 'hq' ? 'select2' : '']" style="border-radius: 20px">
                                본사 정보
                            </b-col>
                            <b-col cols="auto" @click="changeSelect('br')" :class="[isSelected == 'br' ? 'select2' : '']" style="border-radius: 20px">
                                브랜드 정보
                            </b-col>
                        </b-row>
                        <hr>
                
                        <b-container fluid class="detailBody" v-if="isSelected == 'hq'">
                            <div>
                                <span class="tableTitle"><strong>본사 기본 정보</strong></span>
                                <b-table :items="this.hq_basic_items"></b-table>
                                <b-table :items="this.hq_basic2_items"></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>본사 매출 정보</strong></span>
                                <b-table :items="this.hq_economic_items"></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>본사 가맹 정보</strong></span>
                                <b-table :items="this.hq_franchise_items"></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>최근 3년간 법 위반 사실</strong></span>
                                <b-table :items="this.hq_law_items"></b-table>
                                <br><hr><br>
                                </div>
                                <div>
                                    <p>위 정보는 공정거래위원회에 등록된 가맹사업거래 정보공개서를 분석한 정보입니다. 참고용으로만 활용하시기 바랍니다.</p>
                                </div>
                        </b-container>
                        <b-container fluid v-if="isSelected == 'br'">
                            <div>
                                <span class="tableTitle"><strong>브랜드 가맹 정보</strong></span>
                                <b-table :items="br_items_1"></b-table>
                                <b-table :items="br_items_2" ></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>브랜드 매출 정보</strong></span>
                                <b-table :items="br_items_3" ></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>브랜드 기본 비용</strong></span>
                                <b-table :items="br_items_4" ></b-table>
                                <br><hr><br>

                                <span class="tableTitle"><strong>인테리어 비용</strong></span>
                                <b-table :items="br_items_5" ></b-table>                        
                            </div>
                        </b-container>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>

        <!-- 오버레이 표시 -->
        <b-overlay
            :show="overlayShow"
            rounded="sm"
            z-index="0"
            variant="tranfparent"
            opacity="0"
        >
            <b-container fluid v-if="overlayShow" style="min-height: 100vh; background-color: #EDECEA">
            </b-container>
        </b-overlay>

    </div>
    
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            isSelected: 'br',
            overlayShow: true,
            br_detail: null,
            hq: null,
            hq_basic_items: null,
            hq_basic2_items: null,
            hq_economic_items: null,
            hq_franchise_items: null,
            hq_law_items: null,
            // br_fields_1: ['가맹 시작일', '가맹 개월 수(개월)', '가맹점 수(개)', '임직원 수(명)','가맹 종료(개)','가맹 해지(개)'],
            // br_fields_2: ['평균매출액(년/천원)', '평당 평균매출액(년/천원)','가맹비(천원)','교육비(천원)','보증금(천원)','기타비용(천원)','창업비용(천원)','면적당 비용(천원)','기준면적(천원)','전체비용(천원)'],
            br_items_1: [],
            br_items_2: [],
            br_items_3: [],
            br_items_4: [],
            br_items_5: [],
            brands: null,    
            delay_spinner: false,
        }
    },
    created() {
        console.log(this.$route.query)
        var themeno = this.$route.query.label
        axios.get('http://34.64.236.155:8000/myapp/basetheme/?label=' + themeno).then((res) =>{
            console.log(res.data);
            for(var i = 0; i<res.data.length; i++){
                res.data[i].total_ratio = res.data[i].average_sales_ratio + res.data[i].startup_cost_ratio + res.data[i].rate_of_opening_ratio
                console.log(res.data[i].total_ratio)
            }
            this.brands = res.data;
            
            this.brands.sort(function(a, b){
                return  b.total_ratio - a.total_ratio
            })
            
            console.log(this.brands)
            for(i = 0; i<res.data.length; i++){
                console.log(this.brands[i].total_ratio)
            }

            this.brand_list = []
            for(i = 0; i<res.data.length; i++){
                this.brand_list.push(
                    {
                        '순위': i+1,
                        '브랜드 이름': this.brands[i].brand_name, '가맹점수': this.brands[i].num_of_franchise, '가맹 개월수': this.brands[i].franchise_months, '연평균매출액(단위: 천원)': this.brands[i].average_sales,
                        '창업비용(단위: 천원)': this.brands[i].startup_cost, '개점률(%)': this.brands[i].rate_of_opening, '폐점률(%)': this.brands[i].rate_of_closing
                    }
                );
            }
        })
        this.overlayShow = false
    },
    methods:{
        changeSelect(a){
            this.isSelected = a
        },
        brandCallback: function (brand_name){
            axios.get('http://34.64.236.155:8000/myapp/brand/detail/?name=' + brand_name).then((res) => {
                console.log(res.data);
                this.delay_spinner = true;
                // 받고 나서 1초 지나고 딜레이 변수 세팅
                setTimeout(() => {
                    this.call_brand = res.data;
                    this.br_items_1 = [
                        {
                            '가맹 시작일': String(res.data[0].franchise_start_date),
                            '가맹 개월 수(개월)': toPrettyString(res.data[0].franchise_months),
                            '가맹점 수(개)': toPrettyString(res.data[0].num_of_franchise),
                            '임직원 수(명)' : toPrettyString(res.data[0].num_of_employees),
                            '가맹 시작(개)': toPrettyString(res.data[0].num_of_open),
                            '가맹 종료(개)': toPrettyString(res.data[0].num_of_quit),
                            '가맹 해지(개)': toPrettyString(res.data[0].num_of_cancel)
                        }
                    ]
                    this.br_items_2 = [
                        {
                            '평균매출액(년/천원)': toPrettyString(res.data[0].average_sales),
                            '평당 평균매출액(년/천원)': toPrettyString(res.data[0].average_sales_per_area),
                            '가맹비(천원)': toPrettyString(res.data[0].franchise_fee),
                            '교육비(천원)': toPrettyString(res.data[0].education_fee),
                            '보증금(천원)': toPrettyString(res.data[0].deposit),
                            '기타비용(천원)': toPrettyString(res.data[0].other_cost),
                            '창업비용(천원)': toPrettyString(res.data[0].startup_cost),
                            '면적당 비용(천원)': toPrettyString(res.data[0].cost_per_area),
                            '기준면적(천원)': toPrettyString(res.data[0].standard_area),
                            '전체비용(천원)': toPrettyString(res.data[0].total_cost)
                        }
                    ]
                    this.delay_spinner = false;
                }, 1000);
            })
            function toPrettyString(int_param){
                return String(int_param).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
}
</script>

<style>
.Top10{
    background-color: #E9DDC8;
    width: 90%;
    height: 7vh;
    margin-top: 0.5vh;
    border-radius: 20px;
    padding-top: 10px;
    text-align: left;
}
.resultCardTitle{
    font-size: 2vh;
    font-weight: bold;
    text-align: left;
}
.resultCardText{
    font-size: 1.5vh;
    font-weight: bold;
}
</style>