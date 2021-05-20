<template>
    <div>
        <b-input class="searchinput" type="text" placeholder="브랜드 검색" v-model="search" ></b-input><b-button variant="primary" @click="searchbrand" class="searchbutton">검색</b-button>       
        <b-tabs class="card" fill>
            <b-tab title="한식" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(korean)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(korean)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="중/일식" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(chijap)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(chijap)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="분식" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(kimbob)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(kimbob)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="패스트푸드" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(fastfood)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(fastfood)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="치킨" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(chicken)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(chicken)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="제과제빵" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(bread)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(bread)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="카페" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(cafe)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(cafe)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="주점" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(hof)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(hof)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="기타외식" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(etc)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(etc)"
                    :per-page="perPage">
                </b-pagination>
            </b-tab>

            <b-tab title="기타외국식" @click="()=>{currentPage = 1}">
                <table>
                    <b-card class="brand" v-for="item in items(etc_f)" :key="item.brand_name" @click="detail(item.brand_name)" :per-page="perPage">
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
                    align="center"
                    v-model="currentPage"
                    :total-rows="rows(etc_f)"
                    :per-page="perPage">
                </b-pagination>
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
            currentPage: 1
            
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
    min-height: 240px;
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
label{
    margin-bottom: 0px;
}

</style>