<template>
    <div>
        <div>
            <b-card title="비밀번호 찾기">
                <b-form @submit.stop.prevent>
                    <label for="id">ID</label>
                    <b-form-input type="text" id="id" v-model="form.userId" required></b-form-input>
                    <br>
                    <label for="password">Password</label>
                    <b-form-input v-model="form.password" type="password" id="password" required></b-form-input>                
                    <br>

                    <b-button type="submit" variant="primary" @click="find">찾기</b-button>&nbsp;
                    <b-link href="/">메인으로</b-link>
                </b-form>
            </b-card>
        </div>
    </div>
</template>

<script>
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
        find(){

        }
    },
}
</script>

<style>

</style>