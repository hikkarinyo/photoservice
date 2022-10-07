<template>
    <div style="border: 1px solid rgba(28,142,249,0.32);" class="mb-3">
        <form style="margin: 10px">
            <h5>Add Photo</h5>
            <error v-if="error" :error="error"></error>
            <success v-if="success" :success="success"></success>
            <div class="form-group">
                <label for="formFile" class="form-label">Select photo</label>
                <input @change="onFileSelected" class="form-control" type="file" id="formFile">
            </div>
            <button @click="onUpload" class="btn btn-primary btn-block">Upload</button>
        </form>
    </div>
</template>
<script>
    import axios from "axios";
    import Error from "./Error";
    import Success from "./Success";

    export default {
        name: 'AddPhoto',
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
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
            },
            async onUpload() {
                try {
                    const fd = new FormData();
                    fd.append('photo', this.selectedFile,  this.selectedFile.name);
                    await axios.post('photo', fd)
                    this.success = 'Photo uploaded successfully!';
                } catch (e) {
                    this.error = 'An error has occurred!';
                }
            },
        }
    }
</script>
