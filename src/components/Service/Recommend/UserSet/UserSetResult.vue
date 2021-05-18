<template>
    <div>
        <b-nav pills>
            <b-nav-item v-for="item in items" :key="item" @click="type(item)">{{item.title}}</b-nav-item>
            
        </b-nav>

        <router-view></router-view>
    </div>

</template>
<script>
export default {
    data() {
        return {
            items:[
                {title: '전체', name:'allResult'},
                {title: '한식', name:'koreanResult'},
                {title: '중/일식', name:'chijapResult'},
                {title: '카페', name:'cafeResult'},
                {title: '분식', name:'kimbobResult'},
                {title: '치킨', name:'chickenResult'},
                {title: '주점', name:'hofResult'},
                {title: '패스트푸드', name:'fastfoodResult'},
                {title: '기타 외식', name:'etcResult'},
                {title: '기타 외국식', name:'etcfResult'},
            ],
        }
    },
    methods:{
        type(param){
            this.$router.push({
                name: param.name,
                query: {
                    sector: param.title,
                    p1: this.$route.query.p1,
                    p2: this.$route.query.p2,
                    p3: this.$route.query.p3,
                    p4: this.$route.query.p4,
                    p5: this.$route.query.p5,
                    p6: this.$route.query.p6,
                }
            })
        }
    },
    created() {
        console.log(this.$route.query)
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