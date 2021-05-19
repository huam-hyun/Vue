<template>
    <div>
        한식
        <b-card class="result">
            <b-tabs pills card vertical>
                <b-tab v-for="(item, index) in brands" v-bind:title="titles[index]" :key="index" active>
                    <b-card-text>
                        <div>
                            <h1>{{item.brand_name}}</h1>
                            <b-tabs content-class="mt-3">
                                <b-tab title="브랜드 정보" active>
                                    <div>
                                        <b-table :items="items"></b-table>
                                    </div>
                                </b-tab>
                                <b-tab title="본사 정보"><p>본사 정보</p></b-tab>
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
            brands: null,
            titles: [
                'Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8', 'Top9', 'Top10'
            ]
        }
    },
    created() {
        let p1 = this.$route.query.p1
        let p2 = this.$route.query.p2
        let p3 = this.$route.query.p3
        let p4 = this.$route.query.p4
        let p5 = this.$route.query.p5
        let p6 = this.$route.query.p6
        let title = this.$route.query.sector
        axios.get('http://34.64.236.155:8000/myapp/customtheme/?p1='+ p1 + '&p2=' + p2 + '&p3=' + p3 + '&p4=' + p4 + '&p5=' + p5 + '&p6=' + p6 + '&sector=' + title).then((res) =>{
            var weight = [0.9, 0.7, 0.5, 0.3, 0.2, 0.1]
            console.log(res.data);
            for(var i = 0; i<res.data.length; i++){
                res.data[i].total_ratio = res.data[i].franchise_months_ratio * weight[p1] + res.data[i].num_of_franchise_ratio * weight[p2] + res.data[i].average_sales_ratio * weight[p3] +
                res.data[i].startup_cost_ratio * weight[p4] + res.data[i].rate_of_opening_ratio * weight[p5] + res.data[i].rate_of_closing_ratio * weight[p6]

                console.log(res.data[i].total_ratio)
            }
            this.brands = res.data;

            this.brands.sort(function(a, b){
                return b.total_ratio - a.total_ratio
            })

            console.log(this.brands)
            for( i = 0; i < this.brands.length; i ++){
                console.log(this.brands[i].total_ratio)
            }
        })
    },
}
</script>

<style>

</style>