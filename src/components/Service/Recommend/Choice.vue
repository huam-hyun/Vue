<template>
    <div>
        <b-card bg-variant="dark" text-variant="white" class="theme" @click="theme">
            <b-card-text class="title">
                테마 추천
            </b-card-text>
            <b-card-text>
                아직 브랜드를 선택하지 못하셨나요?<br>

                
            </b-card-text>
            
        </b-card>
        <b-card bg-variant="dark" text-variant="white" class="theme" @click="userset">
            <b-card-title class="title">
                사용자 지정 추천
            </b-card-title>
            <b-card-text>
                창업하는데 정해둔 우선순위가 있으신가요?<br>
                

            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Choice",
    data(){
        
    },
    methods: {
        theme(){
            this.$router.push({
                name: 'Theme'
            })
        },
        userset(){
            this.$router.push({
                name: 'UserSet'
            })
        }
    }
}
</script>

<style>
.theme{
    width: 700px;
    min-height: 700px;
    margin: 110px;
    float: left;
    border-radius: 50%;
    text-align: center;
    padding-top: 270px;
    cursor: pointer;
}
.title{
    font-size: 50px;
}
</style>