
<script>
import axios from 'axios';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
    created() {
        // console.log(this.$route.params.slug)

        axios.get(`${this.baseUrl}/api/projects/${ this.$route.params.slug }`).then((resp) => {
            // console.log(resp);
            this.projects = resp.data.result;
        })
    }
};
</script>


<template>
    <div class="container mt-4">
        <h2>Single Project</h2>
    </div>
</template>

<style lang="scss" scoped></style>