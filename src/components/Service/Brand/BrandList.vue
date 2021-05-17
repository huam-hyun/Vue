<template>
    <div>
        <b-input class="searchinput" type="text" placeholder="브랜드 검색" v-model="search" ></b-input><b-button variant="primary" @click="searchbrand" class="searchbutton">검색</b-button>       
        <b-tabs class="card" fill>
            <b-tab title="한식">
                <b-card class="brand" v-for="(item, index) in korean" :key="index" @click="detail">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
                <b-card class="brand" v-for="(item, index) in brands.한식" :key="index" @click="detail">
                    <b-card-text>
                        {{item.brandname}}<br>
                        평균 매출액: {{item.average_sale}}<br>
                        창업비용: {{item.startup_cost}}
                    </b-card-text>
                    

                </b-card>
                <b-card class="brand" v-for="(item, index) in brands.한식" :key="index" @click="detail">
                    <b-card-text>
                        {{item.brandname}}<br>
                        평균 매출액: {{item.average_sale}}<br>
                        창업비용: {{item.startup_cost}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="중식">
                <p>중식 브랜드들</p>
            </b-tab>

            <b-tab title="일식">
                <p>일식 브랜드들</p>
            </b-tab>

            <b-tab title="치킨">
                <p>치킨 브랜드들</p>
            </b-tab>

            <b-tab title="커피/디저트">
                <p>커피/디저트 브랜드들</p>
            </b-tab>

            <b-tab title="업종1" disabled>
                <p>업종1 브랜드들</p>
            </b-tab>

            <b-tab title="업종2" disabled>
                <p>업종2 브랜드들</p>
            </b-tab>

            <b-tab title="업종3" disabled>
                <p>업종3 브랜드들</p>
            </b-tab>
        </b-tabs>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            brands: null,
            korean: null,
            search: '',
            
        }
    },
    methods: {
        detail(){
            this.$router.push({
                name: 'BrandDetail',
                
            })
        },
        searchBrand(){
            this.$router.push({
                name: 'BrandSearch',
                params: {searchparam: this.search},
            })
        }
    },
    created() {
        axios.get('http://34.64.236.155:8000/myapp/brand').then((res)=>{
            this.brands = res.data;
            this.korean = this.brands.filter(item => item.sector ==="한식");
            console.log(this.korean);
            console.log(res);
        });
    },
}
</script>

<style>
.brand{
    min-height: 200px;
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
}
.card{
    float:left;
}
.searchinput{
    width: 1800px;
    float:left;
}
.searchbutton{
    width: 70px;
}
</style>