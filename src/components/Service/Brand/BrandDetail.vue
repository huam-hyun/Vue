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
            detail: null,
        }
    },
    created() {
        axios.get('http://34.64.236.155:8000/myapp/brand/detail/?name=' + this.$route.params.name).then((res) =>{
            console.log(res)
            axios.get('http://34.64.236.155:8000/myapp/headquarter/?mutual=' + res.data[0].mutual).then((res) =>{
                console.log(res)
                
            })
            
        })
        
        
    },
}
</script>

<style>

</style>