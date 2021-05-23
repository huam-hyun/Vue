<template>
    <div>
        <b-container fluid>
            <b-row align-h="center" align-v="center" style="height: 80vh;">
                <b-col cols="2">
                    <b-row v-for="(item,index) in brands" :key="index" @click="getinfo(index)" style="height: 7vh; border-style: solid; border-radius: 20px; margin-top: 3px; border-width:1px;">
                        <b-col>
                            {{item.brand_name}}
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="10">
                    <b-table :items='this.brand_list'></b-table>
                </b-col>
            </b-row>
        </b-container>

        <!-- all
        <b-card class="result">
            <b-tabs pills card vertical>
                <b-tab v-for="(item, index) in brands" v-bind:title="titles[index]" :key="index" @click="getinfo(index)">
                    <b-card-text>
                        <div>
                            <h1>{{item.brand_name}}</h1>
                            <b-tabs content-class="mt-3">
                                <b-tab title="브랜드 정보" active>
                                    <div>
                                        <b-table :items="items"></b-table>
                                    </div>
                                </b-tab>
                                <b-tab title="본사 정보">
                                    <div>
                                        <b-table :items="items2"></b-table>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card> -->
    </div>
    
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            brands: null,
            titles: [
                'Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8', 'Top9', 'Top10'
            ],
            brand_list: null,

            br_items_1: null,
            br_items_2: null,
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
    },
    methods:{
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

</style>