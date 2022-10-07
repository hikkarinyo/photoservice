<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <div class="collapse navbar-collapse">
                <ul v-if="!user" class="navbar-nav ml-auto">
                    <li v-if="!user" class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link to="/signup" class="nav-link">Sign Up</router-link>
                    </li>
                </ul>
                <ul v-if="user" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/photo" class="nav-link">User Photo</router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link to="/user" class="nav-link">Users</router-link>
                    </li>
                    <li  class="nav-item">
                        <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Nav',
        methods: {
            handleClick() {
                localStorage.removeItem('token');
                this.$store.dispatch('user',null);
                this.$router.push('/')
            }

        },
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>
