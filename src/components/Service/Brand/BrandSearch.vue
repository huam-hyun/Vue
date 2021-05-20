<template>
    <div>
        <p>{{this.$route.query.searchparam}}에 대한 검색 결과</p>
        <table>
            <b-card class="brand" v-for="item in items" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
                <b-card-text>
                    <p class="name">{{item.brand_name}}</p><br>
                    업종: {{item.sector}}<br>
                    평균 매출액: <label v-if="item.average_sales == 0">비공개</label><label v-else>{{item.average_sales}}</label><br>
                    매장 수: {{item.num_of_franchise}}<br>
                    창업비용: {{item.startup_cost}}
                </b-card-text>
            </b-card>
        </table>
        <b-pagination
            class="pagination"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage">
        </b-pagination>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    conputed:{
        rows(){
            return this.result.length
        },
        items(){
            const items = this.result
            return items.slice(
                (this.currentPage -1) * this.perPage,
                this.currentPage * this.perPage
            )
        },
        
    },
    data(){
        return {
            result: null,
            currentPage: 1,
            perPage: 20,
        }
    },
    created(){
        var url = 'http://34.64.236.155:8000/myapp/brand/?name=';
        axios.get(url + this.$route.query.searchparam).then((res)=>{
             console.log(res);
             this.result = res.data
        });
    },
    methods:{
        detail(name){
            this.$router.push({
                name: 'BrandDetail',
                query: {name: name},
            })
        },
    },
    
}
</script>

<style>
.brand{
    min-height: 240px;
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
}
.pagination{
    position: absolute;
    width: 100px;
    margin-top: 10px;
    margin-left: -50px;
    left: 45%
}
.name{
    font-weight: 700;
    font-size: 20px;
}
label{
    margin-bottom: 0px;
}
.card{
    float:left;
}
</style>