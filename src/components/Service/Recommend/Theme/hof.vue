<template>
    <div>
        주점
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
                                <!-- <b-tab title="본사 정보">
                                    <div>
                                        <b-table :items="items2"></b-table>
                                    </div>
                                </b-tab> -->
                            </b-tabs>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
    
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            show: false,
            show2: false,
            brands: null,
            items: [],
            titles: [
                'Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8', 'Top9', 'Top10'
            ],
            
        }
    },
    created() {
                
        var themeno = this.$route.query.label;
        var sector = this.$route.query.sector
        console.log(themeno);
        axios.get('http://34.64.236.155:8000/myapp/basetheme/?label=' + themeno + '&sector=' + sector).then((res) =>{
            this.brands = res.data;
            for(var i = 0; i<this.brands.length; i++){
                this.brands[i].total_ratio = this.brands[i].average_sales_ratio + this.brands[i].startup_cost_ratio + this.brands[i].rate_of_opening_ratio
            }
            
            this.brands.sort(function(a, b){
                return  b.total_ratio - a.total_ratio
            })
            
            // console.log('정렬 완료')
            for(i = 0; i<this.brands.length; i++){
                console.log(this.brands[i].brand_name)
            //     console.log(this.brands[i].total_ratio)
            }
            
            
            // this.brands.reduce((previous, current) =>{  //axios 반복문 쓰려면 비동기 실행해야됨;;
            //     return previous.then(async () =>{
            //         res = await axios.get('http://34.64.236.155:8000/myapp/brand/detail/?name=' + current.brand_name)
            //         console.log(res.data)
            //         this.brand_detail.push(res.data)
            //         if(this.brand_detail.length == 10) this.show=false
            //     })
            // }, Promise.resolve())
            
            this.items.push({
                '가맹 개월 수 (개월)': this.brands[0].franchise_months ,
                '가맹점 수(개)': String(this.brands[0].num_of_franchise).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '평균매출액(년/천원)': String(this.brands[0].average_sales).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '창업비용(천원)': String(this.brands[0].startup_cost).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '개점률(%)':this.brands[0].rate_of_opening ,
                '폐점률(%)':  this.brands[0].rate_of_closing 
            })
            this.show = false
        })
        
    },
    methods:{
        getinfo(index){
            this.items=[]
            // console.log(index)
            // console.log(this.brands[index])
            this.items.push({
                '가맹 개월 수 (개월)': this.brands[index].franchise_months ,
                '가맹점 수(개)': String(this.brands[index].num_of_franchise).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '평균매출액(년/천원)': String(this.brands[index].average_sales).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '창업비용(천원)': String(this.brands[index].startup_cost).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
                '개점률(%)':this.brands[index].rate_of_opening ,
                '폐점률(%)':  this.brands[index].rate_of_closing 
            })

        }
        

    }
}
</script>

<style>

</style>