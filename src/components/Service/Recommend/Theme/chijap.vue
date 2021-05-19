<template>
    <div>
        중/일식
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
        console.log(this.$route.query)
        var themeno = this.$route.query.label
        var sector = this.$route.query.sector
        axios.get('http://34.64.236.155:8000/myapp/basetheme/?label=' + themeno + '&sector=' + sector).then((res) =>{
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

