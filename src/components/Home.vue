<template>
    <div>
        <h3 v-if="user">Hello User</h3>
        <h3 v-if="!user">Hello Guest</h3>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',
        computed:{
            ...mapGetters(['user'])
        }

    }
</script>
