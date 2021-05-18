<template>
    <div>
        <p>{{this.$route.params.search}}에 대한 검색 결과</p>
        <p v-if="result == null">검색결과가 없습니다</p>
        <p v-else>
            <b-card class="brand" v-for="(item, index) in result" :key="index" @click="detail(item.brand_name)">
                <b-card-text>
                    {{item.brand_name}}<br>
                    업종: {{item.sector}}<br>
                    id: {{item.id}}
                </b-card-text>
                    

            </b-card>
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    data(){
        return {
            result: null,
        }
    },
    methods:{
        detail(name){
            this.$router.push({
                name: 'BrandDetail',
                params: {name: name}
            })
        }
    },
    mounted(){
        var url = 'http://127.0.0.1:8000/myapp/brand/?name=';
        axios.get(url + this.$route.params.searchparam).then((res)=>{
             console.log(res);
             this.result = res.data;
        });
    }
}
</script>

<style>
.brand{
    min-height: 200px;
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
}
</style>