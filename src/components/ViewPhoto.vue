<template>
    <div>
        <form enctype="multipart/form-data" style="margin: 10px">
            <h5>Edit Photo</h5>
            <error v-if="error" :error="error"></error>
            <success v-if="success" :success="success"></success>
            <div class="form-group">
                <label for="formFile" class="form-label">Select photo</label>
                <input @change="onFileSelected" class="form-control" type="file" id="formFile">
            </div>
            <button @click="onUpload()" class="btn btn-primary btn-block">Upload</button>
        </form>
    </div>
</template>
<script>

    import axios from "axios";
    import Error from "./Error";
    import Success from "./Success";

    export default {
        name: "ViewPhoto",
        components: {
            Error,
            Success,
        },
        data() {
            return {
                selectedFile: null,
                error: '',
                success: '',

            }
        },
        methods: {
            getData() {
                axios.get('photo/' + this.$route.params.id)
                    .then((result) => {
                        console.log(result)
                    })
            },
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
                console.log(this.selectedFile)
            },
            async onUpload() {
                try {
                    let fd = new FormData();
                    fd.append('photo', this.selectedFile, this.selectedFile.name);
                    await axios.patch('photo/' + this.$route.params.id, fd)
                    this.success = 'Photo uploaded successfully!';
                } catch (e) {
                    this.error = 'An error has occurred!';
                }
            },

        },
        mounted() {
            this.getData()
        }
    }
</script>

