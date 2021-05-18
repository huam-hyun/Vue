<template>
    <div id="a">
        


        <b-card class="result">
            <b-tabs pills card vertical>
                <b-tab v-for="(title, index) in 3" v-bind:title="titles[index]" :key="index" active>
                    <b-card-text>
                        <div>
                            <h1>{{brand[index].brandname}}</h1>
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
import data from '@/data/brandinfo.js'
import axios from 'axios'

export default {
    data() {
        return {
            brand: data.Brands,
            items: '',
            titles: [
                'Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6', 'Top7', 'Top8', 'Top9', 'Top10'
            ]
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'http://34.64.236.155:8000/myapp/customtheme/',
            data: {
                p1: this.$route.params.brand_list[0].weight,
                p2: this.$route.params.brand_list[1].weight,
                p3: this.$route.params.brand_list[2].weight,
                p4: this.$route.params.brand_list[3].weight,
                p5: this.$route.params.brand_list[4].weight,
                p6: this.$route.params.brand_list[5].weight,
            }
        }).then((res) =>{
            this.brand = res.data;
        })
    },
        
    
    
}
</script>

<style>
#a{
    height: 100%;
    width: 100%;
}
.result{
    margin-top: 0px;
    height: 100%;
}
</style>