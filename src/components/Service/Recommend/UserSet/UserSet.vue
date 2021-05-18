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
                <b-select v-model="p1" :options="options"></b-select>
                <br><span>선택함: {{p1}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>가맹점 수</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p2" :options="options"></b-select>
                <br><span>선택함: {{p2}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>가맹점 평균 매출액</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p3" :options="options"></b-select>
                <br><span>선택함: {{p3}}</span><br>
            </b-card>
            <b-card>
                <b-card-title>창업비용</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p4" :options="options"></b-select>
                <br><span>선택함: {{p4}}</span><br>
            </b-card>
            <b-card >
                <b-card-title>개점률</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p5" :options="options"></b-select>
                <br><span>선택함: {{p5}}</span><br>
            </b-card>
            <b-card>
                <b-card-title>폐점률</b-card-title>
                <b-card-text>해당 브랜드가 가맹사업을 시작했는지 얼마나 됐는지를 나타냅니다.</b-card-text>
                <b-select v-model="p6" :options="options"></b-select>
                <br><span>선택함: {{p6}}</span><br>
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
            p1: null,
            p2: null,
            p3: null,
            p4: null,
            p5: null,
            p6: null,
            options: [
                {
                    value: '0', text: '1순위'
                },
                {
                    value: '1', text: '2순위'
                },
                {
                    value: '2', text: '3순위'
                },
                {
                    value: '3', text: '4순위'
                },
                {
                    value: '4', text: '5순위'
                },
                {
                    value: '5', text: '6순위'
                },
            ]
        }  
    },
    methods: {
        result(){
            this.$router.push({
                path: '/service/recommend/userset/result/all',
                query: {
                    p1: this.p1,
                    p2: this.p2,
                    p3: this.p3,
                    p4: this.p4,
                    p5: this.p5,
                    p6: this.p6,
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