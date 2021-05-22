<template>
    <div class="modal">
        <b-modal id="login" title="로그인" hide-footer>
            <b-form @submit.stop.prevent>
                <label for="id">ID</label>
                <b-form-input type="text" id="id" v-model="form.email" required></b-form-input>
                <br>
                <label for="password">Password</label>
                <b-form-input v-model="form.password" type="password" id="password" required></b-form-input>                
                <br>

                <b-button type="submit" variant="primary" @click="login({ email: form.email, password: form.password})">로그인</b-button>&nbsp;
                <b-link href="/user/findpw">비밀번호 찾기</b-link>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {
            form: {
                email: '',
                password: '',
            }               
        }
    },
    methods: {
        ...mapActions(['login']),
    }
}
</script>

<style>
.modal{
    display: flex;
    align-items: center;
}
</style>