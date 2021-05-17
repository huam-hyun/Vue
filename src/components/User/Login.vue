<template>
    <div class="modal">
        <b-modal id="login" title="로그인" hide-footer>
            <b-form @submit.stop.prevent>
                <label for="id">ID</label>
                <b-form-input type="text" id="id" v-model="form.userId" required></b-form-input>
                <br>
                <label for="password">Password</label>
                <b-form-input v-model="form.password" type="password" id="password" required></b-form-input>                
                <br>

                <b-button type="submit" variant="primary" @click="login">로그인</b-button>&nbsp;
                <b-link href="/user/findpw">비밀번호 찾기</b-link>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            form: {
                userId: '',
                password: '',
            }               
        }
    },
    methods: {
        login: function(){
            var url = 'http://34.64.236.155:8000/myapp/login/'
            var param = '?email=' + this.form.userId + '&password=' + this.form.password;
            console.log(this.form.userId, this.form.password);
            axios.post(url + param).then((res) =>{
                if(res.status == 200){
                    alert(this.form.userId+'님 반갑습니다');
                }
            });
        }
    }
}
</script>

<style>
.modal{
    display: flex;
    align-items: center;
}
</style>