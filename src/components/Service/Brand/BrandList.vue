<template>
    <div>
        <b-input class="searchinput" type="text" placeholder="브랜드 검색" v-model="search" ></b-input><b-button variant="primary" @click="searchbrand" class="searchbutton">검색</b-button>       
        <b-tabs class="card" fill>
            <b-tab title="한식">
                <div>
                <b-card class="brand" v-for="item in items(korean)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
                    <b-card-text>
                        <p class="name">{{item.brand_name}}</p><br>
                        업종: {{item.sector}}<br>
                        평균 매출액: {{item.average_sales}}<br>
                        매장 수: {{item.num_of_franchise}}<br>
                        창업비용: {{item.startup_cost}}
                    </b-card-text>
                </b-card>
                </div>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows(korean)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="중/일식">
                <b-card class="brand" v-for="(item, index) in chijap" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="분식">
                <b-card class="brand" v-for="(item, index) in kimbob" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="패스트푸드">
                <b-card class="brand" v-for="(item, index) in fastfood" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="치킨">
                <b-card class="brand" v-for="(item, index) in chicken" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="제과제빵">
                <b-card class="brand" v-for="(item, index) in bread" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="카페">
                <b-card class="brand" v-for="(item, index) in cafe" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="주점">
                <b-card class="brand" v-for="(item, index) in hof" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="기타외식">
                <b-card class="brand" v-for="(item, index) in etc" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
            </b-tab>

            <b-tab title="기타외국식">
                <b-card class="brand" v-for="(item, index) in etc_f" :key="index" @click="detail(item.brand_name)">
                    <b-card-text>
                        {{item.brand_name}}<br>
                        업종: {{item.sector}}<br>
                        id: {{item.id}}
                    </b-card-text>
                    

                </b-card>
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
            cafe: null,
            chicken: null,
            fastfood: null,
            chijap: null,
            kimbob: null,
            hof: null,
            etc: null,
            etc_f: null,
            search: '',
            perPage: 20,
            currentPage: 1,
            
        }
    },
    computed:{
        rows(){
            return (sector) =>{
                return sector.length
            }
        },
        items(){
            return (sector) =>{
                const items = sector
                return items.slice(
                    (this.currentPage -1) * this.perPage,
                    this.currentPage * this.perPage
                )
            }
        }
    },
    methods: {
        detail(name){
            this.$router.push({
                name: 'BrandDetail',
                query: {name: name},
            })
        },
        searchbrand(){
            this.$router.push({
                name: 'BrandSearch',
                query: {searchparam: this.search},
            })
        }
    },
    created() {
        axios.get('http://34.64.236.155:8000/myapp/brand').then((res)=>{
            this.brands = res.data;
            this.korean = this.brands.filter(item => item.sector ==="한식");
            this.bread = this.brands.filter(item => item.sector === "제과제빵");
            this.cafe = this.brands.filter(item => item.sector === "카페");
            this.chicken = this.brands.filter(item => item.sector === "치킨");
            this.fastfood = this.brands.filter(item => item.sector === "패스트푸드");
            this.chijap = this.brands.filter(item => item.sector === "중/일식");
            this.kimbob = this.brands.filter(item => item.sector === "분식");
            this.hof = this.brands.filter(item => item.sector === "주점");
            this.etc = this.brands.filter(item => item.sector === "기타 외식");
            this.etc_f = this.brands.filter(item => item.sector === "기타 외국식");
            console.log(res.data[3])
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
    width: 95%;
    float:left;
}
.searchbutton{
    width: 5%;
    float: left;
}
.name{
    font-weight: 700;
    font-size: 20px;
}
</style>