
<script>
export default {
    data() {
        return {

        }
    },
    created() {
        console.log(this.$route.params.slug)
    }
};
</script>


<template>
    <div class="container mt-4">
        <h2>Single Project</h2>
    </div>
</template>

<style lang="scss" scoped></style>