<template>
    <div>
        <b-card class="result">            
            <b-card-text>
                <div>
                    <h1>{{temp}}</h1>
                    
                    <b-tabs content-class="mt-3">
                        <b-tab title="브랜드 정보" active>
                            <div>
                                <b-table :items="items"></b-table>
                                        
                            </div>
                        </b-tab>
                        <b-tab title="본사 정보">
                            <div>
                                <b-table :items="items2"></b-table>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            temp: '브랜드 이름 들어갈 곳',
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