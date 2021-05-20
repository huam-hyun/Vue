<template>
    <div>
        <p>{{this.$route.params.search}}에 대한 검색 결과</p>
        <p v-if="result == null">검색결과가 없습니다</p>
        <p v-else>검색결과 나올 부분</p>
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
    created(){
        var url = 'http://127.0.0.1:8000/myapp/brand/?name=';
        axios.get(url + this.$route.query.searchparam).then((res)=>{
             console.log(res);
        });
    }
}
</script>

<style>

</style>