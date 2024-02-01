<script>
import axios from 'axios';

export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
    }
  },
  created() {
    axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
      console.log(resp);
    })
  }
}
</script>

<template>
<h1>TEST</h1>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>