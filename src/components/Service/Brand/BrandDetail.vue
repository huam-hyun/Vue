<template>
    <div>
        <b-card class="result">
            <b-overlay
                :show="show"
                rounded="sm"
                variant="white"
                opacity="1"
                blur="blur"
            >            
            <b-card-text>
                <b-overlay :show="show2" variant="white" opacity="1" rounded="sm">
                <div>
                    <h1>{{temp}}</h1>
                    <br>
                    
                    <b-tabs content-class="mt-3">
                        <b-tab title="브랜드 정보" active>
                            <div>
                                <h3>2020년 기준</h3>
                                <b-table striped hover :items="br_items_1"></b-table>
                            </div>
                            <div>
                                <b-table striped hover :items="br_items_2" ></b-table>
                            </div>
                        </b-tab>
                        <b-tab title="본사 정보">
                            <div>
                                <p><strong>본사 기본 정보</strong></p>
                                <b-table :items="this.hq_basic_items"></b-table>
                                <b-table :items="this.hq_basic2_items"></b-table>
                                <hr><br>

                                <p><strong>본사 매출 정보</strong></p>
                                <b-table :items="this.hq_economic_items"></b-table>
                                <hr><br>

                                <p><strong>본사 가맹 정보</strong></p>
                                <b-table :items="this.hq_franchise_items"></b-table>
                                <hr><br>

                                <p><strong>최근 3년간 법 위반 사실</strong></p>
                                <b-table :items="this.hq_law_items"></b-table>
                                <hr><br>
                            </div>
                            <div>
                                <p>위 정보는 공정거래위원회에 등록된 가맹사업거래 정보공개서를 분석한 정보입니다. 참고용으로만 활용하시기 바랍니다.</p>
                            </div>

                        </b-tab>
                    </b-tabs>
                </div>
                </b-overlay>
            </b-card-text>
            </b-overlay>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            temp: null,
            detail: null,
            br_detail: null,
            hq: null,
            hq_basic_items: null,
            hq_basic2_items: null,
            hq_economic_items: null,
            hq_franchise_items: null,
            hq_law_items: null,
            // br_fields_1: ['가맹 시작일', '가맹 개월 수(개월)', '가맹점 수(개)', '임직원 수(명)','가맹 종료(개)','가맹 해지(개)'],
            // br_fields_2: ['평균매출액(년/천원)', '평당 평균매출액(년/천원)','가맹비(천원)','교육비(천원)','보증금(천원)','기타비용(천원)','창업비용(천원)','면적당 비용(천원)','기준면적(천원)','전체비용(천원)'],
            br_items_1: new Array,
            br_items_2: new Array,
            show: true,
            show2: false,
            brands: null,
            brands_detail: [],
            head_detail: [],            
        }
    },
    created() {
        axios.get('http://34.64.236.155:8000/myapp/brand/detail/?name=' + this.$route.query.name).then((res) =>{
            this.br_detail=res.data;
            console.log(this.br_detail)
            axios.get('http://34.64.236.155:8000/myapp/headquarter/?mutual=' + res.data[0].mutual).then((res) =>{
                this.hq=res.data[0];
                console.log('본사' + this.hq)
                this.temp = this.br_detail[0].brand_name  
                this.brandGet();
                this.setHQ();
            })
        })
    },
    methods: {
        brandGet(){
            this.br_items_1.push({
                '가맹 시작일': String(this.br_detail[0].franchise_start_date),
                '가맹 개월 수(개월)': String(this.br_detail[0].franchise_months).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                '가맹점 수(개)': String(this.br_detail[0].num_of_franchise).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                '임직원 수(명)' : String(this.br_detail[0].num_of_employees).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                '가맹 시작(개)': String(this.br_detail[0].num_of_open).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                '가맹 종료(개)': String(this.br_detail[0].num_of_quit).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                '가맹 해지(개)': String(this.br_detail[0].num_of_cancel).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
        this.br_items_2.push({
            '평균매출액(년/천원)': String(this.br_detail[0].average_sales).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '평당 평균매출액(년/천원)': String(this.br_detail[0].average_sales_per_area).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            '가맹비(천원)': String(this.br_detail[0].franchise_fee).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '교육비(천원)': String(this.br_detail[0].education_fee).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '보증금(천원)': String(this.br_detail[0].deposit).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '기타비용(천원)': String(this.br_detail[0].other_cost).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '창업비용(천원)': String(this.br_detail[0].startup_cost).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '면적당 비용(천원)': String(this.br_detail[0].cost_per_area).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '기준면적(천원)': String(this.br_detail[0].standard_area).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ,
            '전체비용(천원)': String(this.br_detail[0].total_cost).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })

        console.log('br_items_1' + this.br_items_1)
      },
      toPrettyString(int_param){
            return String(int_param).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      setHQ(){
            this.hq_basic_items = [
                {
                    '상호': this.hq.mutual, '대표자': this.hq.representative, '법인 설립 등기일': this.hq.register_law_date, '사업자 등록일': this.hq.register_biz_date, '대표 번호': this.hq.representative_number, 
                }
            ]
            this.hq_basic2_items = [
                {
                    '대표 팩스 번호': this.hq.fax_number, '주소': this.hq.address, '사업자 유형': this.hq.biz_type, '법인 등록 번호': this.hq.law_number, '사업자 등록 번호': this.hq.biz_nubmer,
                }
            ]
            this.hq_economic_items = [
                {
                    '연도': '2020년', '자산': this.toPrettyString(this.hq.assets_2020), '부채': this.toPrettyString(this.hq.liabilities_2020), '자본': this.toPrettyString(this.hq.equity_2020), '매출액': this.toPrettyString(this.hq.sales_2020), '영업이익': this.toPrettyString(this.hq.income_2020), '당기순이익': this.toPrettyString(this.hq.net_income_2020)
                }, 
                {
                    '연도': '2019년', '자산': this.toPrettyString(this.hq.assets_2019), '부채': this.toPrettyString(this.hq.liabilities_2019), '자본': this.toPrettyString(this.hq.equity_2019), '매출액': this.toPrettyString(this.hq.sales_2019), '영업이익': this.toPrettyString(this.hq.income_2019), '당기순이익': this.toPrettyString(this.hq.net_income_2019)
                },
                {
                    '연도': '2018년', '자산': this.toPrettyString(this.hq.assets_2018), '부채': this.toPrettyString(this.hq.liabilities_2018), '자본': this.toPrettyString(this.hq.equity_2018), '매출액': this.toPrettyString(this.hq.sales_2018), '영업이익': this.toPrettyString(this.hq.income_2018), '당기순이익': this.toPrettyString(this.hq.net_income_2018)
                },
                {
                    '연도': '2017년', '자산': this.toPrettyString(this.hq.assets_2017), '부채': this.toPrettyString(this.hq.liabilities_2017), '자본': this.toPrettyString(this.hq.equity_2017), '매출액': this.toPrettyString(this.hq.sales_2017), '영업이익': this.toPrettyString(this.hq.income_2017), '당기순이익': this.toPrettyString(this.hq.net_income_2017)
                }
            ]
            this.hq_franchise_items = [
                {
                    '연도': '2020년', '개점': this.toPrettyString(this.hq.opening_2020), '폐점': this.toPrettyString(this.hq.closing_2020), '명의변경': this.toPrettyString(this.hq.name_change_2020),
                },
                {
                    '연도': '2019년', '개점': this.toPrettyString(this.hq.opening_2019), '폐점': this.toPrettyString(this.hq.closing_2019), '명의변경': this.toPrettyString(this.hq.name_change_2019),
                },
                {
                    '연도': '2018년', '개점': this.toPrettyString(this.hq.opening_2018), '폐점': this.toPrettyString(this.hq.closing_2019), '명의변경': this.toPrettyString(this.hq.name_change_2018),
                },
                {
                    '연도': '2017년', '개점': this.toPrettyString(this.hq.opening_2017), '폐점': this.toPrettyString(this.hq.closing_2017), '명의변경': this.toPrettyString(this.hq.name_change_2017),
                }                
            ]
            this.hq_law_items = [
                {
                    '공정거래위원회 시정 조치': this.hq.num_of_correction, '민사소송 패소 및 민사상 화해': this.hq.num_loss_of_law, '형의 선고': this.hq.num_of_sentences
                }
            ]
        },
    }
}
</script>

<style>

</style>