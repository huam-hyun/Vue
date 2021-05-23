<template>
    <div>
      <b-container fluid="xl">
        <b-row style="height: 40vh;" align-v="center">
          <b-col>
            <b-container @click="detail1" style="background-color: gray; height: 35vh;">
              안정적인 시작!<br>
              중소기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: red; height: 35vh;">
              대규모 프랜차이즈<br>
              대기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: lightblue; height: 35vh;">
              새로운 시작을 함께<br>
              신생 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: pink; height: 35vh;">
              중소 기업 프랜차이즈<br>
              중견기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: beige; height: 35vh;">
              고투자 고수입
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <hr>
      <b-container>
        <b-row style="height: 40vh;" align-v="center">
          <b-col>
            <b-container style="background-color: gray; height: 25vh;">
              안정적인 시작!<br>
              중소기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: red; height: 25vh;">
              대규모 프랜차이즈<br>
              대기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col>
            <b-container style="background-color: lightblue; height: 25vh;">
              새로운 시작을 함께<br>
              신생 프랜차이즈
            </b-container>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col cols="4">
            <b-container style="background-color: pink; height: 25vh;">
              중소 기업 프랜차이즈<br>
              중견기업 프랜차이즈
            </b-container>
          </b-col>
          <b-col cols="4">
            <b-container style="background-color: beige; height: 25vh;">
              고투자 고수입
            </b-container>
          </b-col>
        </b-row>
      </b-container>

      <!-- <b-card class="card" title="안정적인 시작!" sub-title="중소기업 프렌차이즈">
        <b-card-text>
          안정적인 브랜드의 프렌차이즈
        </b-card-text>
        <b-button @click="detail1" variant="primary">Top 10 확인하기</b-button>
      </b-card>
      <b-card class="card" title="대규모 프렌차이즈" sub-title="대기업 프렌차이즈">
        <b-card-text>
          이유 있는 장수 브랜드
        </b-card-text>
        <b-button @click="detail2" variant="primary">Top 10 확인하기</b-button>
      </b-card>
      <b-card class="card" title="새로운 시작을 함께!" sub-title="신생 프렌차이즈">
        <b-card-text>
          트렌디한 높은 개점률의 프렌차이즈
        </b-card-text>
        <b-button @click="detail3" variant="primary">Top 10 확인하기</b-button>
      </b-card>
      <b-card class="card" title="중소 기업 프렌차이즈" sub-title="중견기업 프렌차이즈">
        <b-card-text>
          초보 창업자에게 가장 무난하게 시작할 수 있는 프렌차이즈
        </b-card-text>
        <b-button @click="detail4" variant="primary">Top 10 확인하기</b-button>
      </b-card>
      <b-card class="card" title="고투자 고수입 브랜드" sub-title="넓은 매장의 프렌차이즈">
        <b-card-text>
          여유 있는 창업자에게 추천하는 브랜드
        </b-card-text>
        <b-button @click="detail5" variant="primary">Top 10 확인하기</b-button>
      </b-card>                         -->
    </div>    
</template>


<script>
export default {
    name: "Theme",
    data(){
      return{

      }
    },
    methods: {
        detail1(){
            this.$router.push({
                path: '/service/recommend/theme/result/all',
                query: {label: '1'}
            })
        },
        detail2(){
            this.$router.push({
                path: '/service/recommend/theme/result/all',
                query: {label: '2'}
            })
        },
        detail3(){
            this.$router.push({
                path: '/service/recommend/theme/result/all',
                query: {label: '3'}
            })
        },
        detail4(){
            this.$router.push({
                path: '/service/recommend/theme/result/all',
                query: {label: '4'}
            })
        },
        detail5(){
            this.$router.push({
                path: '/service/recommend/theme/result/all' ,
                query: {label: '5'}
            })
        },
    }
}
</script>

<style>

</style>