<template>
    <div class="input">
        <b-card class="card" title="회원가입">
            <br>
            <b-form @submit.stop.prevent>
                <label for="id">ID</label>
                <b-form-input type="text" id="id" v-model="form.userId" required></b-form-input>
                <br>
                <label for="password">Password</label>
                <b-form-input v-model="form.password" type="password" id="password" aria-describedby="password-help-block" required></b-form-input>
                <b-form-text id="password-help-block">
                    비밀번호는 ~~~~
                </b-form-text>
                <br>
                <label for="password_check">Password Check</label>
                <b-form-input v-model="form.password_check" type="password" id="password_check" required></b-form-input>
                <br>
                <label for="email">E-mail</label> 
                <b-form-input v-model="form.email" type="email" id="email" required></b-form-input>
                <br>
            </b-form>
            <b-button variant="primary">제출</b-button>
        </b-card>    
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                userId: '',
                password: '',
                password_check: '',
                email: ''
            },
        }
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>

<style>
.input{
    margin: 10px;
    text-align: left;
}
.card{
    height: 100%;
}
</style>