<template>
    <div>
        <p>
            설명부분<br>

            사용자 우선순위를 통한 브랜드를 찾아볼 수 있는 페이지 입니다.<br>
            저희가 정해둔 6개의 조건을 중요하다고 생각하는 순서대로 나열해주세요<br>
            중복되는 순위는 불가하니 참고해주세요<br><br>
            저희가 제시하는 조건 6가지는 다음과 같습니다<br>
            가맹사업 개월수, 가맹점 수, 가맹점 평균 매출액, 창업비용, 개점률, 폐점률<br>

        </p>
        <div class="select">
            <b-card >
                <b-card-title>가맹사업 개월수</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[0]" :options="options"></b-select>
                <br><span>선택함: {{p[0]}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>가맹점 수</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[1]" :options="options"></b-select>
                <br><span>선택함: {{p[1]}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>가맹점 평균 매출액</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[2]" :options="options"></b-select>
                <br><span>선택함: {{p[2]}}</span><br>
            </b-card>
            <b-card>
                <b-card-title>창업비용</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[3]" :options="options"></b-select>
                <br><span>선택함: {{p[3]}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>개점률</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[4]" :options="options"></b-select>
                <br><span>선택함: {{p[4]}}</span><br>
            </b-card>
            <b-card>
                <b-card-title>폐점률</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p[5]" :options="options"></b-select>
                <br><span>선택함: {{p[5]}}</span><br>
            </b-card>
        </div>
        <b-button @click="result" variant="primary">결과</b-button>
    </div>
</template>

<script>
export default {
    name: "UserSet",
    data(){
        return{
            p:[],
            options: [
                {
                    value: 0, text: '1순위'
                },
                {
                    value: 1, text: '2순위'
                },
                {
                    value: 2, text: '3순위'
                },
                {
                    value: 3, text: '4순위'
                },
                {
                    value: 4, text: '5순위'
                },
                {
                    value: 5, text: '6순위'
                },
            ]
        }  
    },
    methods: {
        result(){
            var condition = [0, 1, 2, 3, 4, 5]
            var cond = this.p
            cond.sort()
            console.log(this.p)
            for(var i = 0; i < 6; i++){
                if(cond[i] != condition[i]){
                    alert('중복된 값이 있습니다')
                    return;
                }
            }
            this.$router.push({
                path: '/service/recommend/userset/result/all',
                query: {
                    p1: this.p[0],
                    p2: this.p[1],
                    p3: this.p[2],
                    p4: this.p[3],
                    p5: this.p[4],
                    p6: this.p[5],
                }
            })
            
        },
    },
}
</script>

<style>
b-card{
    float: left;
    width: 15%;
    
}
</style>