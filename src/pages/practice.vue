<template lang="pug">
Page
  Header
    Navbar(:hideBackButton="false")
      Title(:title="$t('index.practice')")
  Content
    | content
  Footer
    Tabs(tabsLayout="icon-top", @onTabChange="onTabChange", ref="tabs")
      Tab(v-for="(tab, index) in tabs" :key="index" :to="{name: tab.name}", :tabTitle="tab.title", :tabIcon="tab.icon")
</template>

<script>
  export default {
    name: 'practice',
    data () {
      return {
        tabs: [
          {name: 'components', title: this.$t('index.components'), icon: 'list'},
          {name: 'introduction', title: this.$t('index.introduction'), icon: 'list'},
          {name: 'setting', title: this.$t('index.setting'), icon: 'setting'}
        ]
      }
    },
    computed: {
      tabsComponent () {
        return this.$refs.tabs
      }
    },
    methods: {
      onTabChange (index) {
        console.debug('事件 -> onTabChange-selectedIndex:' + index);
        console.debug('当前选择index的tab实例:')
        console.debug(this.tabsComponent.getByIndex(index))
        console.debug('获取当前在激活状态的tab实例:')
        console.debug(this.tabsComponent.getSelected())
        console.debug('由Tabs组件获取当前激活的index:' + this.tabsComponent.getActivatedIndex());
        console.debug('3s后选择第一个')
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          this.tabsComponent.select(0)
        },3000)
      }
    }
  }
</script>
<style scoped lang="less"></style>
