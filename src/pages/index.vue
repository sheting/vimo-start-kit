<template lang="pug">
  Page
    Header
      Navbar(:hideBackButton="true")
        Title(:title="$t('index.title')")
    Content
      article.index.scrollContent
        section.vimo(padding)
          section.vimo__logo
            section(text-center, no-padding)
              .vimo__logo--img
                img(height="120", src="../assets/vimo.png")
          section.vimo__text
            section(text-center)
              h1 VIMO
              p v{{version}}
              p.message {{$t('index.message')}}
          section.vimo__btns
            Button(color="primary", block, solid, @click="$router.push({name:'introduction'})")
              | {{$t('index.introduction')}}
            Button(block, solid, @click="$router.push({name:'components'})")
              | {{$t('index.components')}}
            Button(block, solid, @click="$router.push({name:'practice'})")
              | {{$t('index.practice')}}
            Button(color="danger", block solid @click="switchLanguage")
              | {{$t('index.switchLanguage')}}({{$i18n.locale.toUpperCase()}})
    Footer.index.inspired
      .inspired__name INSPIRED BY
      .inspired__logos
        section
          i.inspired__logos--ionic
        section
          i.inspired__logos--vue
          span Vue.js
</template>
<script type="text/javascript">
  export default {
    name: 'Index',
    data () {
      return {
        version: window.VM.version
      }
    },
    methods: {
      switchLanguage () {
        if (this.$i18n.locale !== 'cn') {
          this.$i18n.locale = 'cn'
        } else {
          this.$i18n.locale = 'en'
        }
      }
    },
    mounted () {}
  }
</script>
<style scoped lang="less">
.index.scrollContent {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-content: center;
  .vimo {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-bottom: 55px;
    width: 100%;
    .vimo__logo {
      .vimo__logo--img {
        height: 120px;
      }
    }
    .vimo__text {
      margin-top: 5px;
      margin-bottom: 5px;
      h1 {
        font-weight: bold;
      }
      p {
        margin: 5px 0;
        font-size: 12px;
        color: #2c3e50;
      }
      .message {
        line-height: 22px;
      }
      .star {
        line-height: 22px;
      }
    }
  }
}

.index.inspired {
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #eee;
  text-align: center;
  background: rgba(256, 256, 256, 0.7);
  .inspired__name {
    font-size: 14px;
    line-height: 120%;
    padding: 5px 0;
    margin: 0;
    color: #919191;
  }
  .inspired__logos {
    display: flex;
    justify-content: center;
    align-content: center;
    & > section {
      display: flex;
      justify-content: center;
      align-content: center;
      i {
        display: inline-block;
        /*outline: 1px solid red;*/
      }
      & > span {
        display: inline-block;
        height: 100%;
        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        font-size: 13px;
        line-height: 154%;
        color: #2c3e50;
        font-weight: 500;
      }
      .inspired__logos--ionic {
        height: 22px;
        width: 80px;
        background: transparent url(../assets/ionic.png) no-repeat top center/60px auto;
      }
      .inspired__logos--vue {
        height: 22px;
        width: 26px;
        background: transparent url(../assets/vue.png) no-repeat top center/22px auto;
      }
    }
  }
}
</style>

