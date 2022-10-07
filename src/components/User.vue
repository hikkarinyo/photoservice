<template>
    <div>
        <h3>Users</h3>
        <input type="text" v-model="search">
        <div v-for="user in filteredUsers" :key="user.id">
            <ul>
                <li>
                    {{user.first_name}}
                    {{user.surname}}
                    {{user.phone}}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>


    import axios from "axios";

    export default {
        name: "User",
        data() {
            return {
                search: '',
                users: [
                    {
                        id: 1,
                        first_name: 'test'
                    },
                    {
                        id: 2,
                        first_name: 'test2'
                    },
                    {
                        id: 3,
                        first_name: 'cute'
                    },
                ]
            }
        },
        methods: {
        //     getData() {
        //         axios.get('photo')
        //             .then((result) => {
        //                 console.log(result)
        //                 this.users = result.data
        //             })
        //     },
        // },
        // mounted() {
        //     this.getData()
        // },
        computed: {
            filteredUsers() {
                return this.users.filter(users => users.first_name.includes(this.search))
            }
        }
    }
</script>


