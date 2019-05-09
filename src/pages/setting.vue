<template lang="pug">
Page
  Header
    Navbar
      Title(:title="$t('index.setting')")
  Content
    | setting
</template>

<script>
  export default {
    name: 'setting',
    data () {
      return {}
    }
  }
</script>
<style scoped lang="less"></style>
