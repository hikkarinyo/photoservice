<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <error v-if="error" :error="error"></error>
        <div class="form-group">
            <label>Phone</label>
            <input v-model="phone" type="text" class="form-control" placeholder="Phone">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    import axios from 'axios';
    import Error from "./Error";

    export default {
        name: 'Login',
        components: {
            Error,
        },
        data() {
            return {
                phone: '',
                password: '',
                error: '',

            }
        },
        methods: {
            async handleSubmit() {
                try {
                    const response = await axios.post('login', {
                        phone: this.phone,
                        password: this.password,
                    });
                    localStorage.setItem('token', response.data.token);
                    this.$store.dispatch('user', response.data.user);

                    this.$router.push('/');

                } catch (e) {
                    this.error = 'Incorrect login or password'

                }
            }
        }
    }
</script>
