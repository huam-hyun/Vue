<template>
    <div>
        <!-- Header 크기 - Footer크기 -->
        <b-container fluid>
            <b-row style="height: 5vh;"></b-row>
        </b-container>
        
        <b-container fluid>
            <b-row align-h="center" align-v="center" id="contain">
                <b-col cols="4" class="content" @click="theme">
                    <img class="img" src="@/assets/theme.png" fluid><br>
                    <p class="choice">테마</p>
                    <h5>당신을 위해 준비해뒀어요</h5>
                </b-col>

                <b-col cols="4" class="content" @click="userset">
                    <img class="img" src="@/assets/userset.png" fluid><br>
                    <p class="choice">사용자설정</p>
                    <h5>당신에게 맞춰줄게요</h5>
                </b-col>
            </b-row>

        </b-container>

        <!-- <b-card bg-variant="dark" text-variant="white" class="theme" @click="theme">
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
        </b-card> -->
    </div>
</template>

<script>
export default {
    name: "Choice",
    data(){
        return{
            
        }
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
.title{
    font-size: 50px;
}
.choice{
    font-size: 4vh;
    font-weight: bold;
}
.img{  
    height: 25vh;
    cursor: pointer;
    margin-bottom: 15px;
}
#contain{
    height: 80vh;
}
</style>