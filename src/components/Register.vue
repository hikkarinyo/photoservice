<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error"></error>
        <h3>Sign Up</h3>
        <div class="form-group">
            <label>First Name</label>
            <input name="first_name" v-model="first_name" type="text" class="form-control" placeholder="First Name">
        </div>
        <div class="form-group">
            <label>Surname</label>
            <input name="surname" v-model="surname" type="text" class="form-control" placeholder="Surname">
        </div>
        <div class="form-group">
            <label>Phone</label>
            <input name="phone" v-model="phone" type="text" class="form-control" placeholder="Phone">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input name="password" v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
    import axios from 'axios'
    import Error from "./Error";

    export default {
        name: 'Register',
        components: {
            Error,
        },
        data() {
            return {
                first_name: '',
                surname: '',
                phone: '',
                password: '',
                error: '',
            }
        },
        methods: {
            async handleSubmit() {
                try {
                    await axios.post('signup', {
                        first_name: this.first_name,
                        surname: this.surname,
                        phone: this.phone,
                        password: this.password,
                    });
                    this.$router.push('login');
                } catch (e) {
                    this.error = 'Error occurred!';
                }
            }
        }
    }
</script>
