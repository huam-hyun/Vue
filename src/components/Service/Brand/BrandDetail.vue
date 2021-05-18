<template>
    <div>
        브랜드 상세보기<hr>
        브랜드 이름<br>
        매출<br>
        개점률, 폐점률<br>
        etc...<br>
        그래프 그려넣기
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            result: null,
        }
    },
    created() {
        axios({
            method: 'get',
            url: 'http://34.64.236.155:8000/myapp/brand/?name=' + this.$route.params.name
        }).then((res) =>{
            this.result = res.data;
        });
    },
}
</script>

<style>

</style>