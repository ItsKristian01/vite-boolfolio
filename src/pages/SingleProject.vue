
<script>
import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
        }
    },
    created() {
        // console.log(this.$route.params.slug)

        axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((resp) => {
            //console.log(resp);
            this.projects = resp.data.result;
        })
    }
};
</script>


<template>
    <div class="container">
        <div class="card h-100 p-2 mt-5">
            <div class="card-body">
                <h5 class="card-title">{{ projects.title }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>