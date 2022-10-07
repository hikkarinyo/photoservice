<template>
    <div id="PhotoUser">
        <h3>User Photo</h3>
        <add-photo></add-photo>
        <div v-for="photo in photos" v-bind:key="photo.id">
            <h6 style="margin: 5px;">{{photo.name}}</h6>
            <img style="width: 100px; height: 100px;" :src="photo.url" class="rounded-circle" alt="...">
            <button  style="margin: 5px;" class="btn btn-danger" @click="deletePhoto(photo.id)">Delete</button>
            <button style="margin: 5px;" class="btn btn-primary" @click="updatePhoto(photo.id)">Update</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import AddPhoto from "./AddPhoto";

    export default {
        name: 'PhotoUser',
        components: {AddPhoto},
        data() {
            return {
                photos: null,
            }
        },
        methods: {
            getData() {
                axios.get('photo')
                    .then((result) => {
                        console.log(result)
                        this.photos = result.data
                    })
            },
            deletePhoto(id) {
                axios.delete('photo/' + id)
                    .then(() => {
                        this.getData();
                    })
            },
            updatePhoto(id) {
                this.$router.push('/photo/' + id);
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>
