<template>
    <div>
        all
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
            ],
            items: [
                { franchise_months: '10',startup_cost: '200000',average_sales: '3500000',open_rate: '15',close_rate: '20'},
                { franchise_months: '10',startup_cost: '200000',average_sales: '3500000',open_rate: '15',close_rate: '20'}
            ],
            items2: [
                { franchise_months: '10',startup_cost: '200000',average_sales: '3500000',open_rate: '15',close_rate: '20'}
            ]
        }
    },
    created() {
        var themeno = this.$route.query.label;
        console.log(themeno);
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
        })
    },
}
</script>

<style>

</style>